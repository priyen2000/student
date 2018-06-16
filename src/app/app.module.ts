import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { TodoComponent } from './todo/todo.component';
import { EmployeeComponent } from './employee/employee.component';
import { CataComponent } from './cata/cata.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app.routing';
import { EdittodoComponent } from './edittodo/edittodo.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { EditempComponent } from './editemp/editemp.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ForgetComponent } from './forget/forget.component';
import { ChangeComponent } from './change/change.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StudentComponent,
    TodoComponent,
    EmployeeComponent,
    CataComponent,
    MenuComponent,
    EdittodoComponent,
    EditproductComponent,
    EditstudentComponent,
    EditempComponent,
    SignupComponent,
    LoginComponent,
    ViewprofileComponent,
    EditprofileComponent,
    ForgetComponent,
    ChangeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
