import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})

export class AuthComponent {

  constructor ( private router:Router) {}


  login(){
    this.router.navigateByUrl('/dashboard/usuario/usuarioCreate');
  }

 registrar(){
  const modelDiv = document.getElementById('myModal');
  if(modelDiv!= null){
    modelDiv.style.display = 'block';
  }
 }

 closeModal(){
  const modelDiv = document.getElementById('myModal');
  if(modelDiv!= null){
    modelDiv.style.display = 'none';
  }
 }
 

 
}


