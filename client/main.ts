/// <reference path="../typings/index.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Type, enableProdMode } from "@angular/core";


//enableProdMode();

import { AppComponent } from "./components/app.component";
import { disableDeprecatedForms, provideForms } from '@angular/forms';



bootstrap(<Type>AppComponent, [
  disableDeprecatedForms(),
  provideForms()
 ])
 .catch((err: any) => console.error(err));