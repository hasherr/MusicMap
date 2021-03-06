import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { SavedEventsComponent } from "./saved-events/saved-events.component";
import { EventPageComponent } from "./event-page/event-page.component";
import { LyricsPageComponent } from "./lyrics-page/lyrics-page.component";

const routes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'saved-events', component: SavedEventsComponent },
    { path: 'event-page/:id', component: EventPageComponent },
    { path: 'lyrics', component: LyricsPageComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

} 