import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {CommonService} from "./common.service";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private router: Router,
                private httpClient: HttpClient,
                private commonService: CommonService,
    ) {
    }

    // public login(conf: any, data: any): Observable<any> {
    //   console.log();
    //   return this.requestLogin(conf.url, data, conf.headerParam).pipe(
    //
    //       map((t: any) => {
    //         this.commonService.hideLoading();
    //         // console.log(t.access_token);
    //         this.accessToken = 'Bearer ' + t.access_token;
    //         this.localStorage.store('ACCESS_TOKEN', this.accessToken);
    //         // console.log(this.accessToken);
    //         return t;
    //       })
    //       , catchError(error => {
    //         console.log(error);
    //         return throwError('Login Failed!');
    //       }));
    // }

    // private requestLogin(url: string, data: any, headerParams?: any): Observable<any> {
    //   const loginKey = 'Basic ' + 'Y2xpZW50YXBwOjEyMzQ1Ng==';
    //
    //   const body = new FormData();
    //   body.append('username', data.username);
    //   body.append('password', data.password);
    //   body.append('grant_type', 'password');
    //
    //   let headers = new HttpHeaders();
    //   headers = headers.set('Authorization', loginKey);
    //
    //    // TODO : write refresh logic & refacto
    //   return this.httpClient.post(url, body, {headers: headers});
    // }

    public request(conf: any, data?: any): Observable<any> {
        this.commonService.showLoading();
        if (!data) {
            data = {};
        }
        let headers = new HttpHeaders();
        // headers = headers.set('Authorization', this.accessToken);
        if (conf.type === 'POST') {
            return this.httpClient.post(conf.url, data, {headers: headers}).pipe(
                map((t: any) => {
                    this.commonService.hideLoading();
                    return this.decodeMsg(t);
                })
                , catchError(error => {
                    console.log(error);
                    return throwError('Request failed');
                }));
        } else {
            return this.httpClient.get(conf.url, {
                params: Object.entries(data).reduce(
                    (params, [key, value]) => params.set(key, '' + value), new HttpParams()),
                headers: headers
            }).pipe(
                map((t: any) => {
                    this.commonService.hideLoading();
                    return this.decodeMsg(t);
                })
                , catchError(error => {
                    console.log(error + conf.url);
                    return throwError('Request failed');
                }));
        }
    }

    private decodeMsg(body: any): any {
        if (body.success && body.success === true) {
            return body.result;
        } else if (body.success === false) {
            // this.alertService.showToaster(body.errorMessage, 'ERROR');
        }
        return null;
    }
}
