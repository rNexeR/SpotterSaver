import {Injectable, EventEmitter} from "@angular/core";
import {Component} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessagesService{
    getMessages(){
        return System.import('../../assets/data/messages.json');
    }

    getMessagesFor(user){
        return System.import('../../assets/data/messages.json');
    }
}