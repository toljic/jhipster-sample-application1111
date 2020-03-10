import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSampleApplication111SharedModule } from 'app/shared/shared.module';
import { JhipsterSampleApplication111CoreModule } from 'app/core/core.module';
import { JhipsterSampleApplication111AppRoutingModule } from './app-routing.module';
import { JhipsterSampleApplication111HomeModule } from './home/home.module';
import { JhipsterSampleApplication111EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSampleApplication111SharedModule,
    JhipsterSampleApplication111CoreModule,
    JhipsterSampleApplication111HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSampleApplication111EntityModule,
    JhipsterSampleApplication111AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterSampleApplication111AppModule {}
