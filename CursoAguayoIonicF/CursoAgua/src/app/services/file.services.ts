import { Injectable } from "@angular/core";
//import { Http, Headers } from "@angular/http";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { GLOBAL } from "./global";
import "rxjs/Rx";
import {Observable} from 'rxjs/Observable';
@Injectable()
export class FileService {
    public url: String;
    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url;
    }

    downloadFile(file:String)
    {
        console.log("entre al servicio de archivo", file);
        var body ={filename:file};

      
    let params = body;
    console.log(params);
    let headers = new HttpHeaders({ "Content-type": "application/json" });
    
    return this._http
      .post(this.url + "download", params, { responseType:'blob', headers: headers });
    }
}