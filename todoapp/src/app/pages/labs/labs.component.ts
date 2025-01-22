
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola';
  tasks = [
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componente'
  ];

  tasks2 = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componente'
  ]);

  name = 'David';
  name2 = signal('David');
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'David',
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  };

  person2 = signal({
    name: 'David',
    avatar: 'https://w3schools.com/howto/img_avatar.png',
    codigo: 123
  });

  colorCtrl = new FormControl();

  widthCtrl = new FormControl(50, {
    nonNullable: true
  });

  nameCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  });

  constructor() {
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value);
    })
  }


  clickHandler() {
    alert('Hola')
  }

  changeHandler(event: Event) {
    console.log(event);
  }

  changeHandler2(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name2.set(newValue);
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  changeCode(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person2.update(prevState => {
      return {
        ...prevState,
        codigo: parseInt(newValue, 10)
      }
    })
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person2.update(prevState => {
      return {
        ...prevState,
        name: newValue
      }
    })
  }
}
