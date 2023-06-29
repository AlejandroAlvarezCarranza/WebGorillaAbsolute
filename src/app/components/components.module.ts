import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ProductosComponent } from './productos/productos.component';
import { SeparadorComponent } from './separador/separador.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NuestroTrabajoComponent } from './nuestro-trabajo/nuestro-trabajo.component';
import { DondeEncontrarnosComponent } from './donde-encontrarnos/donde-encontrarnos.component';
import { FooterComponent } from './footer/footer.component';
import { FondoComponent } from './fondo/fondo.component';
@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        RouterModule,  
    ],
    declarations: [
        ComponentsComponent,
        QuienesSomosComponent,
        ProductosComponent,
        SeparadorComponent,
        ServiciosComponent,
        NuestroTrabajoComponent,
        DondeEncontrarnosComponent,
        FooterComponent,
        FondoComponent,
        CarouselComponent
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
