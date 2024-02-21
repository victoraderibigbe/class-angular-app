import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DisplaycontactComponent } from './displaycontact/displaycontact.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { TestserviceComponent } from './testservice/testservice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { studentguardGuard } from './guards/studentguard.guard';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { BehaviorsubjectparentComponent } from './behaviorsubjectparent/behaviorsubjectparent.component';
import { PipeComponent } from './pipe/pipe.component';
import { EventparentComponent } from './eventparent/eventparent.component';

export const routes: Routes = [
    { path: '', component: LandingpageComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    {
        path: 'contact', children: [
            { path: '', component: LandingpageComponent },
            { path: ':index', component: DisplaycontactComponent },
        ]
    },
    { path: 'service', component: TestserviceComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    {
        path: 'dashboard', children: [
            { path: '', component: DashboardComponent },
            { path: 'settings', component: SettingsComponent },
        ], canActivate: [studentguardGuard]
    },
    { path: 'tempform', component: TemplatedrivenformComponent },
    {path: 'reactiveform', component: ReactiveformComponent},
    {path: 'behavior', component: BehaviorsubjectparentComponent},
    {path: 'pipe', component: PipeComponent},
    {path: 'event', component:EventparentComponent},
    { path: '**', component: ErrorpageComponent }
];
