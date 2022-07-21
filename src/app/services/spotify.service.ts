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
      'Authorization':'Bearer BQCIm4IOsq-C_rzxM44fzDf7oZ2lPhP45mJ-zD026cdJUleSFk2weJ9yrWNHw-W4Dea6BhwgQEI754a58IuGSfGd4LF3XLX2O3asKbcAiKqJAMUAEu0'

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

  getArtista(termino:string){ // el teemrino es el string que vamos a usar para buscar

    return this.getquery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data:any)=>{
      return data['artists'].items
     }));
  }
  }


