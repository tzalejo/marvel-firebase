import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {


  constructor(private http: HttpClient) { }

  getAllCharacters():Observable<any>{
    // console.log(this.URL_API);
    return this.http.get<any>(environment.URL_API)
      .pipe(map((data: any) => {

        return data.data.results;
      }));
  }
}
