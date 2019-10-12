import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css']
})
export class UpdateSchoolComponent implements OnInit {



  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    this.getSchool();
  }

  getSchool() {
    this.schoolService.getSchool().subscribe(
      res => {
        var response: any = res;
        if(response.success){
          console.log(JSON.parse(response.data));  
        }
      },
      err => {
        console.error(err);
      }
    )
  }

}
