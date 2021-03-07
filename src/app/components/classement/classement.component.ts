import {Component, OnInit} from '@angular/core';
import {Store} from '../../store/Store';
import {CatsService} from '../../services/cats.service';
import {Observable} from 'rxjs';
import {Cat} from '../../model/cat';

@Component({
  selector: 'app-cats',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {
  cats$: Observable<Cat[]>;
  constructor(private store: Store,
              private catsService: CatsService) {
  }
  ngOnInit(): void {
    this.catsService.getAllCats$.subscribe();
    this.cats$ = this.store.select('cats');
  }
}
