import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { BertoniConfigService } from './bertoni-config.service';
import { PetSnapshot, PetDescriptor } from '../types';

@Injectable({
    providedIn: 'root'
})
export class PetService {

    static resource: string = "pet.json";

    constructor(private _http: HttpClient, private _BertoniConfigService: BertoniConfigService) { }

    /**
     *  Retrieves all
     */
    public getAll(): Observable<PetSnapshot> {
        return new Observable(observable => {
            this._http.get(this._BertoniConfigService.buildUrl(PetService.resource))
            .pipe(
                catchError(e => throwError(e))
            )
            .subscribe(response => {
                observable.next(PetSnapshot.import(response));
                observable.complete();
            });
        });
    }

    public get(id: number) {

    }

    public create(pet: PetDescriptor) {

    }

    public update(pet: PetDescriptor) {

    }

    public delete(id: number) {

    }
    
}
