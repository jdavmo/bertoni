import { Component, AfterViewInit } from '@angular/core';
import { TdLoadingService, LoadingType, LoadingMode } from '@covalent/core';
import { PetService, UtilitiesService } from '../../services';
import { PetSnapshot, PetDescriptor } from '../../types';

@Component({
    selector: 'app-pets',
    templateUrl: './pets.component.html',
    styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements AfterViewInit {

    public entities: PetSnapshot;

    constructor(private _PetService: PetService,
                private _UtilitiesService: UtilitiesService,
                private _loadingService: TdLoadingService
            ) {
        // Create the loading circular
        this._loadingService.create({
            name: 'loading',
            type: LoadingType.Circular,
            mode: LoadingMode.Indeterminate,
            color: 'accent',
        });
    }
    /**
     * Do this when the page is ready
     */
    ngAfterViewInit(): void {
        this.loadEntities();
    }
    /**
     * Get a color by first letter of the name
     */
    getColor (name: string) {
        return "bgc-"+this._UtilitiesService.getColorClassByFirstLetter(name)+"-400";
    }
    /**
     * Search
     */
    search(searchText: string = ''): void {
       console.log(searchText);
    }
    /**
     * Retrieve the entities
     */
    loadEntities(): void {
        // Show the loading
        this._loadingService.register('loading');
        // Get the entities
        this._PetService.getAll().subscribe((entities: PetSnapshot) => {
            // All the response
            this.entities = entities.pets;
            this._loadingService.resolve('loading');
        },
        err => this.logError(err, ""));
    }
    /**
     * Handle the erros
     */
    logError(err: any, msg: string) {
        
    }

}
