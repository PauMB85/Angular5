import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { AlisingInputPropertiesComponent } from './alising-input-properties/alising-input-properties.component';
import { OutputPropertiesComponent } from './output-properties/output-properties.component';
import { PassingEventDataComponent } from './passing-event-data/passing-event-data.component';
import { MyNgcomponentComponent } from './my-ngcomponent/my-ngcomponent.component';
import { LikeComponent } from './like/like.component';


@NgModule({
  declarations: [
    AppComponent,
    InputPropertiesComponent,
    AlisingInputPropertiesComponent,
    OutputPropertiesComponent,
    PassingEventDataComponent,
    MyNgcomponentComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
