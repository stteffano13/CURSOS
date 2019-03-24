import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { GLOBAL } from "./global";
@Injectable()
export class FileService {
    public url: String;
    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    downloadFile(file:String)
    {
        var body ={filename:file};

       
    let params = body;
    console.log(params);
    let headers = new Headers({ "Content-type": "application/json" });
    return this._http
      .post(this.url + "download", params, { headers: headers })
      .map(res => res.json());
    }
}