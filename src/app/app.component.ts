import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  array1 = [
    {
name:'med',
qty:1
  },  {
name:'local',
qty:2
  },
  {
name:'nj',
qty:3
  },
  ]

  increaseOrDecrease(value: string , index: number) {
    if(value === 'add') {
      this.array1[index].qty = (+this.array1[index].qty) + 1
      if(this.array1[index].qty === 0) {
      this.array1[index].qty = this.array1[index].qty + 1
      }
    } else {
      this.array1[index].qty = (+this.array1[index].qty )- 1
 if(this.array1[index].qty === 0) {
      this.array1[index].qty = this.array1[index].qty + 1
      }
    }

    console.log(this.array1)
  }
}
