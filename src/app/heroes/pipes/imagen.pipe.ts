import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagen'
  // Esto genera que el pipe se dispare cada vez que angular hace algun cambio
  //, pure: false
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

    if (!heroe.id && !heroe.alt_img) {

      return `./assets/no-image.png`;

    }else{

      return heroe.alt_img ? heroe.alt_img : `./assets/heroes/${heroe.id}.jpg`;

    }

  }

}
