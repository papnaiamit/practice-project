import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';


@Injectable()
export class DataService {

    constructor(private http: HttpClient ) {

    }

    setCookies(name, value, expiryDays?: number) {
        return localStorage.setItem(name, value);
    }

    intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({
          headers: req.headers.set('Authorization', 'token <your GitHub token>')
        });
        return next.handle(authReq);
      }


    callRestful() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'my-auth-token'
            })
        };

    }





}

