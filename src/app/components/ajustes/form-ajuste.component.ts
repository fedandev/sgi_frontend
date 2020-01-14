import { Component, OnInit } from '@angular/core';
import { Ajuste } from 'src/app/classes/ajuste';
import { AjustesService } from 'src/app/services/ajustes.service';

@Component({
  selector: 'smart-form-ajuste',
  templateUrl: './form-ajuste.component.html'
})
export class FormAjusteComponent implements OnInit {
  private titulo: string = "Crear Ajuste";
  private ajuste: Ajuste = new Ajuste();
  constructor(private ajustesService: AjustesService) { }

  ngOnInit() {
  }

  public create(): void{
      console.log("create!");
      console.log(this.ajuste);
      this.ajustesService.createAjuste(this.ajuste)
      .subscribe( (data: any) => {
        console.log(data);
        this.ajuste = data;
      })

  }


}
