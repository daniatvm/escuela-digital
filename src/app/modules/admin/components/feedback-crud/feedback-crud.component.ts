import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback-crud',
  templateUrl: './feedback-crud.component.html',
  styleUrls: ['./feedback-crud.component.css']
})
export class FeedbackCrudComponent implements OnInit {

  feed: any[];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.loadFeed();
  }

  loadFeed() {
    this.feedbackService.getFeedback().subscribe(
      res => {
        let r: any = res;
        if (r.success) {
          this.feed = r.data;
          console.log(this.feed);
        } else {
          this.feed = [];
          console.log('No hay feedback');
        }
      },
      err => {
        console.log(err);
        console.log('Error con laravel');
      }
    )
  }
}
