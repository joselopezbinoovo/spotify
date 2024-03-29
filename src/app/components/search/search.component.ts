import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  artistas:any[]=[];
  loading:boolean;

  constructor(private spotify:SpotifyService) {
    this.loading = true
   }

  ngOnInit(): void {

  }

  buscar(temrino:string){
    this.spotify.getArtistas(temrino).subscribe((data:any)=>{
      this.artistas = data
      this.loading=false
    })
  }
}
