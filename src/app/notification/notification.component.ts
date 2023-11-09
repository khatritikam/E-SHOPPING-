import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
 template: `<div class=" bg-danger" [ngClass]="{fadOut:displayNotification}">
               This website uses cookies to provide better user experience
              <button class="btn bg-danger close" (click)="closenotification()">x</button>
            </div>`,
  styles: ["div{margin: 10px 0px; padding: 10px 20px;text-align:center;}", 
           "p{font-size: 14px; color: white}", ".close{float:right; padding: 0px}",
           ".fadOut{visibility:hidden; opacity:0; transition:visibility 0s 2s, opacity 2s linear;}" ]
})
export class NotificationComponent {
 displayNotification: boolean = false

 closenotification(){
  this.displayNotification = true;
 }
}
