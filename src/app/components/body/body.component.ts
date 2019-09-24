import { Component } from '@angular/core';

@Component({
    selector:'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent{
    titulo:string = "Hola mundo ¿como estás? body";
    toogle:boolean = true;

    frase:any = {
        mensaje: 'Un poder conlleva una gran responsabilidad',
        autor: 'El tio de Peter Parker'
    }

    personajes: string[] = ['Spiderman', 'Veneom', ' Dr Octopus '];
    
}