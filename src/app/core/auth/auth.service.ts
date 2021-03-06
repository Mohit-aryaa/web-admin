import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { UserService } from 'app/core/user/user.service';
import { environment } from 'environments/environment';

@Injectable()
export class AuthService
{
    private _authenticated: boolean = false;
    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _userService: UserService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string)
    {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string
    {
        return localStorage.getItem('accessToken') ?? '';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param email
     */
    forgotPassword(email: string): Observable<any>
    {
        return this._httpClient.post('api/auth/forgot-password', email);
    }

    /**
     * Reset password
     *
     * @param password
     */
    resetPassword(password: string): Observable<any>
    {
        return this._httpClient.post('api/auth/reset-password', password);
    }

    /**
     * Sign in
     *
     * @param credentials
     */
    signIn(credentials: { email: string; password: string }): Observable<any>
    {
        // Throw error, if the user is already logged in
        if ( this._authenticated )
        {
            return throwError('User is already logged in.');
        }

        return this._httpClient.post('api/auth/sign-in', credentials).pipe(
            switchMap((response: any) => {

                // Store the access token in the local storage
                this.accessToken = response.accessToken;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = response.user;

                // Return a new observable with the response
                return of(response);
            })
        );
    }
    
    //Admin data queries
    getAdminUsers(): Observable<any> 
    {
        return this._httpClient.get('http://18.221.25.167:3000/admin/user') 
    }
    addAdminUsers(data: any) {
        return this._httpClient.post('http://18.221.25.167:3000/admin/user', data)
    }
    updateAdminUsers(id, data: any) {
        return this._httpClient.put(`http://18.221.25.167:3000/admin/user/${id}`, data)
    }

    //Intereste category queries
    addNewInterestedCategory(data: any){
       return this._httpClient.post('http://18.221.25.167:3000/admin/interest', data)  
    }
    getInterestedCategory(): Observable <any>
    {
        return this._httpClient.get('http://18.221.25.167:3000/admin/interest')
    }
    updateInterestedCategory(id, data: any) {
        return this._httpClient.put(`http://18.221.25.167:3000/admin/interest/${id}`, data)
    }
    deleteInterestedCategory(del:any ) {
        //console.log(info.Id)
        return this._httpClient.delete('http://18.221.25.167:3000/admin/interest/'+del._id, del);    
    }

     //Product category queries
     addNewProductCategory(data: any){
        return this._httpClient.post('http://18.221.25.167:3000/admin/product-category', data)  
     }
     getProductCategory(): Observable <any>
     {
         return this._httpClient.get('http://18.221.25.167:3000/admin/product-category')
     }
     updateProductCategory(id, data: any) {
         return this._httpClient.put(`http://18.221.25.167:3000/admin/product-category/${id}`, data)
     }
     deleteProductCategory(del:any ) {
         //console.log(info.Id)
         return this._httpClient.delete('http://18.221.25.167:3000/admin/product-category/'+del._id, del);    
     }

     //Product subcategory queries
     addNewProductSubCategory(data: any){
        return this._httpClient.post('http://18.221.25.167:3000/admin/product-subcategory', data)  
     }
     getSubProductCategory(): Observable <any>
     {
         return this._httpClient.get('http://18.221.25.167:3000/admin/product-subcategory')
     }
     updateProductSubCategory(id, data: any) {
         return this._httpClient.put(`http://18.221.25.167:3000/admin/product-subcategory/${id}`, data)
     }
     deleteProductSubCategory(del:any ) {
         //console.log(info.Id)
         return this._httpClient.delete('http://18.221.25.167:3000/admin/product-subcategory/'+del._id, del);    
     }

   




    signInOtp(credentials: any): Observable<any>
    {
        // Throw error, if the user is already logged in
        if ( this._authenticated )
        {
            return throwError('User is already logged in.');
        }

        return this._httpClient.post('http://18.221.25.167:3000/auth/login', credentials).pipe(
            switchMap((response: any) => {

                // Store the access token in the local storage
                console.log(response)
                this.accessToken = response.token;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = response.user;

                // Return a new observable with the response
                return of(response);
            })
        );
    }

    getOtp(data): Observable<any> 
    {
        return this._httpClient.post('http://18.221.25.167:3000/auth/request-otp', data);
    }

    /**
     * Sign in using the access token
     */
    signInUsingToken(): Observable<any>
    {
        // Renew token
        return this._httpClient.post('api/auth/refresh-access-token', {
            accessToken: this.accessToken
        }).pipe(
            catchError(() =>

                // Return false
                of(false)
            ),
            switchMap((response: any) => {

                // Store the access token in the local storage
                this.accessToken = response.accessToken;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = response.user;

                // Return true
                return of(true);
            })
        );
    }

    /**
     * Sign out
     */
    signOut(): Observable<any>
    {
        // Remove the access token from the local storage
        localStorage.removeItem('accessToken');

        // Set the authenticated flag to false
        this._authenticated = false;

        // Return the observable
        return of(true);
    }

    /**
     * Sign up
     *
     * @param user
     */
    signUp(user: { name: string; email: string; password: string; company: string }): Observable<any>
    {
        return this._httpClient.post('${apiUrl}/auth/register', user);
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: { email: string; password: string }): Observable<any>
    {
        return this._httpClient.post('api/auth/unlock-session', credentials);
    }

    /**
     * Check the authentication status
     */
    check(): Observable<boolean>
    {
        // Check if the user is logged in
        if ( this._authenticated )
        {
            return of(true);
        }

        // Check the access token availability
        if ( !this.accessToken )
        {
            return of(false);
        }

        // Check the access token expire date
        if ( AuthUtils.isTokenExpired(this.accessToken) )
        {
            return of(false);
        }

        // If the access token exists and it didn't expire, sign in using it
        return this.signInUsingToken();
    }
}
