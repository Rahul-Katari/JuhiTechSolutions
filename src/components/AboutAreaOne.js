import React from "react";

const AboutAreaOne = () => {
  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}
      <div className='about-area pd-top-120' id="about">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                className='about-thumb-inner pe-xl-5 me-xl-5 '
                data-aos='fade-right'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <img
                  className='animate-img-1 top_image_bounce'
                  src='assets/img/about/2.png'
                  alt='img'
                />
                <img
                  className='animate-img-2 left_image_bounce'
                  src='assets/img/about/3.png'
                  alt='img'
                />
                <img
                  className='animate-img-3 top_image_bounce'
                  src='assets/img/banner/5.svg'
                  alt='img'
                />
                <img
                  className='main-img'
                  src='assets/img/about/32.png'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6 '
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                <h6 className='sub-title'>ABOUT US</h6>
                <h2 className='title'>
                  JuhiTech Solutions - <br></br> your one-stop destination for all your IT needs!
                  {/* It Is A Critical Component Of <span>Modern</span> Businesses */}
                </h2>
                <p className='content mb-4 mb-xl-5'>
                  Our commitment to delivering exceptional consultancy services has resulted in a growing list of satisfied clients across various industries
                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='single-about-inner'>
                      <div className='thumb mb-3'>
                        <img src='assets/img/icon/2.png' alt='img' />
                      </div>
                      <div className='details'>
                        <h5>Our Vision</h5>
                        <p>
                          It is our vision to be recognized as one of the premier providers of ERP Consulting Services by delivering quality solutions to clients with our cost effective model.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-about-inner'>
                      <div className='thumb mb-3'>
                        <img src='assets/img/icon/3.png' alt='img' />
                      </div>
                      <div className='details'>
                        <h5>Our Mission</h5>
                        <p>
                          To become a globally acclaimed Information Technology Services company by delivering exceptional IT Services in Endeavouring towards becoming an admired company.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutAreaOne End  ==================*/}
    </>
  );
};

export default AboutAreaOne;
