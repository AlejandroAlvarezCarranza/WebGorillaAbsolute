import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    .todo{z-index: 10;position: relative;background-color: white;border-top:thick solid black ;}
    `]
})

export class ComponentsComponent implements OnInit {

    ngOnInit() {
    }

}
