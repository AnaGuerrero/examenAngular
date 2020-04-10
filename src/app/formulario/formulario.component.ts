import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  registerForm;
  latitude:number;
  longitude:number;
  zoom:number;

  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      name: ['', Validators.required],
      biography: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.setCurrentLocation()
  }

  onSubmit(userData){
    if(!this.registerForm.invalid){
      this.router.navigate(['/reproductor', userData])
    }
    
  }

  private  setCurrentLocation(){
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.latitude=position.coords.latitude;
        this.longitude=position.coords.longitude;
        this.zoom=15;
      })
    }
  }

}
