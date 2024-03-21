import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';
export const appConfig = {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
    )
  ],
};
