import {Component} from 'angular2/core';

@Component({
    selector: 'song-section',
    inputs: ['songname'],
    template: `
        <section class="songs">
			<div>
				<p>{{songname.songname}}</p>
                <p>{{songname.artistname}}</p>
			</div>
		</section>
    `
})
export class SongSectionComponent {
	title = "Hangar O'clock Songs";
    search = "Search Music";
}
