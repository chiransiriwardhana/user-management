import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 
import { NzButtonModule } from 'ng-zorro-antd/button'; 
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzPageHeaderModule } from'ng-zorro-antd/page-header'
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { UsrAddEditComponent } from './usr-add/usr-add.component';
import { NzModalModule } from 'ng-zorro-antd/modal'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { UsrEditComponent } from './usr-edit/usr-edit.component'
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { UsrDeleteComponent } from './usr-delete/usr-delete.component';

@NgModule({ 
  declarations: [ 
    AppComponent, UsrAddEditComponent, UsrEditComponent, UsrDeleteComponent 
  ], 
  imports: [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    NzButtonModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzMenuModule,
    NzModalModule,
    BrowserAnimationsModule,
    NzFormModule,
    HttpClientModule,
    NzTableModule,
    NzDividerModule,
    NzResizableModule, 
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
  ], 
  providers: [], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { } 