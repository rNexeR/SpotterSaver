import {Injectable, EventEmitter} from "@angular/core";
import {Component} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ClientsService{
    getClients(){
        return System.import('../../assets/data/clients.json');
    }
}