import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

require('./favicon.ico');

if (process.env.ENV === 'production') {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule);
