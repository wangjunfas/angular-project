import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManagementComponent } from './course/management/management.component';
import { StarsComponent } from './stars/stars.component';
import {RouterModule, Routes} from "@angular/router";
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FormComponent } from './course/form/form.component';
import {CourseService} from "./course/course.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CoursefilterPipe } from './course/coursefilter.pipe';

const routes:Routes = [
  {
    path: '',
    component: DashBoardComponent,
    pathMatch: 'full'
  },
  {
    path: 'course',
    component: ManagementComponent
  },
  {
    path: 'form/:id',
    component: FormComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
    ManagementComponent,
    StarsComponent,
    DashBoardComponent,
    FormComponent,
    CoursefilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
