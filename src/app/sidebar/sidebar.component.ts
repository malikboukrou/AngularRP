import { Component, OnInit } from '@angular/core';
import {RestProvider} from '../../providers/rest/rest';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: [ './sidebar.component.css' ]
})
export class SidebarComponent implements OnInit {
    clients: any = [];


    constructor(private route: ActivatedRoute, private restProvider: RestProvider, private location: Location,
                private router: Router) {
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

    goToAddClient() {
        this.router.navigate(['/client']);
    }

    genererJson() {
        this.restProvider.genererJSON()
            .then(data => {
                console.log(data);
            })
            .catch(e => {
                console.log('generer jSON error ', e);
            });
    }
}
