import { CService } from './../../../definitions/cservice';
import { Injectable, Component } from '@angular/core';

const remote = (<any>window)["electron"]["remote"];
// var sys = remote.require('sys')
const exec = remote.require('child_process').exec;

@Injectable()
export class CFileSystem extends CService {

    keys = ['filesystem', 'fs'];
    valid = false;

    lastValidResult: string[]; 
    result: string[];

    constructor(){
        super();
    }

    action(query: string) {
        console.log("action", query);
        this.openPath(query, () => { });
    }

    changed(query: string) {
        let path = query.replace( new RegExp("([^/]+$)","") , ""); //remove everything past the last slash to keep a preview
        console.log("changed path",path);
        
        this.valid = false;

        this.readFolder( path ,(error, stdout, stderr) => {
            // sys.puts(stdout) 
            
            if (error) {
                this.result = [stderr]
            }else{
                this.result = stdout
                    .split("\n") //split folders/files into array
                    .filter(n => n!=""); //remove empty entries

                this.valid = true;
            }
        });
    }

    private readFolder(path, callback) {
        exec("ls ~/" + path, callback);

        // fs.readFile(path, 'utf8', function (err, data) {
        //     console.log("read done.", data, err);
        //     if (err) {
        //         // console.error("error reading file", path, err);
        //         console.error("error reading file");
        //     }
        //     // console.log("read file", path);
        //     callback(data);
        // });
    }


    private openPath(path, callback) {
        exec("open ~/" + path, (error, stdout, stderr) => {
            console.log("openPath callback", error, stdout, stderr);
        });

    }

}