import { Component } from '@angular/core';
import {Source} from "../../news/model/source.entity";
import {NewsApiService} from "../../news/services/news-api.service";

@Component({
  selector: 'app-side-navigation-bar',
  templateUrl: './side-navigation-bar.component.html',
  styleUrl: './side-navigation-bar.component.css'
})
export class SideNavigationBarComponent {
  sources: Array<Source> = []; // arreglo vacio para source

  constructor(private newsApi: NewsApiService) {
  }


  ngOnInit(): void { // al iniciar el componente va ejecutar el siguente procedimiento
    this.newsApi.getSources() // => el api

      .subscribe((data: any)=> { // any no se que tipo de dato es, y el resultado TODO_ el archivome lo pone en data

        this.sources = data['sources']; // ya todo_ el arreglo se pone en sources

        this.sources.forEach((source: {urlToLogo: string}) =>
        source.urlToLogo = ""); // para uno de objeto de ese arreglo agarras y defines un atributo en ese objeto que no viene del API de urlTologo que se esta definiendo vacio
        console.log(this.sources); // mostrar sources
      })
  }
}
