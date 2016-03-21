import {Component} from 'angular2/core';

@Component({
    selector: 'yellow-nav',
    template: `
    	<div class="buttons">
    		<div class="playing" (click)="clickMe(playing)">{{playing}}</div>
        	<div class="rate" (click)="clickMe(rate)">{{rate}}</div>
    	</div>
    `
})
export class YellowNavComponent {
    playing = "Now Playing";
    rate = "Rate Songs";
    
	clickMe(item) {
		console.log(item);
	}
}