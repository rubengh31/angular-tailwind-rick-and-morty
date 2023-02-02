import { AuthButtonComponent } from './core/auth-button/auth-button.component';
import { CharactersEffects } from './state/effects/characters.effects';
import { ROOT_REDUCERS } from './state/app.state';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeAgoPipe } from './shared/pipes/timeAgo.pipe';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoaderService } from './shared/components/loader/loader.service';
import { LoaderInterceptor } from './core/interceptors/loader.interceptor';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { HttpErrorInterceptor } from './core/interceptors/httpErrorInterceptor.service';
import { BrowserModule } from '@angular/platform-browser';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoaderComponent,
    AuthButtonComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'NGRX' }),
    EffectsModule.forRoot([CharactersEffects]),

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-eu5ctodk04g101rx.us.auth0.com',
      clientId: 'Qxjx1b3qqHgt0q1XwIn9PDUNvJVGLZWH',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    TimeAgoPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
