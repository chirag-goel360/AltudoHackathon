import React from 'react';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fakeLoader.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';

const ContactMe = (props) => (
  <div>
<div id="contact" class="contact segments">
        <div class="container">
            <div class="box-content">
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="content-left">
                            <div class="section-title section-title-left">
                                <h3><Text field={props.fields.heading}></Text></h3>
                            </div>
                            <h2><Text field={props.fields.maintext}></Text></h2>
                            <ul>
                                <li>
                                    <a><Link field={props.fields.facebook} /><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a><Link field={props.fields.twitter} /><i class="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a><Link field={props.fields.dribble} /><i class="fab fa-dribbble"></i></a>
                                </li>
                                <li>
                                    <a><Link field={props.fields.google} /><i class="fab fa-google"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="content-right">
                            <form action="" class="contact-form" id="contact-form" method="post">
                                <div class="row">
                                    <div class="col">
                                        <div id="first-name-field">
                                            <input type="text" placeholder="First Name" class="form-control" name="form-name" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div id="last-name-field">
                                            <input type="text" placeholder="Last Name" class="form-control" name="form-name" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div id="email-field">
                                            <input type="email" placeholder="Email Address" class="form-control" name="form-email" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div id="subject-field">
                                            <input type="text" placeholder="Subject" class="form-control" name="form-subject" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div id="message-field">
                                            <textarea cols="30" rows="5" class="form-control" id="form-message" name="form-message" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button class="button" type="submit" id="submit" name="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
);

export default ContactMe;
