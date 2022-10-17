import React, { Component } from "react";
import Fade from "react-reveal/Fade";
// import { connect } from "react-redux";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
// import FeaturedImage from "parts/FeaturedImage";
// import PageDetailDescription from "parts/PageDetailDescription";
// import BookingForm from "parts/BookingForm";
// import Activities from "parts/Activities";
// import Testimony from "parts/Testimony";
// import Footer from "parts/Footer";

import ItemDetail from "json/itemDetail.json";

// import { checkoutBooking } from "store/actions/checkout";
// import { fetchPage } from "store/actions/page";

// class DetailsPage extends Component {
export default class DetailPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={ItemDetail}
        ></PageDetailTitle>
        <FeaturedImage data={ItemDetail.imageUrls}></FeaturedImage>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription
                  data={ItemDetail}
                ></PageDetailDescription>
              </Fade>
            </div>
            <div className="col-5">
              <fade bottom>
                <BookingForm itemDetails={ItemDetail}></BookingForm>
              </fade>
            </div>
          </div>
        </section>

        <Categories data={ItemDetail.categories}></Categories>
        <Testimony data={ItemDetail.testimonial} />
        <Footer />
      </>
    );
  }
}
