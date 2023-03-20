import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TokenInterceptor } from '@modules/auth/services/token-interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DatePipe} from '@angular/common';
import { AuthGuard } from '@modules/auth/guards';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true},AuthGuard,DatePipe],
    bootstrap: [AppComponent],
})
export class AppModule {}
