import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { EmpleadoDetalleComponent } from './empleado-detalle/empleado-detalle.component';
import { EmpleadoService } from './shared/services/empleado.service';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmpleadoListComponent, EmpleadoDetalleComponent],
    providers: [EmpleadoService],
    bootstrap: [AppComponent]
})
class AppModule { }

export { AppModule };
