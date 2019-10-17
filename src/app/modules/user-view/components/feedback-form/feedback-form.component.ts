import { Component, OnInit } from '@angular/core';
import { Validator, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { FeedbackService } from 'src/app/services/feedback.service';

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

  constructor(private formBuilder: FormBuilder, private feedbackService: FeedbackService) { }

  get sugerenciaControls() {

    return this.sugerenciaForm.controls;

  }

  get consultaControls() {
    return this.consultaForm.controls;
  }

  ngOnInit() {
    this.sugerenciaForm = this.formBuilder.group({
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

  sendSuggestion() {

    this.submittedSugerencia = true;
    if (this.sugerenciaForm.invalid) {
      return;
    } else {
      let data = {
        id_school: 1,
        type: 0,
        name: this.sugerenciaForm.value.name,
        cellphone: this.sugerenciaForm.value.phoneNumber,
        email: this.sugerenciaForm.value.email,
        feedback_text: this.sugerenciaForm.value.description
      }
      this.feedbackService.sendSuggestion(data).subscribe(
        res => {
          let r: any = res;
          if (r.success) {
            alert('Sugerencia enviada')
          } else {
            console.log('Error al crear la sugerencia');
          }
        },
        err => {
          console.log(err);
          console.log('Problemas con conectar laravel')
        }
      );
    }

  }
  sendQuery() {
    this.submittedConsulta = true;
    if (this.consultaForm.invalid) {
      return;
    } else {
      let data = {
        id_school: 1,
        type: 1,
        name: this.consultaForm.value.name,
        cellphone: this.consultaForm.value.phoneNumber,
        email: this.consultaForm.value.email,
        feedback_text: this.consultaForm.value.description
      }
      this.feedbackService.sendQuery(data).subscribe(
        res => {
          let r: any = res;
          if (r.success) {
            alert('Consulta enviada')
          } else {
            console.log('Error al crear la consulta');
          }
        },
        err => {
          console.log(err);
          console.log('Problemas con conectar laravel')
        }
      );
    }
  }

}
