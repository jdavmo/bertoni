import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BertoniConfigService {

    constructor() { }

    public getConfig() {
        return environment;
    }
    
    public getApi(): string {
        return environment.config.api;
    }
    
    public getApiKey(): string {
        return environment.config.api_key;
    }

    public buildUrl(resource: string): string {
        return this.getApi() + '/' + resource + '?key=' + this.getApiKey();
    }
}
