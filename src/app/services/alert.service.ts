import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlertService {

  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    // limpia la alerta cuando se cambia la ruta(route)
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // solo mantien por un único cambio de ubicación
          this.keepAfterNavigationChange = false;
        } else {
          // limpia la alerta
          this.subject.next();
        }
      }
    });
  }

  success(keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: ' Usuario registrado con exito' });
  }

  error(keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: ' Usuario o Contrasena Incorrecta' });
  }

  getMensaje(): Observable<any> {
    return this.subject.asObservable();
  }

}
