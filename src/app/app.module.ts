import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { RestProvider } from '../providers/rest/rest';

import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        FooterModule,
        SidebarModule,
        RouterModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        SearchComponent,
        ClientComponent
    ],
    bootstrap: [AppComponent],
    providers: [RestProvider]
})
export class AppModule { }
