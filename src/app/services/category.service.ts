import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { BertoniConfigService } from './bertoni-config.service';
import { CategorySnapshot, CategoryDescriptor } from '../types';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    static resource: string = "category.json";

    constructor(private _http: HttpClient, private _BertoniConfigService: BertoniConfigService) { }

    /**
     *  Retrieves all
     */
    public getAll(): Observable<CategorySnapshot> {
        return new Observable(observable => {
            this._http.get(this._BertoniConfigService.buildUrl(CategoryService.resource))
            .pipe(
                catchError(e => throwError(e))
            )
            .subscribe(response => {
                observable.next(CategorySnapshot.import(response));
                observable.complete();
            });
        });
    }

    public get(id: number) {

    }

    public create(pet: CategoryDescriptor) {

    }

    public update(pet: CategoryDescriptor) {

    }

    public delete(id: number) {

    }
    
}
