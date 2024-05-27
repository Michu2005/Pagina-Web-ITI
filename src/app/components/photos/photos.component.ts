import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/Photo';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  constructor(public photoService: PhotosService) {}

  photos:Photo[]=[];

  ngOnInit() {
    this.photoService.getPhotos()
      .subscribe(
        photos => {
          console.log(photos);
          this.photos=photos;
        },
        err => console.log(err)
      )
  }
  click(): void{
    alert('Works!');
  }
}
