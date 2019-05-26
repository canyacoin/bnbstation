import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { MainnetComponent } from '../mainnet/mainnet.component'
    import { TestnetComponent } from '../testnet/testnet.component'
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
            path: 'testnet',
            component: TestnetComponent,
        },
        {
            path: 'bnb',
            component: BnbComponent,
        },
        {
            path: 'binancechain',
            component: MainnetComponent,
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
