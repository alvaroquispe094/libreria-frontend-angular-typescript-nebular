import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserData } from '../../@core/data/users';

@Component({
  selector: 'ngx-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  private destroy$: Subject<void> = new Subject<void>();
  about_book:any;
  about_team:any;

  constructor(private userService: UserData, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    //seteo la url de la imagen
    this.userService.getImages()
      .pipe(takeUntil(this.destroy$))
      .subscribe((images: any) => this.about_book = images.about_us_book);

    //seteo la url de la imagen
    this.userService.getImages()
      .pipe(takeUntil(this.destroy$))
      .subscribe((images: any) => this.about_team = images.about_us_team);  

  }

}
