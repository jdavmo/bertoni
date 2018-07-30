import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatIconModule,
    MatListModule, MatMenuModule, MatTooltipModule,
    MatSlideToggleModule, MatInputModule, MatCheckboxModule,
    MatToolbarModule, MatSnackBarModule, MatSidenavModule,
    MatTabsModule, MatSelectModule, MatChipsModule, MatRadioModule
} from '@angular/material';
import {
    CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
    CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
    CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
    CovalentCommonModule, CovalentDialogsModule, CovalentMessageModule,
    CovalentChipsModule, CovalentFileModule,
} from '@covalent/core';

import { AppComponent } from './app.component';
import { BERTONI_ROUTES, BERTONI_COMPONENTS } from './app.routes';
import { BertoniConfigService, CategoryService, PetService, UtilitiesService  } from './services';

const MATERIAL_MODULES: any[] = [
    MatButtonModule, MatCardModule, MatIconModule,
    MatListModule, MatMenuModule, MatTooltipModule,
    MatSlideToggleModule, MatInputModule, MatCheckboxModule,
    MatToolbarModule, MatSnackBarModule, MatSidenavModule,
    MatTabsModule, MatSelectModule, MatChipsModule, MatRadioModule,
];

const COVALENT_MODULES: any[] = [
    CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
    CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
    CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
    CovalentCommonModule, CovalentDialogsModule, CovalentMessageModule,
    CovalentChipsModule, CovalentFileModule,
];

const ANGULAR_MODULES: any[] = [
    FormsModule, ReactiveFormsModule, HttpModule, HttpClientModule,
];

@NgModule({
    declarations: [
        AppComponent,
        BERTONI_COMPONENTS
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ANGULAR_MODULES,
        MATERIAL_MODULES,
        COVALENT_MODULES,
        RouterModule.forRoot(BERTONI_ROUTES, { useHash: true })
    ],
    providers: [BertoniConfigService, CategoryService, PetService, UtilitiesService],
    bootstrap: [AppComponent]
})
export class AppModule { }
