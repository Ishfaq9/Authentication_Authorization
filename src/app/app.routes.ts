import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/userLayout/layout.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { authGuard } from './authentication/auth.guard';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { Test1Component } from './pages/test1/test1.component';
import { Test2Component } from './pages/test2/test2.component';
import { Test3Component } from './pages/test3/test3.component';
import { Test4Component } from './pages/test4/test4.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';

export const routes: Routes = [
    { path: "", component: HomeComponent, title: "Home" },
    { path: "home", component: HomeComponent, title: "Home" },
    { path: "signin", component: LoginComponent, title: "LogIn" },
    { path: "signup", component: RegisterComponent, title: "Register" },
    { path: "about-us", component: AboutUsComponent, title: "About Us" },

    {
        path: "Admin", component: LayoutComponent,
        data:{role:'Admin'},
        children: [
            {path: "", component: UserDetailsComponent,},
            { path: "user-details", component: UserDetailsComponent, title: "User Deatils",  },
            { path: "product-details", component: ProductDetailsComponent, title: "Product Details",  },
        ], title: "User Layout",
        canActivate: [authGuard]
    },

    {
        path: "User", component: AdminLayoutComponent,
        data:{role:'User'},
        children: [
        { path: "", component: AdminLayoutComponent, title: "Test",canActivate: [authGuard] },
        { path: "test1", component: Test1Component, title: "Test",canActivate: [authGuard] },
        { path: "test2", component: Test2Component, title: "Test",canActivate: [authGuard] },
        { path: "test3", component: Test3Component, title: "Test",canActivate: [authGuard] },
        { path: "test4", component: Test4Component, title: "Test",canActivate: [authGuard] },
        ],
        title: "Admin Layout"
    },


];
