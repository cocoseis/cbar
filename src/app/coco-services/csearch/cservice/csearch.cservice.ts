import { CService } from './../../../definitions/cservice'
import { Injectable, Component } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs';

@Injectable()
export class CSearch extends CService{
    
     keys = ['s', 'search'];
     valid = true;

     result:string = '';

     action(query:string) {
        // this.preview = 'searched for: ' + query;

        console.log('search action', query);
        
        var win = window.open('https://duckduckgo.com/?q='+query, '_blank');
        win.focus();

    };

     changed(query:string) {
        query = query.replace(/ /g, '+'); // replace spaces by plus sign

        var url = 'http://api.duckduckgo.com/?q='+query+'&format=json&pretty=1&no_redirect=1';
    
        /** send to the server */
        var post = this.http.get(
            url
        ).map((res: Response) => res.json());

        post.subscribe(
        data => {
            console.log('success', data);

            try{
                this.result = data.RelatedTopics[0].Text;
            }catch(e){
                this.result = "error";
            }

            // data.RelatedTopics.forEach((topic)=> {
            //     this.preview += topic.Text;
            // });

        },
        error => {
            console.log('error', error);
            // this.result = 'search error';
        },
        () => {  }
        );

        console.log('search changed', query);
    }

    constructor(private http: Http) {
        super();
    }

    

}