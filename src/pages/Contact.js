import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Logo from "../assets/KirsiRalko.png";

function Contact() {
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
          <div>
                {/* <!-- Contact Section Heading--> */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- Contact Section Form--> */}
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center">

                        {/* <!-- <h5><a class="btn btn-outline-dark disabled btn-social mx-1" href="" target="_blank"><i class="fas fa-mobile-alt"></i></a> (807) 464-0687</h5>
                        <h5><a class="btn btn-outline-dark disabled btn-social mx-1" href="" target="_blank"><i class="fas fa-envelope"></i></a> kirsiralko@gmail.com</h5> --> */}

                        <table class="table table-borderless">
                          <tr>
                          <td class="td-right"><a class="btn btn-outline-dark disabled btn-social mx-1" href=""><i class="fas fa-mobile-alt"></i></a></td>
                            <td class="td-left"><h5><a href="tel:807-464-0687">(807) 464-0687</a></h5></td>
                          </tr>

                          <tr>
                            <td class="td-right"><a class="btn btn-outline-dark disabled btn-social mx-1" href=""><i class="fas fa-envelope"></i></a></td>
                            <td class="td-left"><h5><a href="mailto:kirsiralko@gmail.com?subject=Portfolio">kirsiralko@gmail.com</a></h5></td>
                          </tr>

                          <tr>
                            {/* <td class="one-third"><a class="btn btn-outline-dark disabled btn-social mx-1" href=""><i class="fab fa-linkedin"></i></a></td> */}
                            <td class="td-right"><a class="btn btn-outline-dark disabled btn-social mx-1" href=""><i class="fab fa-github"></i></a></td>
                            {/* <td class="one-third"><h4><i class="fab fa-github"></i></h4></td> */}
                            <td class="td-left"><h5><a href="https://github.com/kirsralk" target="_blank">GitHub</a></h5></td>
                          </tr>

                          <tr>
                            <td class="td-right"><a class="btn btn-outline-dark disabled btn-social mx-1" href=""><i class="fab fa-linkedin"></i></a></td>
                            <td class="td-left"><h5><a href="https://www.linkedin.com/in/kirsi-ralko/" target="_blank">Linkedin</a></h5></td>
                        </tr>
                        </table>
                        
                    </div>
                </div>
            </div>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
