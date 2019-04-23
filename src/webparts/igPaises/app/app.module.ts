import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PaisesComponent } from './componentes/paises/paises.component';

@NgModule({
    declarations: [
        AppComponent,
        PaisesComponent
    ],
    imports: [ 
        CommonModule,
        BrowserModule,        
        HttpModule
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}