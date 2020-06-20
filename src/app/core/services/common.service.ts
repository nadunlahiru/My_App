import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    private loading = new Subject<any>();

    constructor() {
    }

    public showLoading() {
        this.loading.next({status: true});
    }

    public getLoadingStatus(): Observable<any> {
        return this.loading.asObservable();
    }

    public hideLoading() {
        this.loading.next({status: false});
    }
}
