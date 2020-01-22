import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './cards/card-list/card-list.component';
import { CardCreateComponent } from './cards/card-create/card-create.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { CardViewComponent } from './cards/card-view/card-view.component';
import { AdvertiseComponent } from './stastc-pages/advertise/advertise.component';
import { AboutUsComponent } from './stastc-pages/about-us/about-us.component';
import { ContactUsComponent } from './stastc-pages/contact-us/contact-us.component';
import { FilterdCardListComponent } from './filter/filterd-card-list/filterd-card-list.component';
import { DesktopComponent } from './desktop/desktop.component';
import { SigninComponent } from './Authentication/signin/signin.component';
import { SignupComponent } from './Authentication/signup/signup.component';



const routes: Routes = [
  { path: '', component: CardListComponent },
  { path: 'admin/create', component: CardCreateComponent },
  { path: 'admin/delete', component: CardListComponent },
  { path: 'admin/edit', component: CardListComponent },
  { path: 'admin/edit/:cardId', component: CardCreateComponent },
  { path: 'view/:cardId', component: CardViewComponent },
  { path: 'advertise', component: AdvertiseComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'filterd/:filterAction', component: FilterdCardListComponent },
  { path: 'desktop', component: DesktopComponent },
  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
