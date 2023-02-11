import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, //redirige a home cuando no hay informacion luego del slash
  {path:'home', component: HomeComponent},  // si yo entro a /home rediregeme al compomente home
  {path:'search', component: SearchComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
