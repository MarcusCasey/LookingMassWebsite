import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app/app-routing.module";
import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./app/home/home.component";
import { ContactComponent } from "./app/contact/contact.component";
import { CoreModule } from "./app/core/core.module";

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
