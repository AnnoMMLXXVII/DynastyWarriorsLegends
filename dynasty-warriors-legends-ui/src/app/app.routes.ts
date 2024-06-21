import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutLegendsComponent } from './about-legends/about-legends.component';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    // {path:'warriors', redirectTo: '/', pathMatch:'full'}
    // {path:'kingdoms', redirectTo: '/', pathMatch:'full'}
    // {path:'weapons', redirectTo: '/', pathMatch:'full'}
    { path: 'about', component: AboutLegendsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { };

