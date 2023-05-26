import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cria-pensamentos',
  templateUrl: './cria-pensamentos.component.html',
  styleUrls: ['./cria-pensamentos.component.css']
})
export class CriaPensamentosComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criaPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
