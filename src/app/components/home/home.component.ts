import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newReleases: any[]=[];
  loading:boolean;

  error: boolean;
  mensajeError:string='';

  constructor(private spotify: SpotifyService) {
    this.loading = true
    this.error = false
  }

  ngOnInit(): void {
    this.getNewReleases()
  }

  getNewReleases(){
    this.spotify.getAllNewReleases().subscribe((data:any)=>{
/*       console.log(data); */
      this.newReleases = data
      this.loading= false
    },(errorServicio)=>{
      this.loading = false;
      this.error = true

      this.mensajeError = errorServicio.error.error.message

    })
  }

}
