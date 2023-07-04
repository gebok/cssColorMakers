import { Component, OnInit } from '@angular/core';
import { FireStore } from '@angular/fire';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor( private afs: Firestore ) {}
  
  ngOnInit(): void {}

  onSubmit(formData: any) {

    let categoryData = {
      category: formData.value.category
    }

    this.afs.collection('categories').add(categoryData);
    // this.afs.collection('categories').add(categoryData);
    
  }

}
