import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../services/servicos.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ServicosService]
})
export class HomeComponent implements OnInit {

  public servicos: Array<any>

  constructor(private servicosService: ServicosService) { }

  ngOnInit() {

    this.servicos = this.servicosService.getServicos()
  }

}
