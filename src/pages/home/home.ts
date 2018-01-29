import {Component} from '@angular/core';
import {App, NavController} from 'ionic-angular';
import {PlaceService} from '../../services/place-service';
import {SelectLocationPage} from '../select-location/select-location';
import {PlacesPage} from '../places/places';
import {PlaceDetailPage} from '../place-detail/place-detail';
import {SearchPage} from '../search/search';
import {BookmarksPage} from '../bookmarks/bookmarks';
import {MapPage} from '../map/map';
import {NearbyPage} from '../nearby/nearby';


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // current location
  public currentLocation = 'Lahore, Pakistan';


  // list slides for slider
  public slides = [
    {
      src: 'assets/img/bugger.jpg'
    },
    {
      src: 'assets/img/drink.jpg'
    },
    {
      src: 'assets/img/entree.jpg'
    }
  ];

  // list popular places
  public popularPlaces: any;


  constructor(public nav:NavController, public placeService:PlaceService, public app:App,) {
    this.popularPlaces = placeService.getAll();
  }

  // go to select location page
  selectLocation() {
    this.nav.push(SelectLocationPage);
  }

  // go to places
  viewPlaces() {
    this.app.getRootNav().push(PlacesPage);
  }

  // view a place
  viewPlace(id) {
    this.app.getRootNav().push(PlaceDetailPage, {id: id});
  }

  // go to search page
  goToSearch() {
    this.app.getRootNav().push(SearchPage);
  }

  // go to bookmarks page
  goToBookmarks() {
    this.app.getRootNav().push(BookmarksPage);
  }

  // view map
  goToMap() {
    this.app.getRootNav().push(MapPage);
  }

  // view nearby page
  goToNearBy() {
    this.app.getRootNav().push(NearbyPage);
  }
}
