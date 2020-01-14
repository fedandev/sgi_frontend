import { Component, OnInit } from '@angular/core';
import { AjustesService } from 'src/app/services/ajustes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'smart-ajustes',
  templateUrl: './ajustes.component.html',
  
})
export class AjustesComponent implements OnInit {
  ajustes: any[] = [];
  ajuste: any[] = [];
  constructor(private ajustesService: AjustesService, private _router: Router, private _route: ActivatedRoute) {
    this.ajustesService.getAjustes()
      .subscribe( (data: any) => {
        console.log(data);
        this.ajustes = data;
      })
  }

  ngOnInit() {
  }
  
  show(id: any){
    this._router.navigateByUrl(`ajustes/${id}`);
    //this.ajustesService.showAjuste(id);
  }

  delete(id: any){
    this.ajustesService.deleteAjuste(id);
  }

}
