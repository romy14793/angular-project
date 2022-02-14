import { Component, OnInit } from '@angular/core';
import { User, Gender, Role } from 'src/app/models/User';

@Component({
  selector: 'ex3-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  properties: any = [];
  user: User = {
    id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 25,
    dateOfBirth: '1995-14-12',
    address: {
      city: 'Roma',
      street: 'Via roma 10',
      postalCode: '00100',
    },
    role: 'staff', // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    companies: [
      {
        id: 148979,
        name: 'Develhope',
        description: 'La migliore',
        location: {
          city: 'Palermo',
          street: 'Via Libertà 58',
          postalCode: '90139',
        },
      },
      {
        id: 123123,
        name: 'Apple',
        description: 'E insomma...',
        location: {
          city: 'Cupertino',
          street: 'One Apple Park Way',
          postalCode: '95014',
        },
      },
    ],
    gender: 'male', // Generi possibili: 'male', 'female', 'other'
  };

  constructor() {}

  ngOnInit(): void {
    const values = Object.entries(this.user);
    const notObject = values.filter(
      (value) =>
        typeof value[1] != 'object' &&
        value[0] != 'dateOfBirth' &&
        value[0] !== 'profilePhotoUrl'
    );
    const addresses = Object.entries(this.user.address);
    for (let add of addresses) {
      notObject.splice(4, 0, add);
    }
    for (let prop of notObject) {
      this.properties.push(prop);
    }
  }
}
