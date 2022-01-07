import React from 'react';
import { Text, RichText, Image } from '@sitecore-jss/sitecore-jss-react';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fakeLoader.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';

const AboutMe = (props) => (
<div>
<div id="about" class="about segments">
    <div class="container">
        <div class="box-content">
            <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class="content-left">
                        <div class="section-title section-title-left">
                            <h3><Text field={props.fields.heading}></Text></h3>
                        </div>
                        <div class="content">
                            <h3><Text field={props.fields.title}></Text></h3>
                            <p><RichText field={props.fields.description}></RichText></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12">
                    <Image field={props.fields.image} editable={true} height="100%" width="100%"></Image>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
);

export default AboutMe;
