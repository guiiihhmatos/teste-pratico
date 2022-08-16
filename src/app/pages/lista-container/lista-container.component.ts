import { ContainerService } from './../../services/container.service';
import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/model/container';

@Component({
  selector: 'app-lista-container',
  templateUrl: './lista-container.component.html',
  styleUrls: ['./lista-container.component.css']
})
export class ListaContainerComponent implements OnInit {

  container: Container[] = []
  constructor
  (
    private containerService: ContainerService
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
    })
  }
}
