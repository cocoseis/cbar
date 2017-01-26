import { CService } from './../../../definitions/cservice'
import { Injectable, Component } from '@angular/core';

@Injectable()
export class CCalc extends CService{

    keys = ['calc'];
    valid = false;

    public result:string = '';

    action(query:string) {  
    }

    changed(query:string) {
        var saveQuery = query.replace(/[^-()\d/*+.]/g, '');
        var res:number;
        try{
            res = eval(saveQuery);
            this.valid = !isNaN(res);
            this.result = saveQuery + ' = ' + res;
        }catch(e){
            this.valid = false;
        }

        if(!this.valid){
            // this.result = 'error';
        }

        console.log('calculating action', query);
    }

}