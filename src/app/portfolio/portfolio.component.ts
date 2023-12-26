import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  constructor(private router: Router) {}
  goToProject1(){
    this.router.navigate(['/project1']);
  }
  goToProject2(){
    this.router.navigate(['/project2']);
  }
  goToProject3(){
    this.router.navigate(['/project3']);
  }
  goToProject4(){
    this.router.navigate(['/project4']);
  }
}
