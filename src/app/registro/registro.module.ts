import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select'; 
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    BrowserModule,
    MatIconModule
    
   ],
 exports: [
    RegistroComponent
  ]
})
export class RegistroModule {

 }
