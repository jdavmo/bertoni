import { Component, AfterViewInit } from '@angular/core';
import { TdLoadingService, LoadingType, LoadingMode, TdDialogService } from '@covalent/core';

@Component({
    selector: 'app-pets',
    templateUrl: './pets.component.html',
    styleUrls: ['./pets.component.css']
})
export class PetsComponent implements AfterViewInit {

    entities: any;//ITypes;
    entitiesData: any;//ITypesData[];
    entitiesPag: any;

    constructor(private _dialogService: TdDialogService,
                // private _typesService: TypesService,
                // private _octoService: OctoService,
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
        this.entitiesPag = {page: 1};
        // this.loadEntities('search');
    }
    /**
     * Get a color by first letter of the name
     */
    getColor (name: string) {
        // return "bgc-"+this._octoService.getColorClassByFirstLetter(name)+"-400";
    }
    /**
     * Search
     */
    search(searchText: string = ''): void {
        this.entitiesPag = {page: 1, search: searchText};
        this.loadEntities('search');
    }
    /**
     * Load more, this replace the infinite-scroll
     */
    loadMore(): void {
        this.entitiesPag.page++;
        this.loadEntities('');
    }
    /**
     * Get the params to send in the request
     */
    getParams() {
        // Declaring parmas
        let params = {page: this.entitiesPag.page};
        // If the search is not empty put the query string
        if (this.entitiesPag.search) {
            params['search'] = this.entitiesPag.search;
        }
        //return the params
        return params;
    }
    /**
     * Retrieve the entities
     */
    loadEntities(type: string = ''): void {
        // Show the loading
        this._loadingService.register('loading');
        // Get the entities
        /*this._typesService.query(this.getParams()).subscribe((entities: ITypes) => {
            // All the response
            this.entities = entities;
            // Search or concat the next page with the results
            if (type == 'search') {
                this.entitiesData = entities['data'];
            } else {
                this.entitiesData = this.entitiesData.concat(entities['data']);
            }
            this._loadingService.resolve('loading');
        },
        err => this.logError(err, ""));*/
    }
    /**
     * Handle the erros
     */
    logError(err: any, msg: string) {
        // this._octoService.error(err, msg);
    }
    /**
     * Update only the status from the list
     */
    updateStatus( item: any ): void {
        // Show the loading
        this._loadingService.register('loading');
        // Update Just the status
        item['justStatus'] = true;
        /*this._typesService.update(item.uuid, item).subscribe(() => {
            // Hide the loading
            this._loadingService.resolve('loading');
        },
        err => this.logError(err, ""));*/
    }
    /**
     * Emit the entity selected
     */
    select ( item: any): void {
        // EmitterService.get("type").emit(item);
    }
    /**
     * TODO: HANDLE SOMETHING WITH THIS
     */
    openConfirm(id: string): void {
        this._dialogService.openConfirm({
            message: 'Are you sure you want to delete this feature? It\'s being used!',
            title: 'Confirm',
            cancelButton: 'No, Cancel',
            acceptButton: 'Yes, Delete',
        }).afterClosed().subscribe((accept: boolean) => {
            if (accept) {
                // this.deleteEntity(id);
            } else {
                // DO SOMETHING ELSE
            }
        });
    }

}
