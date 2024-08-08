import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent{
    activeRoute:ActivatedRoute=inject(ActivatedRoute);

    ngOnInit(){
        this.activeRoute.fragment.subscribe((data)=>{
            this.JumpTOSection(data);
            
        })
    }
    JumpTOSection(section){
        document.getElementById(section).scrollIntoView({behavior:"smooth"});
    }

}