import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {


  artista:any={};
  topTracks:any=[]=[];
  loading:boolean;

  constructor(private router:ActivatedRoute,private spotify:SpotifyService) {
    this.router.params.subscribe(params => {
      this.getArtista(params['id'])
      this.getTopTrack(params['id'])
    })

    this.loading= true
  }

  ngOnInit(): void {
  }

  getArtista(id:string){
    this.spotify.getArtista(id).subscribe((artista:any) =>{
      console.log(artista);
      this.artista = artista
      this.loading= false
    })
  }

  getTopTrack(id:string){
    this.spotify.getTopTracks(id).subscribe((tracks:any) =>{
        console.log(tracks);
        this.topTracks=tracks
    })
  }

}
