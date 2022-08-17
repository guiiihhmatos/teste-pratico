import { ContainerService } from './../../services/container.service';
import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/model/container';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-container',
  templateUrl: './lista-container.component.html',
  styleUrls: ['./lista-container.component.css']
})
export class ListaContainerComponent implements OnInit {

  container: Container[] = []

  TotalImportacoes: number = 0
  TotalExportacoes: number = 0


  constructor
  (
    private containerService: ContainerService,
    private roteador: Router
  )
  {

  }

  ngOnInit(): void {
    this.onList()
  }

  onList()
  {
    this.containerService.onGetAllContainers().subscribe(value => {

      this.container = value

      this.onGetAllMovimentacoes()
    })
  }

  onDelete(id: any)
  {
    this.containerService.onDeleteContainer(id).subscribe(value => {

      this.onList()
    })
  }

  onEdit(container: Container) {
    this.roteador.navigate(['lista-containers/editar'], {state:{data:container}})
  }


  onGetAllMovimentacoes()
  {
    for (const element of this.container)
    {
      switch(element.categoria.toUpperCase())
        {
          case 'IMPORTACAO':
            this.TotalImportacoes++
            break

          case 'EXPORTACAO':
            this.TotalExportacoes++
            break
        }
    }
  }


}
