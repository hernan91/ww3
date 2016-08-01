import {Component} from '@angular/core';
import{AfterViewInit, ViewChild, ElementRef} from "@angular/core";
declare var $:any;

@Component({
    selector: 'dropdown-menu',
    templateUrl: 'client/components/agenda/dropdown-menu/dropdown-menu.component.html'
})
export class DropdownMenuComponent  {
    @ViewChild('menu') menu:ElementRef;
    
    ngAfterViewInit() {
        $(this.menu.nativeElement).dropdown();
    }
}