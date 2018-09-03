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


    /* ---------------------CLIENT---------------------- */

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

    deleteClient(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/client/delete.php', JSON.stringify(data))
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


    /* ---------------------VILLE---------------------- */

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

    deleteVille(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/ville/delete.php', JSON.stringify(data))
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


    /* ---------------------ACTIVITE---------------------- */

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

    deleteActivite(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/activite/delete.php', JSON.stringify(data))
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
}
