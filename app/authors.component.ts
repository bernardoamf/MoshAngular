import {Component} from '@angular/core';
import {AuthorsService} from './authors.service';

@Component( {
    selector: 'authors',
    template: `<h2>Authors</h2>
                <ul> 
                    <li *ngFor="let author of authors">
                        {{ author }}
                    </li>
                </ul>`,
    providers: [AuthorsService]

})

export class AuthorsComponent {
    name = "This is the name of the author";
    authors;

    constructor(authorsService: AuthorsService){
        this.authors = authorsService.getAuthors();
    }
    
}
