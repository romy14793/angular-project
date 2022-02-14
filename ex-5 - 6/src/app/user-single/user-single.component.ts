import { Component, OnInit, Input } from '@angular/core';
import { User } from '@app/models/User';

@Component({
  selector: 'ex3-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss'],
})
export class UserSingleComponent implements OnInit {
  @Input() singUser!: User;
  constructor() {}

  ngOnInit(): void {}
}
