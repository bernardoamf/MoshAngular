import { Component } from '@angular/core';
import { CoursesComponent }   from './courses.component';
import { AuthorsComponent } from './authors.component';

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular App2</h1>
        <courses></courses>
        <authors></authors>`
})
export class AppComponent { }