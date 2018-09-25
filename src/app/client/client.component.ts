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
    clientactivites: any = [];
    clientvilles: any = [];
    allVilles: any = [];
    allActivites: any = [];
    id_client = +this.route.snapshot.paramMap.get('id');

    villeAAjouter: string;
    activiteAAjouter: string;

    constructor(private route: ActivatedRoute, private restProvider: RestProvider, private location: Location,
                private router: Router) {
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof NavigationEnd) {
                this.getClient();
            }
        });
    }

    ngOnInit() {
        this.getClient();
        this.getAllActivites();
        this.getAllVilles();
        this.getClientVilles(this.id_client);
        this.getClientActivites(this.id_client);
    }

    getClient() {
        this.restProvider.getClient(this.id_client)
            .then(data => {
                this.client = data;
            })
            .catch(e => {
                console.log('getClients error ', e);
            });
    }

    getAllVilles() {
        this.restProvider.getAllVille()
            .then(data => {
                this.allVilles = data;
            })
            .catch(e => {
                console.log('getAllVilles error ', e);
            });
    }

    getAllActivites() {
        this.restProvider.getAllActivite()
            .then(data => {
                this.allActivites = data;
            })
            .catch(e => {
                console.log('getAllActivites error ', e);
            });
    }

    getClientVilles(id) {
        this.restProvider.getClientVille(id)
            .then(data => {
                this.clientvilles = data;
            })
            .catch(e => {
                console.log('getVilles error ', e);
            });
    }

    getClientActivites(id) {
        this.restProvider.getClientActivite(id)
            .then(data => {
                this.clientactivites = data;
            })
            .catch(e => {
                console.log('getActivites error ', e);
            });
    }

    deleteClientVille(id_ville) {
        this.restProvider.deleteClientVille(this.id_client, id_ville)
            .then(data => {
                console.log(data);
                location.reload();
            })
            .catch(e => {
                console.log('deleteVille error ', e);
            });
    }

    deleteClientActivite(id_act) {
        this.restProvider.deleteClientActivite(this.id_client, id_act)
            .then(data => {
                console.log(data);
                location.reload();
            })
            .catch(e => {
                console.log('deleteActivite error ', e);
            });
    }

    addClientVille() {
        this.restProvider.searchVille(this.villeAAjouter)
            .then(data => {
                // la ville existe deja
                try {
                    const v_id = data[0].id;
                    this.restProvider.createClientVille({id_client: this.id_client, id_ville: v_id})
                        .then(datas => {
                            location.reload();
                        })
                        .catch(e => {
                            console.log(e);
                        });
                // la ville n'existe pas encore en base
                } catch (error) {
                    this.restProvider.createVille({nom_ville: this.villeAAjouter, cp: 0})
                        .then(datass => {
                            this.addClientVille();
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }
            })
            .catch(e => {
                console.log('add ville to client error', e);
            });
    }

    addClientActivite() {
        this.restProvider.searchActivite(this.activiteAAjouter)
            .then(data => {
                // l'activite existe deja
                try {
                    const a_id = data[0].id;
                    this.restProvider.createClientActivite({id_client: this.id_client, id_activite: a_id})
                        .then(datas => {
                            location.reload();
                        })
                        .catch(e => {
                            console.log(e);
                        });
                    // l'activite n'existe pas encore en base
                } catch (error) {
                    this.restProvider.createActivite({activite: this.activiteAAjouter})
                        .then(datass => {
                            this.addClientActivite();
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }
            })
            .catch(e => {
                console.log('add ville to client error', e);
            });
    }

    deleteClient() {
        this.restProvider.deleteClient(this.id_client)
            .then(data => {
                console.log(data);
                this.router.navigate(['/']);
            })
            .catch(e => {
                console.log('delete client error', e);
            });
    }

    save() {
        console.log('client:', this.client);
        this.restProvider.updateClient(this.client)
            .then(data => {
                console.log(data);
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
