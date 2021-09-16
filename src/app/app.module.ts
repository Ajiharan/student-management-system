import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { TaskCalenderComponent } from './task-calender/task-calender.component';
import { TaskTodoComponent } from './task-todo/task-todo.component';
import { SectionAnimationDirective } from './shared/directives/section-animation.directive';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

import { HttpClientModule } from '@angular/common/http';
import {
  todoGetReducer,
  todoGetReducerOnDate,
  todoReducer,
  todoUpdateReducer,
} from './state/TodoReducer';
import { todoEffect } from './state/TodoEffect';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SpinnerComponent,
    FooterComponent,
    DashboardComponent,
    ChartsComponent,
    TablesComponent,
    TaskCalenderComponent,
    TaskTodoComponent,
    SectionAnimationDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    CommonModule,
    StoreModule.forRoot(
      {
        todoDetails: todoReducer,
        todoGetDetails: todoGetReducer,
        todoUpdateDetails: todoUpdateReducer,
        todoGetDetailsOnDate: todoGetReducerOnDate,
      },
      {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
        },
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([todoEffect]),
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
