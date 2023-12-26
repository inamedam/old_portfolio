import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  openPDF(){
    window.open('../../assets/cv_inaoui.pdf', '_blank');
  }
}
