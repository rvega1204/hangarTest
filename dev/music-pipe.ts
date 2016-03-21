import {Pipe} from 'angular2/core';

@Pipe({
  name: 'music'
})
export class MusicPipe {
	transform(value, [term]){
		if (value == null){
			return null;
		}
		return value.filter((item)=> item.artistname.includes(term));
	}	
}
