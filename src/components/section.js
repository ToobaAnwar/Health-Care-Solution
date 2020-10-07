import React from 'react';
import SecFooter from './subComponents/secFooter.js';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import f1 from '../img/f1.jpg';
import f2 from '../img/f2.jpg';
import f3 from '../img/f3.jpg';
import f4 from '../img/f4.jpg';

const slider = (
    <AwesomeSlider cssModule={AwsSliderStyles}>
      <div data-src={f1} />
    <div data-src={f2} />
    <div data-src={f3} />
    <div data-src={f4} />
    </AwesomeSlider>
  )
  class Section extends React.Component{
    state = {
        slider,
      }
    render(){
        return(
            <div>
            <section>
            {this.state.slider}
            <SecFooter />
            <section id="aboutCarouselPanel" className="info-panel text slideshow">
        <div className="VueCarousel">
        <div className="VueCarousel-wrapper">
        <div className="VueCarousel-inner" style={{transform: 'translateX(0px)', transition: 'transform 0.5s ease 0s', flexBasis: '1100px', visibility: 'visible'}}>
        <div className="VueCarousel-slide">
        <div className="container -medium">
        <h2 className="heading -huge -light">A little bit about who we are and how it all got started</h2> 
        <p className="no-pad">Fitness club was created by just three people; who thought fitness should be accessible to everyone, regardless of their income. 
        Too many people in the industry were more focused on monetary gain or 
        appearance than they were on good health.</p>
        </div></div> </div></div></div> 
        </section>
        
           </section>
    
            </div>
        )
    }
}


export default Section;