import { Injectable } from "@angular/core";
import { isDevMode } from '@angular/core';
declare var process: any;

@Injectable()
export class Config {

    private static cache = {};

    constructor(private data: any) { }

    public static loadInstance(jsonFile: string) {
        if (!isDevMode()) {
            return new Promise((resolve, reject) => { resolve(); });
        }

        return new Promise((resolve, reject) => {
            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', jsonFile, true);
            xobj.onreadystatechange = () => {
                if (xobj.readyState == 4) {
                    if (xobj.status == 200) {
                        this.cache[jsonFile] = new Config(JSON.parse(xobj.responseText));
                        resolve();
                    }
                    else {
                        reject(`Could not load file '${jsonFile}': ${xobj.status}`);
                    }
                }
            }
            xobj.send(null);
        });
    }

    public static getInstance(jsonFile: string) {
        if (!isDevMode()) {
            //production mode: Read configurations from environment variables
            return new Config({
                "access_token": process.env.ACCESS_TOKEN
                , "client_id": process.env.CLIENT_ID
                , "client_secret": process.env.CLIENT_SECRET
                , "redirect_uri": process.env.REDIRECT_URI
            });
        }
        if (jsonFile in this.cache) {
            return this.cache[jsonFile];
        }
        throw `Could not find config '${jsonFile}', did you load it?`;
    }

    public get(key: string) {
        if (this.data == null) {
            return null;
        }
        if (key in this.data) {
            return this.data[key];
        }
        return null;
    }
}