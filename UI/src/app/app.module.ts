import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TokenInterceptor } from '@modules/auth/services/token-interceptor';
// import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DatePipe} from '@angular/common';
import { AuthGuard } from '@modules/auth/guards';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule,CommonModule,    BrowserAnimationsModule,NoopAnimationsModule
    ],
    providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true},AuthGuard,DatePipe],
    bootstrap: [AppComponent],
})
export class AppModule {}
