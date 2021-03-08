import {Component, OnInit} from '@angular/core';
import {Cat} from '../../model/cat';
import {Store} from '../../store/Store';
import {CatsService} from '../../services/cats.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css']
})
export class ShowroomComponent implements OnInit {
  cats: Cat[];
  selected: Cat[];
  counter = 0;
  nbrLikes = 0;

  constructor(private store: Store,
              private catsService: CatsService) {
  }

  ngOnInit(): void {
    this.catsService.getAllCats$.subscribe();
    this.store.select('cats').subscribe(data => {
      if (data) {
        this.cats = data;
        this.selected = data.filter((el, index) => index === this.counter || index === this.counter + 1 );
        this.nbrLikes = this.cats.map(cat => cat.likes).reduce((acc, curr): number => {
          return acc = acc + curr;
        }, 0);
      }
    });
  }

  nextCouple(cat: Cat): void {
    this.nbrLikes++;
    ++cat.likes;
    this.catsService.update(cat).subscribe();
    this.counter = this.counter + 2;
    this.selected = this.cats.filter((el, index) => index === this.counter || index === this.counter + 1 );
  }
}
