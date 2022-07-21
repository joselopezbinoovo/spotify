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
    console.log(this.items)
  }


  verArtista(item:any){
    let artisraId;

    if ( item.type === 'artist'){
      console.log(item.type)
      artisraId = item.id
    }else{
      artisraId = item.artists[0].id }
      console.log(artisraId);

    this.router.navigate(['/artist', artisraId])
  }



}
