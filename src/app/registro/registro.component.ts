import { Component } from '@angular/core';
export class User {
  public name!: string;
  public celular!: string;
  public email!: string;
  public password!: string;
  
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  model = new User();
 
  constructor() {}
  onSubmit(form: any) {
    console.log(form.value);
  }
}
