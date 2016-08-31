import { Component, OnInit } from '@angular/core';

import { Empleado } from '../shared/entities/empleado.entity';
import { EmpleadoService } from '../shared/services/empleado.service';

@Component({
    selector: 'empleado-list',
    templateUrl: 'app/empleado-list/empleado-list.component.html',
    styleUrls: ['app/empleado-list/empleado-list.component.css']
})
class EmpleadoListComponent implements OnInit {
    empleados: Empleado[];
    empleadoSeleccionado: Empleado;
    isAgregar: boolean;

    constructor(private empleadoService: EmpleadoService) {
        this.empleados = [];
        this.empleadoSeleccionado = null;
        this.isAgregar = false; 
    }

    private getEmpleados(): void {
        this.empleadoService.consultar()
            .then(resultado => this.empleados = resultado)
            .catch(error => console.error('Error al recuperar los datos de empleados del localStorage (localForage)'));
    }

    ngOnInit(): void {
        this.getEmpleados();
    }

    seleccionarEmpleado(data: Empleado) {
        this.isAgregar = false;
        this.empleadoSeleccionado = data;
    }

    agregar(): void {
        this.isAgregar = true;
        this.empleadoSeleccionado = null;
    }

    cerrarEditor(data?: Empleado): void {
        this.isAgregar = false;
        this.getEmpleados();
    }
}

export { EmpleadoListComponent };