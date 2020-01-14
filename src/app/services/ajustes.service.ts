import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ajuste } from '../classes/ajuste';

@Injectable({
  providedIn: 'root'
})
export class AjustesService {
  
  private httpParams = new HttpParams().set('client_id','OU00MGEwblhNcklyT09CM0lvQkxsSXpXU3luUkxUTlhuTUxscE9NaA==');
  
  constructor(private http:HttpClient) { }
  
  getAjustes(){  
    let url:string = "https://sgi_backend-fsantucho.codeanyapp.com/api/ajustes";  
    return this.http.get( url, {params: this.httpParams});    
  }

  showAjuste(id: any){
    let url:string = "https://sgi_backend-fsantucho.codeanyapp.com/api/ajustes"+id;  
    return this.http.get( url, {params: this.httpParams} );    
  }

  deleteAjuste(id: any){  
    let url:string = "https://sgi_backend-fsantucho.codeanyapp.com/api/ajustes/"+id;    
    return this.http.delete( url, {params: this.httpParams} );    
  }

  createAjuste(ajuste: Ajuste): Observable<Ajuste>{
    let headers = new HttpHeaders({
    'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    let options = { headers: headers };
    
    let url:string = "https://sgi_backend-fsantucho.codeanyapp.com/api/ajustes";    
    return this.http.post<Ajuste>(url,ajuste,options);
  }
  
  
}
