import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cat} from '../model/cat';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

import {Store} from '../store/Store';

@Injectable()
export class CatsService {
  endpoint = 'https://atelier-amine-catmash.herokuapp.com/cats/';
  // endpoint = 'http://localhost:8080/cats/';
  constructor(private http: HttpClient,
              private store: Store) {
  }

  getAllCats$: Observable<any> = this.http
    .get<any[]>(this.endpoint)
    .pipe(
      tap(data => {
        const cats = data.images;
        this.store.set('cats', cats);
      })
    );

  update(cat: Cat): Observable<any>{
    return this.http.put(this.endpoint + 'update', cat);
    //   .pipe(
    //   tap(updatedCat => this.store.set('cats', {...this.store.value , cats: [...this.store.value.cats , updatedCat ]}))
    // );
  }
}
