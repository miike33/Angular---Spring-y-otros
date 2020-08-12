import { Component, ViewChild } from '@angular/core';
import { ListService } from '../services/list.service';
import { AlertController, IonTabBar, IonList } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('myTabs', { static: false }) tabRef: IonTabBar;
  @ViewChild('myList', { static: false }) listRef: IonList;
  tabs: any;
  tabIndex: number;
  reorder: boolean;


  constructor(private listService: ListService, private alertController: AlertController) {
    this.tabIndex = 0;
    this.reorder = false;
    this.tabs = [
      { label: 'School', icon: 'school', list: [] },
      { label: 'Home', icon: 'home', list: [] },
      { label: 'Holidays', icon: 'airplane', list: [] },
    ];

    this.tabs.forEach((tab, index) => {
      tab.list = this.listService.getList(index);
    });
    this.tabIndex = 0;
    this.reorder = false;
  }

  toggleReorder() {
    this.reorder = !this.reorder;
    this.listRef.closeSlidingItems();
  }
  setTab(tabIndex) {
    this.tabIndex = tabIndex;
    this.tabRef.selectedTab = this.tabs[this.tabIndex].label;
  }
  async deleteItem(item?) {
    const alert = await this.alertController.create({
      header: item === undefined ? 'Delete all' : 'Delete item',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.listRef.closeSlidingItems();
            if (item === undefined) {
              this.listService.deleteList(this.tabIndex);
            }
            else {
              this.listService.deleteItem(this.tabIndex, item);
            }
          }
        },
        {
          text: 'CANCEL',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }
  moveItem(indexes) {
    this.listService.moveItem(this.tabIndex, indexes.from, indexes.to);
    indexes.complete();
  }
}
