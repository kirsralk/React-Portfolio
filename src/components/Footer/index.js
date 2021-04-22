import React from "react";
import "./style.css";

function Footer() {
  return (
        <footer class="footer text-center">
            <div class="container">
                <div class="row justify-content-center">
                    {/* <!-- Footer Location--> */}
                    {/* <!-- <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                            <i class="fas fa-map-marker-alt"></i> Kenora, ON
                        </p>
                    </div> --> */}
                    {/* <!-- Footer Social Icons--> */}
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Around the Web</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/kirsi-ralko/" target="_blank"><i class="fab fa-fw fa-linkedin-in"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/kirsralk" target="_blank"><i class="fab fa-fw fa-github"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://angel.co/u/kirsi-ralko" target="_blank"><i class="fab fa-fw fa-angellist"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://lso.ca/public-resources/finding-a-lawyer-or-paralegal/directory-search/members/lawyer/014/kirsi-hanna-ralko" target="_blank"><i class="fas fa-balance-scale"></i></a>
                    </div>
                    {/* <!-- Footer About Text--> */}
                </div>
            </div>
        </footer>
  );
}

export default Footer;
