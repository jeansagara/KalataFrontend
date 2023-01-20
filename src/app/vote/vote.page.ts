import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.page.html',
  styleUrls: ['./vote.page.scss'],
})
export class VotePage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Êtes-vous sûr de voter ?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Non',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Oui',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }

}
