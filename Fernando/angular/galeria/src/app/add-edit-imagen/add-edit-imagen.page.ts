import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-imagen',
  templateUrl: './add-edit-imagen.page.html',
  styleUrls: ['./add-edit-imagen.page.scss'],
})
export class AddEditImagenPage implements OnInit {

  nombre: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.nombre = this.route.snapshot.paramMap.get('nombre');
  }

  ngOnInit() {
  }

}
