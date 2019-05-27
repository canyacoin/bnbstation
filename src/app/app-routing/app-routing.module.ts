import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { MainnetComponent } from '../mainnet/mainnet.component'
    import { BnbComponent } from '../bnb/bnb.component'

    const routes: Routes = [
        {
            path: '',
            component: MainnetComponent,
        },
        {
            path: 'mainnet',
            component: MainnetComponent,
        },
        {
            path: 'bnb',
            component: BnbComponent,
        },
        {
            path: 'about',
            component: MainnetComponent,
        },
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
