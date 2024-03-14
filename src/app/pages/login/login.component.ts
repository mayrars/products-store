import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule,NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup
  private _apiService = inject(ApiService);

  constructor(private formBuilder: FormBuilder){
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  ngOnInit(): void {
      
  }
  hasErrors(controlName: string,errorType: string){
    return this.loginForm.get(controlName)?.hasError(errorType) && this.loginForm.get(controlName)?.touched
  }
  login(event: Event){
    event.preventDefault()
    const user = {
      "username": this.loginForm.get('username')?.value, 
      "password": this.loginForm.get('password')?.value
    }
    this._apiService.login(user).subscribe(res=>{
      console.log(res)
    },error=>{
      console.error('Error al iniciar sesión:', error);
    })
  }
  
}
