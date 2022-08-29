import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProductComponent } from "./pages/product/product.component";
import { RegisterComponent } from "./pages/register/register.component";
import { SingleComponent } from "./pages/single/single.component";

const routes:Routes=[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'login',component:LoginComponent}
    {path:'home',component:HomeComponent},
    {path:'products/:catId',component:ProductComponent},
    {path:'products/details/:id',component:SingleComponent},
    {path:'about',component:ContactComponent},
    {path:'contact',component:ContactComponent},
    {path:'register',component:RegisterComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}