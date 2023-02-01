import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss'],
})
export class RxjsOperatorsComponent {
  destroy$ = new Subject();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy() {
    // when the component get's destroyed, pass something to the
    // destroy$ Subject  .pipe(takeUntil(this.destroy$))
    this.destroy$.next(true);
  }
}

/**
 * mármol ASCII
 
 ---a--b--c--d---e---...
---a--b--c--d---e|
 ---a--b--c--d---e#
 ---a--b-^-c--d---e

- (representa un marco de tiempo)

a-z (son los valores que están a continuación en la secuencia)

| (indica que la transmisión se ha completado)

... (indica que la corriente seguirá viva)

# (indica que ocurrió un error)

^ (indica donde empezamos a suscribirnos (solo para hot streams)
*/

/**
 * RXJS BASADO EN FUNCIONES PURAS
  -No muta nada
  -Siempre devolverá el mismo valor basado en los mismos parámetros.
  -No tiene efectos secundarios. No puede mutar el estado fuera de la función.
*/

/**
 * La tubería asíncrona PIPE hace 3 cosas por nosotros:
    -Se suscribe a la transmisión y pasa el valor a un componente.
    -Cancela la suscripción automáticamente cuando el componente se destruye (elimina mucha lógica de cancelación de suscripción)
    -Activa la detección de cambios automáticamente
*  */

/**
 * switchMap y mergeMap
 * cancelará la suscripción a la transmisión anterior, toda la lógica de RxJS está centralizada en un lugar donde ocurre la suscripción y la cancelación de la suscripción: el componente inteligente.
 */
