import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
	.yellow {
		color: yellow;
	}
  `]
})
export class AppComponent {
	public secret = "password = tuna"
	public showInfo = false;
	public count = 0;
	public countArr = [];

	public toggleInfo = () => {
		this.count++;
		this.countArr.push(this.count);
		this.showInfo = this.showInfo == true ? false : true;
	}

	public checkLength = (e) => {
		if (Number(e) >= 5) {
			return "blue"
		}
	}

	public checkYellow = (e) => {
		if (Number(e) >= 5) {
			return true;
		} else {
			return false;
		}
	}
}
