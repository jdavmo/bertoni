import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {

    constructor( ) {}

    colors: any[] = [{a: 'red'},{b: 'pink'},{c: 'purple'},{d: 'deep-purple'},
                      {e: 'indigo'},{f: 'blue'},{g: 'light-blue'},{h: 'cyan'},
                      {i: 'teal'},{j: 'green'},{k: 'light-green'},{l: 'lime'},
                      {m: 'yellow'},{o: 'amber'},{p: 'orange'},{q: 'deep-orange'},
                      {r: 'brown'},{s: 'grey'},{t: 'deep-purple'},{u: 'blue-grey'},
                      {v: 'teal'},{w: 'lime'},{x: 'pink'},{y: 'cyan'},{z: 'amber'}];

    /**
     * Get class color by first letter
     */
    getColorClassByFirstLetter(name: string) {
        name = name.toLowerCase();
        let colorSelected = "";
        for (var i = 0; i < this.colors.length; i += 1) {
            if(this.colors[i].hasOwnProperty(name.charAt(0))) {
                colorSelected = this.colors[i][name.charAt(0)];
            }
        }
        if( !colorSelected ) {
            colorSelected = "amber";
        }
        return colorSelected;
    }
    
}
