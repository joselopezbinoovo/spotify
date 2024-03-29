import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {

  @Input() items:any[]=[];
  constructor(private router: Router) { }

  ngOnInit(): void {

  }


  verArtista(item:any){
    let artisraId;

    if ( item.type === 'artist'){

      artisraId = item.id
    }else{
      artisraId = item.artists[0].id }


    this.router.navigate(['/artist', artisraId])
  }



}
