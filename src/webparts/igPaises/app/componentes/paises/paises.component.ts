import { Component, OnInit, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import { PaisesServices } from '../../servicios/paises.services';

@Component({
    selector: 'app-paises',
    template: require("./paises.component.html") as string,
    providers: [PaisesServices]
})
export class PaisesComponent implements OnInit {    

    public paises: any;      

    constructor(private _peticionPaises: PaisesServices) { 
        
    }

    public ngOnInit() {          
        this.cargarPaises();
    } 

    public cargarPaises(){
        this._peticionPaises.obtenerPaises().
        map((response) => response.json()).
        subscribe((data) => {
                this.paises = data;
            },
            error => {
                console.log(<any> error);
            }
        );
    }

    public abrirModal(nombre, idioma, moneda){
        console.log(nombre + idioma + moneda);
        alert("El pais es: " + nombre + " | el idioma del país es: " + idioma + " | la moneda del país es: " + moneda);
    }

}
