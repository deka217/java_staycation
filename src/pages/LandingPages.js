import React, { Component } from "react";
// import second from 'elements/Button/'
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from 'parts/Footer'


import landingPage from "json/landingPage.json";
export default class LandingPages extends Component {
  /*ES6 syntax (...this.props)spreat operator*/
  /*consttructor untuk jalan paling pertama*/
   constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
   }
  render() {
    // const { page } = this.props;

    // if (!page.hasOwnProperty("landingPage")) return null;

    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}></Hero>
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
        <Testimony data={landingPage.testimonial}/>
        <Footer/>
      </>
    );
  }
}
