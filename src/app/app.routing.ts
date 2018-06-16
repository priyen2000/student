import { Routes,RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { CataComponent } from './cata/cata.component';
import { EdittodoComponent } from './edittodo/edittodo.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { EditempComponent } from './editemp/editemp.component';
import { LoginComponent } from './login/login.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { SignupComponent } from './signup/signup.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ForgetComponent } from './forget/forget.component';
import { ChangeComponent } from './change/change.component';



const arr:Routes=[
  {path:'',component:TodoComponent},
  {path:'student',component:StudentComponent},
  {path:'product',component:ProductComponent},
  {path:'emp',component:EmployeeComponent},
  {path:'catageory',component:CataComponent},
  {path:'edittodo/:id',component:EdittodoComponent},
  {path:'editproduct/:id',component:EditproductComponent},
  {path:'editstudent/:id',component:EditstudentComponent},
  {path:'editemp/:id',component:EditempComponent},
  {path:'login',component:LoginComponent},
  {path:'view/:id',component:ViewprofileComponent},
  {path:'sign',component:SignupComponent},
  {path:'edit/:id',component:EditprofileComponent},
  {path:'forget',component:ForgetComponent},
  {path:'change',component:ChangeComponent}

];

export const routing= RouterModule.forRoot(arr);
