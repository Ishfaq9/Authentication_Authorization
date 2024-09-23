import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { authGuard } from './authentication/auth.guard';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
     { path: "", component:HomeComponent ,title:"Home" },
     { path: "home", component:HomeComponent ,title:"Home" },
    { path: "signin", component: LoginComponent, title: "LogIn" },
    { path: "signup", component: RegisterComponent, title: "Register" },
    { path: "", component: HomeComponent, title: "Home" },
    { path: "layout", component: LayoutComponent, title: "User Deatils" },
    { path: "about-us", component: AboutUsComponent, title: "About Us" },
    { path: "user-details", component: UserDetailsComponent, title: "User Deatils", canActivate: [authGuard] },
    { path: "product-details", component: ProductDetailsComponent, title: "Product Details", canActivate: [authGuard] },
];
