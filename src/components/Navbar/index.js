import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fakeLoader.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';

const Navbar = (props) => (
<div>
    <header id="home">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <a href="#" class="navbar-brand">
                    <h2><Text field={props.fields.heading}></Text></h2>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo" aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarTogglerDemo" class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a href="#home" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#about" class="nav-link">About</a>
                        </li>
                        <li class="nav-item">
                            <a href="#resume" class="nav-link">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a href="#portfolio" class="nav-link">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a href="#blog" class="nav-link">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact" class="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</div>
);

export default Navbar;