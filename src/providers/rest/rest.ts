import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
    apiUrl = 'http://localhost:8888/api';

    constructor(public http: HttpClient) {
        console.log('Hello RestProvider Provider');
    }


    /* --------------------- CLIENT ---------------------- */

    getAllClient() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl + '/client/read.php').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getClient(id) {
        return new Promise(resolve => {
            this.http.get(this.apiUrl + '/client/read_one.php?id=' + id).subscribe(data => {
                resolve(data);
            }, err => {
                console.log('err:' + err.status);
            });
        });
    }

    createClient(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/client/create.php', JSON.stringify(data))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    updateClient(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/client/update.php', JSON.stringify(data))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    deleteClient(id) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/client/delete.php', JSON.stringify({id: id}))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    searchClient(s) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/client/search.php?s=' + s)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }


    /* --------------------- VILLE ---------------------- */

    getAllVille() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl + '/ville/read.php').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getVille(id) {
        return new Promise(resolve => {
            this.http.get(this.apiUrl + '/ville/read_one.php?id=' + id).subscribe(data => {
                resolve(data);
            }, err => {
                console.log('err:' + err.status);
            });
        });
    }

    createVille(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/ville/create.php', JSON.stringify(data))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    updateVille(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/ville/update.php', JSON.stringify(data))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    deleteVille(id) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/ville/delete.php', JSON.stringify({id: id}))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    searchVille(s) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/ville/search.php?s=' + s)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }


    /* --------------------- ACTIVITE ---------------------- */

    getAllActivite() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl + '/activite/read.php').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getActivite(id) {
        return new Promise(resolve => {
            this.http.get(this.apiUrl + '/activite/read_one.php?id=' + id).subscribe(data => {
                resolve(data);
            }, err => {
                console.log('err:' + err.status);
            });
        });
    }

    createActivite(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/activite/create.php', JSON.stringify(data))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    updateActivite(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/activite/update.php', JSON.stringify(data))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    deleteActivite(id) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/activite/delete.php', JSON.stringify({id: id}))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    searchActivite(s) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/activite/search.php?s=' + s)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    /* --------------------- ClientVille ---------------------- */

    getClientVille(id) {
        return new Promise(resolve => {
            this.http.get(this.apiUrl + '/clientville/read.php?id_client=' + id).subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    createClientVille(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/clientville/create.php', JSON.stringify(data))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    deleteClientVille(id_client, id_ville) {
        console.log(id_ville + '::' + id_client);
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/clientville/delete.php', JSON.stringify({id_client: id_client, id_ville: id_ville}))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }


    /* --------------------- ClientActivité ---------------------- */

    getClientActivite(id) {
        return new Promise(resolve => {
            this.http.get(this.apiUrl + '/clientactivite/read.php?id_client=' + id).subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    createClientActivite(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/clientactivite/create.php', JSON.stringify(data))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    deleteClientActivite(id_client, id_act) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/clientactivite/delete.php', JSON.stringify({id_client: id_client, id_activite: id_act}))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
