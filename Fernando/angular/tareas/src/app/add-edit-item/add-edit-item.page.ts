import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.page.html',
  styleUrls: ['./add-edit-item.page.scss'],
})
export class AddEditItemPage implements OnInit {
  item: any;
  tabIndex: number;
  itemIndex: number;
  buttons: Array<string>;

  constructor(private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    private ListService: ListService) {

    this.buttons = ['leaf', 'flame', 'umbrella', 'snow'];
    this.tabIndex = +this.route.snapshot.paramMap.get('tab');
    this.itemIndex = +this.route.snapshot.paramMap.get('item');
    if (this.itemIndex >= 0) {
      this.item = Object.assign({}, this.ListService.getItem(this.tabIndex, this.itemIndex));
      this.item.date = new Date(this.item.date).toISOString();
    }
    else {
      this.item = { date: new Date().toISOString(), task: '', icon: 'radio-button-off' };
    }
  }

  ngOnInit() {
  }

  async error(message) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
  save() {
    if (!this.item.task.length) {
      this.error('The task cannot be empty');
    }
    else {
      if (this.itemIndex >= 0) {
        this.ListService.setItem(this.tabIndex, this.item, this.itemIndex);
      }
      else {
        this.ListService.setItem(this.tabIndex, this.item);
      }
      this.router.navigate(['/home']);
    }
  }

}
