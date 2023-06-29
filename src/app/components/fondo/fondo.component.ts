import { Component, OnInit } from '@angular/core';
declare var particlesJS:any;
declare var $:any;
@Component({
  selector: 'app-fondo',
  templateUrl: './fondo.component.html',
  styleUrls: ['./fondo.component.scss']

})
export class FondoComponent implements OnInit {
    public ngOnInit() :void {

      $(document).ready(function(){
        var ancho = $(window).width();
        if(ancho > 600) {
          particlesJS.load('particles-js','./assets/particles.json');
        }
      });

      const altura = document.body.scrollHeight - window.innerHeight;
      const fondo = document.getElementById('fondo');
      const anchoImg = document.getElementById('anchoimg');

      window.onscroll = () => {
          const anchoFondo = (window.pageYOffset / altura)*900;
          if(anchoFondo <= 100){
              fondo.style.width = anchoFondo + '%';
          }  
      }
      
    }
}