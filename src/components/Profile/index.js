import React from 'react';
import { Text, Image, Link } from '@sitecore-jss/sitecore-jss-react';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fakeLoader.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';

const Profile = (props) => (
<div>
<div class="home-intro segments">
<div class="container">
    <div class="intro-content box-content">
        <div class="row justify-content-center">
            <div class="col-md-8 col-sm-12 col-xs-12">
                <div class="intro-caption">
                    <span><Text field={props.fields.profile}></Text></span>
                    <h2><Text field={props.fields.designation}></Text></h2>
                    <button class="button" ><Link field={props.fields.btnlink} /> : )</button>
                </div>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12">
                <div class="intro-image">
                  <Image field={props.fields.image} editable={true} height="100%" width="100%"></Image>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
);

export default Profile;
