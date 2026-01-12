import { Routes } from '@angular/router';
import { Ejemplo0 } from './components/ejemplo00/ejemplo0';
import { Ejemplo1 } from './components/ejemplo01/ejemplo1';
import { Ejemplo2 } from './components/ejemplo02/ejemplo2';
import { Ejemplo3 } from './components/ejemplo03/ejemplo3';
import { Ejemplo3b } from './components/ejemplo3b/ejemplo3b';
import { Ejemplo4b } from './components/ejemplo4b/ejemplo4b';
import { Ejemplo4 } from './components/ejemplo04/ejemplo4';
import { Ejemplo5 } from './components/ejemplo05/ejemplo5';
import { Ejemplo6 } from './components/ejemplo06/ejemplo6';
import { Ejemplo7 } from './components/ejemplo07/ejemplo7';

export const routes: Routes = [
  { path: 'ejemplo0', component: Ejemplo0 },
  { path: 'ejemplo1', component: Ejemplo1 },
  { path: 'ejemplo2', component: Ejemplo2 },
  { path: 'ejemplo3', component: Ejemplo3 },
  { path: 'ejemplo3b', component: Ejemplo3b },
  { path: 'ejemplo4', component: Ejemplo4 },
  { path: 'ejemplo4b', component: Ejemplo4b },
  { path: 'ejemplo5', component: Ejemplo5 },
  { path: 'ejemplo6', component: Ejemplo6 },
  { path: 'ejemplo7', component: Ejemplo7 },
];
