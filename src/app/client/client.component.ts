import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { Location } from '@angular/common';
import {RestProvider} from '../../providers/rest/rest';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit, OnDestroy {
    @Input() client: any;
    navigationSubscription;
    activites: any = [];
    villes: any = [];

    constructor(private route: ActivatedRoute, private restProvider: RestProvider, private location: Location,
                private router: Router) {
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof NavigationEnd) {
                this.getClient();
            }
        });
        this.villes = [{}];
        this.activites = [{}];
    }

    ngOnInit() {
        this.getClient();
        this.getVilles();
        this.getActivites();
    }

    getClient() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.restProvider.getClient(id)
            .then(data => {
                this.client = data;
                console.log(data);
            })
            .catch(e => {
                console.log('getClients error ', e);
            });
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

    deleteVille(id) {
        this.restProvider.deleteVille(id)
            .then(data => {
                console.log(data);
            })
            .catch(e => {
                console.log('deleteVille error ', e);
            });
    }

    deleteActivite(id) {
        this.restProvider.deleteActivite(id)
            .then(data => {
                console.log(data);
            })
            .catch(e => {
                console.log('deleteActivite error ', e);
            });
    }

    goBack() {
        this.location.back();
    }

    save() {
        this.restProvider.updateClient(this.client)
            .then(data => {
                console.log(data);
                this.goBack();
            })
            .catch(e => {
                console.log('getClients error ', e);
            });
    }

    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}
