import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SizerComponent } from './components/sizer/sizer.component';
import { TransferPanelComponent } from './components/transfer-panel/transfer-panel.component';
import { HeroesModule } from './router-study/heroes/heroes.module';
import { CrisisCenterModule } from './router-study/crisis-center/crisis-center.module';
import { NotFoundComponent } from './router-study/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    SizerComponent,
    TransferPanelComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
