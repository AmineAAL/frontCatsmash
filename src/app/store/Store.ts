import {Cat} from '../model/cat';
import {BehaviorSubject, Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';



export interface State {
  cats: Cat[];
};

export const initialState: State = {
  cats: undefined
};

export class Store {
  private subject = new BehaviorSubject<State>(initialState);
  private store = this.subject.asObservable();
  get value(): State {
    return this.subject.value;
  }
  select(nom: string): Observable<any> {
    return this.store.pipe(pluck(nom));
  }
  set(nom: string , state: any): void{
    this.subject.next({...this.value , [nom]: state});
  }
}
