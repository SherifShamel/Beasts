import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurProgramsComponent } from './our-programs/our-programs.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { FormsModule } from '@angular/forms';
import { GuideComponent } from './guide/guide.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    OurProgramsComponent,
    NavBarComponent,
    GuideComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component:AboutUsComponent, pathMatch:'full'},
      {path:'about-us', component:AboutUsComponent},
      {path:'our-programs', component:OurProgramsComponent},
      {path:'guide', component:GuideComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
