import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Logo from "../assets/KirsiRalko.png";
import Portrait from "../assets/kirsicircle.png";
import Resume from "../assets/Kirsi Ralko Resume APRIL 2021.pdf";

function About() {
  return (
    <div>
      <Hero>
        <img src={Logo} alt="" style={{ marginTop: 100 }}/>
        {/* <!-- Icon Divider--> */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-power-off"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
        <h3>Lawyer - Entrepreneur - Full Stack Developer</h3>
      </Hero>
      <Container style={{ marginTop: 30 }}>
      <Row>
          <Col size="md-12">
            {/* <!-- About Section Heading--> */}
          <h2 class="page-section-heading text-center text-uppercase">About</h2>
              {/* <!-- Icon Divider--> */}
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
          </div>

              {/* <!-- About Section Content--> */}
            <div class="row">
             <img src={Portrait} class="mx-auto d-block" alt=""/>
            </div>

          <div class="row">
            <div class="col-lg-4 ml-auto"> 
              <p class="lead">Hi, I'm Kirsi: lawyer, lover of all things business-related, and full stack developer. I turn coffee into code.</p>
            </div>
            <div class="col-lg-4 mr-auto">   
              <p class="lead">I'm excited to work on your next project using HTML, CSS, Javascript, SQL, Express, Handlebars & more. </p>
            </div>
          </div>

            {/* <!-- About Section Button--> */}
          
        <div class="text-center mt-4">
          <a class="btn btn-xl btn-outline-dark" href={Resume}>
            <i class="fas fa-download mr-2"></i>
            Download Resume
          </a>
        </div>

          </Col>
        </Row>
        {/* <Row>
          <Col size="md-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
              consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
              sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
              gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin
              turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas
              tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
              quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet,
              volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque
              mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum
              tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis.
            </p>

          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default About;
