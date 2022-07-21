import { Component } from '@angular/core';
import { faAtom,faBath,faHamburger,faEllipsis,faCodeBranch,faLaptopCode,faTerminal,faCode,faUserCircle } from '@fortawesome/free-solid-svg-icons';
interface Workers{
  name:string;
  position:string;
  office:string;
  age:number;
  status:boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dashboard_material_canvas_angular';
  faAtom = faAtom;
  faBath = faBath;
  faHamburger = faHamburger;
  faEllipsis = faEllipsis;
  faCodeBranch = faCodeBranch;
  faLaptopCode = faLaptopCode;
  faTerminal = faTerminal;
  faCode = faCode;
  faUserCircle = faUserCircle;

  dataTable:Workers[]=[
    {
      name:"John Doe",
      position:"Software Engineer",
      office:"New York",
      age:30,
      status:true
    },
    {
      name:"Jane Doe",
      position:"Software Engineer",
      office:"New York",
      age:30,
      status:true
    },
    {
      name:"John Gulateros",
      position:"Full stack Web Developer",
      office:"Bogotá",
      age:17,
      status:true
    },
    {
      name:"Jane Mark",
      position:"Web Developer",
      office:"Washington",
      age:28,
      status:false
    },
    {
      name:"John Clark",
      position:"Quality Assurance",
      office:"Bogota",
      age:32,
      status:true
    }
  ];
}
