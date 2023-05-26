import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { AdvanceHighlightDirective } from './directives/advance-high-light.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [AppComponent, HighlightDirective, AdvanceHighlightDirective, UnlessDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
