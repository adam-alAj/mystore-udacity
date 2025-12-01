import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  imports: [CommonModule, RouterModule],
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.css',
})
export class ConfirmationComponent implements OnInit {
  name: string = '';
  total: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.total = +params['total'];
    });
  }

}
