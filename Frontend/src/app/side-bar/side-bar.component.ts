import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  
  menuAbierto = false;
  mostrarInicio = true;


   constructor(private router: Router, private el: ElementRef) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrarInicio = this.router.url === '/home';
      }
    });
  
  }

  

  ngOnInit(): void {
  }



  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.2 // Aparece cuando el 20% del elemento es visible
    });

    const hiddenElements = this.el.nativeElement.querySelectorAll('.fade-in');
    hiddenElements.forEach((el: any) => observer.observe(el));
  }

  onActivate() {
    this.mostrarInicio = false;
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  goToHome() {
    window.location.href = '/home';
  }
}



