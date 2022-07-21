import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }




  getquery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const HEADERS  = new HttpHeaders({
      'Authorization':'Bearer BQDYcUd8zXD1wWTorJkuucM1DVVwTTWc35raEGOelUj5WsX_zfYXem-0fI42xZCaOeKrA7NIhwiMw19gQsFOEnZ9I9ycw1lZn_6tC4594F2douN2JTE'
    });

    return this.http.get(url, {headers:HEADERS})


  }

  getAllNewReleases(){

    return this.getquery('browse/new-releases').pipe(map(( data:any) => {
      return data['albums'].items
   }))
   //el pipe es el aspersor y el map son los filtros por donde sale el agua
   //En el pipe map estamos diciendole al map que busque dentro del array de onjetos data el objeto (ALBUMS) y de los albums que obtenga los artistas
  }

  getArtistas(termino:string){ // el teemrino es el string que vamos a usar para buscar

    return this.getquery(`search?q=${termino}&type=artist&limit=20`).pipe(map((data:any)=>{
      return data['artists'].items
     }));
  }

  getArtista(id:string){
    return this.getquery(`artists/${id}`)
    }


  getTopTracks(id:string){
    return this.getquery(`artists/${id}/top-tracks?country=es`).pipe(map((data:any)=>{
      return data['tracks']
     }));

  }

 }


