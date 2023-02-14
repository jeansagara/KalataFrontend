import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { CandidatsService } from '../services/candidats.service';
import { ElectionsService } from '../services/elections.service';
import { StorageService } from '../services/storage.service';
import { VotesService } from '../services/votes.service';

// Location
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, 
  NativeGeocoderResult, 
  NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.page.html',
  styleUrls: ['./vote.page.scss'],
  providers: [NativeGeocoder]

})
export class VotePage implements OnInit {

userLatitude:any
userLongitude:any



  idelection: any = 1;
  idcandidat: any
  candidats: any
  typeelection: any
  idtypevote: any
  id: any
  elec: any
  nomelection: any
  eliste: any
  teste: any
  searchText: any
  titre: any;
  electionn: any;
  currentUser: any;
  // LOCATION
  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  }
  geoAddress: any;

  constructor(private route: ActivatedRoute,
    // location
    private nativeGeocoder: NativeGeocoder,
    private router: Router,
    private storageService: StorageService,
    private candidat: CandidatsService,
    private alertController: AlertController,
    private service: VotesService,
    private election: ElectionsService) { }


  // Location debut
  async fetchLocation() {
    const location = await Geolocation.getCurrentPosition();
    console.log('location = ', location);
    this.nativeGeocoder.reverseGeocode(location.coords.latitude,
      location.coords.longitude,
      this.options)
      .then((result: NativeGeocoderResult[]) => {
        console.log('result = ', result);
        console.log('result 0 = ', result[0]);

        this.geoAddress = this.generateAddress(result[0]);
        console.log('location address = ', this.geoAddress);
      });

      this.userLatitude = location.coords.latitude
      this.userLongitude = location.coords.longitude

  }

  generateAddress(addressObj: any) {
    let obj: any[] = [];
    let uniqueNames: any[] = [];
    let address = "";
    for (let key in addressObj) {
      if (key !== 'areasOfInterest') {
        obj.push(addressObj[key]);
      }
    }

    let i = 0;
    obj.forEach(value => {
      if (uniqueNames.indexOf(obj[i]) === -1) {
        uniqueNames.push(obj[i]);
      }
      i++;
    });

    uniqueNames.reverse();
    for (const val of uniqueNames) {
      if (uniqueNames[val].length > 0) {
        address += uniqueNames[val] + ', ';
      }
    }
    return address.slice(0, -2);
  }
  // fin location

  ngOnInit() {


    this.fetchLocation()


    this.currentUser = this.storageService.getUser().id
    this.id = this.route.snapshot.params['id'];
    console.log("iden" + this.id)

    this.election.listerElectionParId(this.id).subscribe(data => {
      this.elec = data.election,
        this.nomelection = data.nomelection,
        console.log("hgjklmù" + this.nomelection);

      // this.nomelection=data[0].nomelection
      // this.description=data[0].description

    })

    this.election.ElectionParId(this.id).subscribe(data => {
      this.electionn = data,
        this.titre = this.electionn.nomelection;
      console.log("titre " + this.electionn)
      console.log(this.electionn[0].nomelection);
      this.idelection = this.electionn.idelection;
      console.log("Suucessss")
      console.log(this.electionn.nomelection)

    });

    //LA METHODE QUI PERMET DE D'AFFICHER UN TYPEDEVOTE PAR SON ID
    this.idtypevote = this.route.snapshot.params['id']
    console.log("avant mes donnees=======================" + this.idtypevote);

    this.service.afficherTypeElectionType(this.idtypevote).subscribe(data => {
      this.typeelection = data;
      this.eliste = data;
      this.teste = this.typeelection.
        console.log("mes elections dans " + JSON.stringify(this.typeelection));
    })


    console.log(this.candidats)
    this.candidat.listerCandidat().subscribe(data => {
      console.log(data)
      this.candidats = data
    })

    this.service.afficherTypeElection().subscribe(data => {
      this.typeelection = data;
      console.log(this.typeelection)
      console.log("mes elections" + JSON.stringify(this.typeelection));
    })
  }


  async presentAlert(idcandid: any) {
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
          handler: () => {
            this.voter(idcandid);

            console.log('Confirm Cancel: cancelled sending alerts');
          }
        },
      ],
    });

    await alert.present();
  }

  voter(idcandid: any) {
    this.idelection = 1
    console.log(this.idelection, + "oddddddddddddddddddddddddddddd")
    console.log("Altitudes "+this.userLatitude)
    this.service.creervotecandidats(this.currentUser, 
      this.idelection, idcandid,
      this.userLatitude,
      this.userLongitude).subscribe(data => {
      console.log(data);
    })


    // Swal message de retour lors du clique de botton
    Swal.fire({

      heightAuto: false,
      icon: 'success',
      title: 'Voté avec succès',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
