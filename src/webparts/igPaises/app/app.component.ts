import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: require("./app.component.html") as string,
    styles:[`h1 {
        font-size: 4rem;
        font-weight: 900;
        text-align: center;
        margin: 4rem;
        text-transform: uppercase;
        animation: background-move 10s infinite;
        background: url(https://blog.spoongraphics.co.uk/wp-content/uploads/2012/retro-pattern/triangle-pattern.jpg);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }`]
})
export class AppComponent implements OnInit {

    constructor() { 

    }

    public ngOnInit() {

    }
}
