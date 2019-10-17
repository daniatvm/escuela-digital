import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/models/class';
import { ClassService } from 'src/app/services/class.service';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-create-specific-new',
  templateUrl: './create-specific-new.component.html',
  styleUrls: ['./create-specific-new.component.css']
})
export class CreateSpecificNewComponent implements OnInit {

  ownClasses: Class[];
  ownClass: Class;

  createForm: FormGroup;
  submitted: boolean = false;

  constructor(private classService: ClassService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private newsService: NewsService) { }

  ngOnInit() {
    this.loadClasses();
  
    this.createForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      class: [null, [Validators.required]],
      image: ['', [Validators.required]]
    });
  }

  loadClasses() {
    this.classService.getClassByEmployee(this.loginService.getLocal().id_employee).subscribe(
      res => {
        let r: any = res;
        if (r.success) {
          console.log(r.data);
          this.ownClasses = r.data;
          this.ownClass = this.ownClasses[0];
        } else {
          console.log('No hay clases asociadas.');
        }
      },
      err => {
        console.log(err);
        console.log('Error con laravel');
      }
    );
  }

  create() {
    this.submitted = true;
    if (this.createForm.invalid) {
      return;
    } else {
      let d = new Date();
      let data = {
        id_new_type: 2,
        id_user: this.loginService.getLocal().id_user,
        id_class: this.createForm.value.class.id_class,
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
          }else{
            alert('Caca malo ');
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
