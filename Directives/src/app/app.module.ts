import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyNgifComponent } from './my-ngif/my-ngif.component';
import { HiddenPropertyComponent } from './hidden-property/hidden-property.component';
import { MyNgswitchCaseComponent } from './my-ngswitch-case/my-ngswitch-case.component';
import { MyNgforComponent } from './my-ngfor/my-ngfor.component';
import { MyNgforTrackByComponent } from './my-ngfor-track-by/my-ngfor-track-by.component';
import { MyNgclassComponent } from './my-ngclass/my-ngclass.component';
import { MyNgstyleComponent } from './my-ngstyle/my-ngstyle.component';
import { TraversalOperatorComponent } from './traversal-operator/traversal-operator.component';
import { InputFormatDirective } from './input-format.directive';


@NgModule({
  declarations: [
    AppComponent,
    MyNgifComponent,
    HiddenPropertyComponent,
    MyNgswitchCaseComponent,
    MyNgforComponent,
    MyNgforTrackByComponent,
    MyNgclassComponent,
    MyNgstyleComponent,
    TraversalOperatorComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
