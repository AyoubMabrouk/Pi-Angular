import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  ngOnInit() {
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active')
    })
    // ...
    fetch('https://ayoub-mabrouk-python-flask.onrender.com/hello') .then(response => console.log("hello Site fetched"))
  }


  userSignIOut() {
    window.localStorage.clear()
    window.location.href = '/login';
  }
  scrollToSection() {
    // Use either document.body or document.documentElement, depending on the browser
    const body = document.body || document.documentElement;

    // Scroll to the top of the page
    body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
