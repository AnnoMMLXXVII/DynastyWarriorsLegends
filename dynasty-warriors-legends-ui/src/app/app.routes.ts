import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AboutLegendsComponent } from './about-legends/about-legends.component';
import { KingdomsComponent } from './kingdoms/kingdoms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WarriorsLegendsComponent } from './warriors-legends/warriors-legends.component';
import { WeaponsComponent } from './weapons/weapons.component';

export const routes: Routes = [
    { path: 'home', component: PageNotFoundComponent },
    { path: 'warriors', component: WarriorsLegendsComponent },
    { path: 'kingdoms', component: KingdomsComponent },
    { path: 'weapons', component: WeaponsComponent },
    { path: 'about', component: AboutLegendsComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { };

