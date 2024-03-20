import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule,NgClass,TitleCasePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup
  error: string = '';
  loading: boolean = false;
  private _apiService = inject(ApiService);

  constructor(private formBuilder: FormBuilder, private router: Router){
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
    this.loading = true
    this._apiService.login(user).subscribe({
      next: res=>{
        this.loading = false
      },
      error: err=>{
        this.loading = false
        if(err.status === 400)
          this.error = "Something went wrong, please try again."
        else{
          localStorage.removeItem('loggedIn')
          this.error = err.error
        }
      },
      complete: ()=>{
        this.router.navigateByUrl('/user')
        this.loginForm.reset()
      }
    })
  }
  
}