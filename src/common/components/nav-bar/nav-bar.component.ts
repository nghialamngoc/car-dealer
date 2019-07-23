import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  toggleClass: string = "fas fa-bars";
  isOpen: boolean = false;

  constructor() {}

  ngOnInit() {
    
  }

  onToogle(e) {
    let currentClass = e.target.className;

    if (currentClass === "fas fa-bars") {
      this.toggleClass = "fas fa-times";
      this.isOpen = true;
    } else {
      this.toggleClass = "fas fa-bars";
      this.isOpen = false;
    }
  }
}
