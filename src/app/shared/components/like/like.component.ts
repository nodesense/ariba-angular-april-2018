import { Component, OnInit,
  Input,
  Output, 
  EventEmitter

} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  // Two way binding [()]

  @Input()
  likes: number;

  // for 2 way binding, output name = input name + "Change"
  @Output()
  likesChange: EventEmitter<number> = new EventEmitter()


  constructor() { }

  ngOnInit() {
  }

  up() {
    this.likesChange.emit( this.likes + 1);
  }

  down() {
    this.likesChange.emit(this.likes - 1);
  }

}
