import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  value: any = 'lewayne lewayne';
  title = 'client';
  ngOnInit(){
      this.value = localStorage.getItem('monChat');;
  }

  onChange(event: string) {
    this.value = event;
    //this.propagateChange(event); // <- you export the value so the binded variable is updated
    localStorage.setItem('monChat', this.value);
    //localStorage.setItem('monChat1', "-----------------this.value------------");
 }
}
