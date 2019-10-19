import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsService } from 'src/app/services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-general-new',
  templateUrl: './create-general-new.component.html',
  styleUrls: ['./create-general-new.component.css']
})
export class CreateGeneralNewComponent implements OnInit {

  createForm: FormGroup;
  submitted: boolean = false;

  constructor(private loginService: LoginService,
    private formBuilder: FormBuilder,
    private newsService: NewsService,
    private router:Router) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });
  }

  create() {
    this.submitted = true;
    if (this.createForm.invalid) {
      return;
    } else {
      let d = new Date();
      let data = {
        id_new_type: 1,
        id_user: this.loginService.getLocal().id_user,
        title: this.createForm.value.title,
        description: this.createForm.value.description,
        date:`${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`,
        image: this.createForm.value.image
      }
      this.newsService.createNew(data).subscribe(
        res => {
          let r:any = res;
          if(r.success){
            alert('Se creo la noticia');
            this.router.navigate(['/','supervisor','mis-noticias']);
          }else{
            alert('Error al crear');
          }
        },
        err => {
          console.log('error con laravel');
          console.log(err);
        }
      )
    }
  }

  get f() {
    return this.createForm.controls;
  }

}
