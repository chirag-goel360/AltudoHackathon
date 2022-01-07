import React from 'react';
import { Text, Image} from '@sitecore-jss/sitecore-jss-react';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fakeLoader.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';

const Portfolio = (props) => (
<div>
    <div id="portfolio" class="portfolio segments">
        <div class="container">
            <div class="box-content">
                <div class="section-title">
                    <h3><Text field={props.fields.heading}></Text></h3>
                </div>
                
                <div class="row no-gutters filtr-container">
                    <div class="col-md-4 col-sm-12 col-xs-12 filtr-item" data-category="3">
                        <div class="content-image">
                        <Image field={props.fields.image1} editable={true} height="100%" width="100%"></Image>
                                <div class="image-overlay"></div>
                                <div class="portfolio-caption">
                                    <div class="title">
                                        <h4>Classic Minimalist Door</h4>
                                    </div>
                                    <div class="subtitle">
                                        <span>Graphic Design</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12 filtr-item" data-category="1">
                        <div class="content-image">
                        <Image field={props.fields.image2} editable={true} height="100%" width="100%"></Image>
                                <div class="image-overlay"></div>
                                <div class="portfolio-caption">
                                    <div class="title">
                                        <h4>Green Succulent Plants</h4>
                                    </div>
                                    <div class="subtitle">
                                        <span>Nature Plant</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12 filtr-item" data-category="2, 1">
                        <div class="content-image">
                            <Image field={props.fields.image3} editable={true} height="100%" width="100%"></Image>
                                <div class="image-overlay"></div>
                                <div class="portfolio-caption">
                                    <div class="title">
                                        <h4>Yellow Rose Pale Plant</h4>
                                    </div>
                                    <div class="subtitle">
                                        <span>Flower Plant</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12 filtr-item" data-category="3">
                        <div class="content-image">
                        <Image field={props.fields.image4} editable={true} height="100%" width="100%"></Image>
                                <div class="image-overlay"></div>
                                <div class="portfolio-caption">
                                    <div class="title">
                                        <h4>Succulent Plant in Pot</h4>
                                    </div>
                                    <div class="subtitle">
                                        <span>Plant House</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12 filtr-item" data-category="1, 2">
                        <div class="content-image">
                        <Image field={props.fields.image5} editable={true} height="100%" width="100%"></Image>
                                <div class="image-overlay"></div>
                                <div class="portfolio-caption">
                                    <div class="title">
                                        <h4>Photo of Green Cactus</h4>
                                    </div>
                                    <div class="subtitle">
                                        <span>Plant House</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12 filtr-item" data-category="3, 1">
                        <div class="content-image">
                        <Image field={props.fields.image6} editable={true} height="100%" width="100%"></Image>
                                <div class="image-overlay"></div>
                                <div class="portfolio-caption">
                                    <div class="title">
                                        <h4>Two Feet of Two Ferns</h4>
                                    </div>
                                    <div class="subtitle">
                                        <span>Graphic Design</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);

export default Portfolio;
