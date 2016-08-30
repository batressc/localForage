import { Component, Input } from '@angular/core';

import { Empleado } from '../shared/entities/empleado.entity';

@Component({
    selector: 'empleado-detalle',
    templateUrl: 'app/empleado-detalle/empleado-detalle.component.html',
    styleUrls: ['app/empleado-detalle/empleado-detalle.component.css']
})
class EmpleadoDetalleComponent {
    @Input()
    empleado: Empleado;
}

export { EmpleadoDetalleComponent };