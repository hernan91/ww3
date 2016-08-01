import { Injectable } from '@angular/core';

@Injectable()
export class InfoStateService {
    state: Array<string> = [ "new", "modify", "show" ];
    getState(state: string):number {
        return state.indexOf(state);
    }
}