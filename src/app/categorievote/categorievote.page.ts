import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ElectionsService } from '../services/elections.service';
import { ProjetdeloisService } from '../services/projetdelois.service';
import { StorageService } from '../services/storage.service';
import { VotesService } from '../services/votes.service';
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-categorievote',
  templateUrl: './categorievote.page.html',
  styleUrls: ['./categorievote.page.scss'],
  providers: [NativeGeocoder]

})
export class CategorievotePage implements OnInit {
  typeelection: any;
  id: any
  nomelection: any
  description: any
  datefin: any
  datedebut: any
  soustitre: any
  images: any
  elec: any
  teste: any;
  eliste: any
  idelection: any
  electionn: any;
  titre: any;
  lesProjetsDeLois: any;
  truncateText: any = [];
  fullText: any = [];
  user: any;
  idAdministration: any;
  voterprojet: any;
  vote!: Number;
  istabFullText: any = [];
  role: any;
  // LOCATION
  options: NativeGeocoderOptions = {
    useLocale : true,
    maxResults: 5
  }
  geoAddress: any;



  constructor(private storageService: StorageService,
    // location
    private nativeGeocoder: NativeGeocoder,

    private election: ElectionsService,
    private service: VotesService,
    private route: ActivatedRoute,
    private router: Router,
    private projetdeloiService: ProjetdeloisService) { }

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

  }

  generateAddress(addressObj:any) {
    let obj:any[] = [];
    let uniqueNames:any[] = [];
    let address = "";
    for(let key in addressObj){
      if(key !== 'areasOfInterest'){
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

  idtypevote: any;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  showElecteur = false;

  ngOnInit() {
    this.user = this.storageService.getUser().id;

    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.showElecteur = this.roles.includes('ROLE_ELECTEUR');
      console.log(this.showElecteur)
    }

    console.log(this.user.id);
    this.id = this.route.snapshot.params[`idtypevote`];
    console.log("id path" + this.idtypevote)

    this.election.listerElectionParId(this.id).subscribe(data => {
      this.elec = data,
        console.log("identifuant" + this.elec);

    });
    console.log("successsss" + this.id)
    this.election.ElectionParId(this.id).subscribe(data => {
      this.electionn = data,
        this.titre = this.electionn.nomelection;
      console.log("titre " + this.titre)
      console.log(this.electionn);
      this.idelection = this.electionn.idelection;
      console.log("successsss" + this.idelection)

    });

    //LA METHODE QUI PERMET DE D'AFFICHER UN TYPEDEVOTE PAR SON ID
    this.idtypevote = this.route.snapshot.params['idtypevote']
    console.log("avant mes donnees=======================" + this.idtypevote);

    this.service.afficherTypeElectionType(this.idtypevote).subscribe(data => {
      this.typeelection = data;
      this.eliste = data;
      this.teste = this.typeelection;
      console.log("mes elections dans " + JSON.stringify(this.typeelection));
    })

    // ====================================== RECUPERATION DES PROJETS DE LOI
    if (this.id == 2) {
      this.projetdeloiService.afficherTypeElection().subscribe(data => {
        this.lesProjetsDeLois = data
        for (let i = 0; i < data.length; i++) {
          if (this.lesProjetsDeLois[i].id = i + 1) {
            this.fullText.push(data[i].descrption)
            this.truncateText.push(this.fullText[i].substring(0, 60) + "...");
            console.log(this.fullText + '--------------  ' + i)
            this.istabFullText.push(false)
          }

        }



        this.titre = data.titre
        console.log(data)
      })
    }

    
  }



  GoCate(id: number) {
    return this.router.navigate(['/vote', id])
  }
  // LES TRUNCATES POUR POUVOIR AFFICHER ET CACHER LE CONTENU

  isFullText = this.istabFullText;

  showFullText(i: number) {

    if (this.isFullText[i]) {
      this.isFullText[i] = false;
      this.truncateText[i] = this.fullText[i].substring(0, 50) + "...";
    } else {
      this.isFullText[i] = true;
      this.truncateText[i] = this.fullText[i];
    }
  }

  fairevote(idAdministratio: any) {
    console.log(this.user)
    this.projetdeloiService.creervoteprojet(idAdministratio, 
      this.user, this.vote).subscribe(data => {
      this.voterprojet = data
      console.log(data)

      // Swal message de retour lors du clique de botton
      Swal.fire({

        heightAuto: false,
        icon: 'success',
        title: 'Voté avec succès',
        showConfirmButton: false,
        timer: 1500
      })

    })
  }

  afficherValuevote() {
    console.log(this.vote);
  }

}
