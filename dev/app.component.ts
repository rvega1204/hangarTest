import {Component} from 'angular2/core';
import {YellowNavComponent} from './yellow-nav-component';
import {SearchCloudComponent} from './search-cloud-component';
import {MusicPipe} from './music-pipe'
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {SongService} from './songService';

@Component({
    selector: 'my-app',
    providers: [SongService],
    pipes: [MusicPipe],
    template: `
        <yellow-nav></yellow-nav>
        <search-cloud></search-cloud>
        <div class="search">
    		<input type="search" placeholder="{{search}}" [(ngModel)]="term"/>
    	</div>
    	<section class="songs" *ngIf="term != ''">
			<div *ngFor="#song of songs | music:term">
				<ul>
					<li>
						<iframe src="https://embed.spotify.com/?uri={{song.url}}" frameborder="0" allowtransparency="true" height="80"></iframe>
					</li>
				</ul>
			</div>
		</section>
	`,
    directives: [YellowNavComponent, SearchCloudComponent]

})
export class AppComponent {
	search = "Search Music";
	term:string = "";
	
	constructor(songService:SongService) {
	    songService.songs
	    	.subscribe(
		        songs => this.songs = songs,
		        console.error,
		        () => console.log('Completed!')
		    );
	}
}
