import 'reflect-metadata';
import '../polyfills';

import { FlexLayoutModule } from "@angular/flex-layout";

import {NgbModule, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database'
import { AppConfig } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';

// MATT IMPORTS
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import { MatTableModule, MatMenuModule } from '@angular/material'
import {MatInputModule, MatButtonModule, MatOptionModule,MatFormFieldModule, MatSelectModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatToolbarModule} from '@angular/material'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ChangeRegistrationCodeComponent } from './change-registration-code/change-registration-code.component';
import { MarkImportantEventComponent } from './mark-important-event/mark-important-event.component';
import { SignUpSheetComponent } from './sign-up-sheet/sign-up-sheet.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { AddUserToEvent } from './sign-up-sheet/add-user-to-event/add-user-to-event.component';
import { RemoveUserFromEventComponent } from './sign-up-sheet/remove-user-from-event/remove-user-from-event.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MarkPermanentEventComponent } from './sign-up-sheet/mark-permanent-event/mark-permanent-event.component';


const appRoutes: Routes = [
  {
    path: '',
    component: SignUpSheetComponent
  },
  {
    path: 'volunteer-schedule',
    component: SignUpSheetComponent
  },
  {
    path: 'volunteer-directory',
    component: UserListComponent
  },
  {
    path: '**',
    component: SignUpSheetComponent
  }
];

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, NewUserComponent, UserListComponent, ChangeRegistrationCodeComponent, MarkImportantEventComponent, SignUpSheetComponent, HomeComponent, SliderComponent, AddUserToEvent, RemoveUserFromEventComponent, ToolbarComponent, MarkPermanentEventComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SidebarModule.forRoot(),
    AngularFireModule.initializeApp(AppConfig.firebase),
    FlexLayoutModule,
 	  AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    NgbModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTableModule,
    AngularFontAwesomeModule,
    MatChipsModule,
    MatInputModule,MatOptionModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatCardModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
