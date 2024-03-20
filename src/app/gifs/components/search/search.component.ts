import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GifService } from '../../services/gif.service';
import { Datum } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private fb: FormBuilder, private gifservice: GifService) {}

  List: Datum[] = [];
  Form: FormGroup = this.fb.group({
    search: ['', Validators.required]
  });
  searchHistory: Set<string> = new Set();

  onSearch() {
    if (this.Form.invalid) return;

    const value = this.Form.controls['search'].value;

    this.gifservice.getGifs(value).subscribe({
      next: gifs => {
        if (Array.isArray(gifs)) {
          this.List = gifs;
        } else {
          this.List = gifs.data;
        }
        this.searchHistory.add(value);
        this.gifservice.ListProduct.emit(this.List);
      },
      error: err => {
        console.log(err);
      }
    });
  }

  searchFromHistory(term: string) {
    this.Form.controls['search'].setValue(term);
    this.onSearch();
  }
}
