import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '@app/models/User';

@Component({
  selector: 'ex3-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss'],
})
export class UserSingleComponent implements OnInit {
  @Input() index!: number;
  @Output() deleted = new EventEmitter<number>();
  @Input() singUser!: User;

  constructor() {}

  ngOnInit(): void {}
  clicked() {
    this.deleted.emit(this.index);
    console.log();
  }
}
