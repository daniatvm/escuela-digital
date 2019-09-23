import { Component, OnInit } from '@angular/core';
import { Validator, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  sugerenciaForm: FormGroup;
  consultaForm: FormGroup;

  submittedSugerencia: boolean = false;
  submittedConsulta: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  get sugerenciaControls() {

    return this.sugerenciaForm.controls;

  }

  get consultaControls() {
    return this.consultaForm.controls;
  }

  ngOnInit() {
    this.sugerenciaForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        phoneNumber: ['',
          [
            Validators.required,
            Validators.pattern('^[0-9]*$'),
            Validators.minLength(8),
            Validators.maxLength(8)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        description: ['', [Validators.required, Validators.maxLength(280)]]
      }
    );
    this.consultaForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        phoneNumber: ['',
          [
            Validators.required,
            Validators.pattern('^[0-9]*$'),
            Validators.minLength(8),
            Validators.maxLength(8)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        description: ['', [Validators.required, Validators.maxLength(280)]]
      }
    );

  }

  send_sugerencia() {

    this.submittedSugerencia = true;
    if (this.sugerenciaForm.invalid) {
      return;
    } else {
      alert('Sugerencia enviada');
      /**
       * enviar
       */
    }

  }
  send_consulta() {
    this.submittedConsulta = true;
    if (this.consultaForm.invalid) {
      return;
    } else {
      alert('Consulta enviada');
      /**
       * enviar
       */
    }
  }

}
