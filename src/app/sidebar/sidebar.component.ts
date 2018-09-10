import { Component, OnInit } from '@angular/core';
import {RestProvider} from '../../providers/rest/rest';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: [ './sidebar.component.css' ]
})
export class SidebarComponent implements OnInit {
    clients: any = [];

    constructor(public restProvider: RestProvider) {
        this.clients = [{}];
    }

    ngOnInit() {
        this.getClients();
    }

    isMobileMenu() {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    }

    getClients() {
        this.restProvider.getAllClient()
            .then(data => {
                this.clients = data;
            })
            .catch(e => {
                console.log('getClients error ', e);
            });
    }
}
