import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddComponent } from './add/add.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DeleteComponent } from './delete/delete.component';
import { FetchComponent } from './fetch/fetch.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'home-component',component:HomeComponent},
  {path:'about-component',component:AboutComponent},
  {path:'packages-component',component:PackagesComponent},
  {path:'add-component',component:AddComponent},
{path:'delete-component',component:DeleteComponent},
{path:'fetch-component',component:FetchComponent},
{path:'update-component',component:UpdateComponent},
{path:'contactus-component',component:ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,AboutComponent,PackagesComponent,AddComponent,DeleteComponent,FetchComponent,UpdateComponent,ContactusComponent]