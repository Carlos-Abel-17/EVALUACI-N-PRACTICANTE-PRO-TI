import { NgModule } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
    imports: [
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule
    ],
    exports: [HomeComponent],
    declarations: [
    SearchComponent,
    ListComponent,
    HomeComponent
  ],
    providers: [],
})
export class GifModule { }
