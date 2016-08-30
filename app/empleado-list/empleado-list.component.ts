import { Component } from '@angular/core';

import { Empleado } from '../shared/entities/empleado.entity';
import { EMPLEADOS_ARRAY } from '../shared/mocks/empleados.mock';

@Component({
    selector: 'empleado-list',
    templateUrl: 'app/empleado-list/empleado-list.component.html',
    styleUrls: ['app/empleado-list/empleado-list.component.css']
})
class EmpleadoListComponent {
    empleados: Empleado[];
    empleadoSeleccionado: Empleado;
    empleadosSeleccionados: Empleado[];

    constructor() {
        this.empleados = EMPLEADOS_ARRAY;
        this.empleadoSeleccionado = null; 
        this.empleadosSeleccionados = [];
    }

    seleccionarEmpleado(data: Empleado, evento: MouseEvent) {
        this.empleadoSeleccionado = data;
        if (!evento.ctrlKey) this.empleadosSeleccionados = [];
        this.empleadosSeleccionados.push(this.empleadoSeleccionado);
        console.log(this.empleadoSeleccionado);
        console.log(this.empleadosSeleccionados);
    }
}

export { EmpleadoListComponent };