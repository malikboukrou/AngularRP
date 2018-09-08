import { Component, OnInit } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
    clients: any = [];
    activites: any = [];
    villes: any = [];

    constructor(public restProvider: RestProvider) {
        this.villes = [{}];
        this.activites = [{}];
        this.clients = [{}];
    }

    ngOnInit() {
        this.getVilles();
        this.getActivites();
        this.getClients();
    }

    getVilles() {
        this.restProvider.getAllVille()
            .then(data => {
                this.villes = data;
                console.log(data);
            })
            .catch(e => {
                console.log('getVilles error ', e);
            });
    }

    getActivites() {
        this.restProvider.getAllActivite()
            .then(data => {
                this.activites = data;
                console.log(data);
            })
            .catch(e => {
                console.log('getActivites error ', e);
            });
    }

    getClients() {
        this.restProvider.getAllClient()
            .then(data => {
                this.clients = data;
                console.log(data);
            })
            .catch(e => {
                console.log('getClients error ', e);
            });
    }
}
