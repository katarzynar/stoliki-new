import { RouterModule, Routes} from '@angular/router'; 
import { RestaurantsListComponent } from "./restaurants-list.component";
import { RestaurantComponent } from "./restaurant.component";
import { HomeComponent } from "./home.component";
import { FiltersComponent } from "./filters.component";
import { SearchComponent } from "./search.component";
import { ProfileComponent } from "./profile.component";
import { FavouriteComponent } from "./favourite.component";
import { ReservationsComponent } from "./reservations.component";
import { HistoryComponent } from "./history.component";
import { ReservationComponent } from "./reservation.component";
import { SearchResultsPageComponent } from "./search-results-page.component";

const routes:Routes = [
    
    { path:'', component: HomeComponent },
    { path:'list', component: RestaurantsListComponent }, 
    { path:'filtry', component: FiltersComponent },
   
    { path:'profile', component: ProfileComponent },
    { path:'favourite', component: FavouriteComponent },
    { path:'reservations', component: ReservationsComponent },
    { path:'history', component: HistoryComponent },
    { path:'restaurants', component: RestaurantsListComponent },
    
    { path:'reservation', component: ReservationComponent },

    { path:'search', component: SearchComponent, pathMatch: 'full' },
    { path: 'search/results', component: SearchResultsPageComponent, pathMatch: 'full' },
    
    { path:'restaurant/:id', component: RestaurantComponent }


   

    
    
     

    ]
    export const Routing = RouterModule.forRoot(routes)