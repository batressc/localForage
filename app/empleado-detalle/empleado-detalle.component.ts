import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { Empleado } from '../shared/entities/empleado.entity';
import { EmpleadoService } from '../shared/services/empleado.service';

@Component({
    selector: 'empleado-detalle',
    templateUrl: 'app/empleado-detalle/empleado-detalle.component.html',
    styleUrls: ['app/empleado-detalle/empleado-detalle.component.css']
})
class EmpleadoDetalleComponent implements OnInit {
    @Input()
    empleado: Empleado;
    @Input()
    isAgregar: boolean;
    @Output()
    cancelar: EventEmitter<void>;
    @Output()
    save: EventEmitter<Empleado>;
    @Output()
    eliminar: EventEmitter<boolean>;

    constructor(private empleadoService: EmpleadoService) {
        this.empleado = null;
        this.isAgregar = false;
        this.cancelar = new EventEmitter<void>();
        this.save = new EventEmitter<Empleado>();
        this.eliminar = new EventEmitter<boolean>();
    }

    ngOnInit(): void {
        if (this.isAgregar) this.empleado = new Empleado('', '', '', 0);
    }

    guardar(): void {
        if (this.isAgregar) {
            this.empleadoService.agregar(this.empleado)
                .then(result => {
                    this.save.emit(result)
                })
                .catch(error => console.error(error));
        } else {
            this.empleadoService.modificar(this.empleado)
                .then(result => {
                    this.save.emit(result);
                })
                .catch(error => console.error(error));
        }
    }

    eliminarAccion(): void {
        this.empleadoService.eliminar(this.empleado)
            .then(result => {
                this.eliminar.emit(result);
            })
            .catch(error => console.error(error));
    }

    cancelarAccion(): void {
        this.empleado = null;
        this.cancelar.emit();
    }
}

export { EmpleadoDetalleComponent };