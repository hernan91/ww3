import { Injectable } from '@angular/core';
import { Contact } from "../classes/Contact"
import { Person } from "../classes/Person"
import { Organization } from "../classes/Organization"

@Injectable()
export class TyperService {
    typeOfContact(obj:Contact):String{
        if(obj instanceof Person){
            return "Person";
        } else
        if(obj instanceof Organization){
            return "Organization";
        }
    }
}