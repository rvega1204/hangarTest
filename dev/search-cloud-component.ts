import {Component} from 'angular2/core';
import '/rxjs/add/operator/map';

@Component({
    selector: 'search-cloud',
    template: `
    	<section class="clouding">
    		<h1><span></span> {{ title}}</h1>
    	</section>
	`
})
export class SearchCloudComponent {
	title = "Hangar O'clock Songs";
	
}
