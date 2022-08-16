import { ContainerService } from './../../services/container.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-container',
  templateUrl: './formulario-container.component.html',
  styleUrls: ['./formulario-container.component.css']
})
export class FormularioContainerComponent implements OnInit {

  containerForm: FormGroup
  constructor
  (
    private containerService: ContainerService,
    private formBuilder: FormBuilder
  )
  {
    this.containerForm = this.formBuilder.group({
      id: [''],
      cliente : ['', Validators.required],
		  numeroContainer : ['', Validators.required, Validators.minLength(11), Validators.maxLength(11)],
		  tipo : ['', Validators.required],
		  status : ['', Validators.required],
		  categoria : ['', Validators.required],
		  movimentacao : ['', Validators.required],
		  dataInicio : ['', Validators.required],
		  dataFim : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSaveContainer()
  {
    this.containerService.onSaveContainers(this.containerForm.value).subscribe(value => {

      console.log(value)
    },
    error => {
      console.error(error)
    })
  }
}
