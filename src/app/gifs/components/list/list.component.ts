import { Component, OnInit } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { Datum } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private gifservice:GifService){

  }

 List: Datum[]=[];

 ngOnInit(): void {
     this.mostrarGif()
 }

 mostrarGif(){
  this.gifservice.ListProduct.subscribe(
    Lista=>{
      this.List=Lista
    }
  )
 }
}
