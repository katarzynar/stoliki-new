import { RouterModule, Routes} from '@angular/router'; 
import { RestaurantsListComponent } from "./restaurants-list.component";
import { RestaurantComponent } from "./restaurant.component";

const routes:Routes = [
    
    { path:'', component: RestaurantsListComponent },
    { path:'restaurant', component: RestaurantComponent }
    
    
     

    ]
    export const Routing = RouterModule.forRoot(routes)