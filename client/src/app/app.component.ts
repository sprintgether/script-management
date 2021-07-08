import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  value: any = 'lewayne lewayne';
  title = 'client';
  ngOnInit(){
      this.value = localStorage.getItem('currentValueEditor');;
  }

  onChange(event: string) {
    this.value = event;
    //this.propagateChange(event); // <- you export the value so the binded variable is updated
    
    //localStorage.setItem('monChat1', "-----------------this.value------------");
 }

 saved(){
   if(this.value){
    localStorage.setItem('currentValueEditor', this.value);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
   }
 }
}
