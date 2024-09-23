// export class SessionHelper {
//     static setToken = (token:string) => sessionStorage.setItem('token',token);
//     static setUserId = (userId:string) => sessionStorage.setItem('nameidentifier',userId);
//     static setName = (name:string) => sessionStorage.setItem('name',name);
//     static setEmail = (email:string) => sessionStorage.setItem('emailaddress',email);
//     static setPhoneNumber = (phone:string) => sessionStorage.setItem('mobilephone',phone);
//     static setRole = (role:string) => sessionStorage.setItem('role',role);
//     static setTokenExpiresTime =(tokenExpiresTime:string)=> sessionStorage.setItem('tokenExpiresTime',tokenExpiresTime);

//     static getToken = () => sessionStorage.getItem('token');
//     static getUserId = () => sessionStorage.getItem('nameidentifier');
//     static getName = () => sessionStorage.getItem('name');
//     static getEmail =() => sessionStorage.getItem('emailaddress');
//     static getPhoneNumber = () => sessionStorage.getItem('mobilephone');
//     static getRole = () => sessionStorage.getItem('role');
//     static getTokenExpiresTime=()=>sessionStorage.getItem('tokenExpiresTime');

// }
//local storage (access the token for new tabs)

export class SessionHelper {
    static setToken = (token: string) => localStorage.setItem('token', token);
    static setUserId = (userId: string) => localStorage.setItem('nameidentifier', userId);
    static setName = (name: string) => localStorage.setItem('name', name);
    static setEmail = (email: string) => localStorage.setItem('emailaddress', email);
    static setPhoneNumber = (phone: string) => localStorage.setItem('mobilephone', phone);
    static setRole = (role: string) => localStorage.setItem('role', role);
    static setTokenExpiresTime = (tokenExpiresTime: string) => localStorage.setItem('tokenExpiresTime', tokenExpiresTime);

    static getToken = () => localStorage.getItem('token');
    static getUserId = () => localStorage.getItem('nameidentifier');
    static getName = () => localStorage.getItem('name');
    static getEmail = () => localStorage.getItem('emailaddress');
    static getPhoneNumber = () => localStorage.getItem('mobilephone');
    static getRole = () => localStorage.getItem('role');
    static getTokenExpiresTime = () => localStorage.getItem('tokenExpiresTime');
}

