import { Http,  Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';


@Injectable()
export class AuthService {

    constructor(private http: Http) {}

    getToken(usernmae:string, password: string) {

        var data = {
            'type': 'base64',
            'value' : btoa(usernmae + ":" + password),
            'namespace': 'https://hydra.unicity.net/v5/customers'
        }

        console.log("DATA =======> ",data);


        var headers = new Headers();
        
           headers.append("Accept", 'application/json');
           headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
           headers.append('Content-Type', 'application/json' );
           let options = new RequestOptions({ headers: headers });
           var userlog_data = JSON.stringify(data);
   
           return this.http.post('https://hydra.unicity.net/v5/loginTokens', userlog_data, options)            
               .map(res => res.json());   
           }
        

}