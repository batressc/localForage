import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { EmpleadoDetalleComponent } from './empleado-detalle/empleado-detalle.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, EmpleadoListComponent, EmpleadoDetalleComponent],
    bootstrap: [AppComponent]
})
class AppModule { }

export { AppModule };
