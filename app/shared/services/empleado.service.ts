import { Injectable } from '@angular/core';

import { Empleado } from '../entities/empleado.entity';
const localforage: LocalForage = require('localforage');

@Injectable()
class EmpleadoService {
    constructor() {
        this.configurarStorage();
    }

    //Configura el localForage de trabajo
    private configurarStorage(): void {
        let config: LocalForageOptions = {
            name: 'EmpleadosForage',
            storeName: 'Empleados',
            description: 'Almacen de datos local para empleados'
        };
        if (localforage.config(config)) {
            console.log('Se utilizan valores de configuración');
        } else {
            console.warn('No se realizó inicialización. Se ocupan valores por defecto');
        }
    }

    

    agregar(data: Empleado): Promise<Empleado> {
        return localforage.setItem(data.id, data);
    }

    modificar(data: Empleado): Promise<Empleado> {
        return localforage.getItem<Empleado>(data.id)
            .then(result => {
                result.nombre = data.nombre;
                result.apellido = data.apellido;
                result.edad = data.edad;
                return localforage.setItem(result.id, result);
            })
            .catch(error => { return Promise.reject(error) });
    }

    eliminar(data: Empleado): Promise<void> {
        return localforage.removeItem(data.id);
    }
}

export { EmpleadoService };