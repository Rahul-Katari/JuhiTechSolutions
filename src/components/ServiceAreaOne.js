import React from "react";
import { FaPlus } from "react-icons/fa";
import serviceList from "../scripts/serviceList";
import Link from "next/link";

const ServiceAreaOne = () => {
  return (
    <>
      {/*=================== service area start ===================*/}
      <div className='service-area bg-relative pd-top-100' id="service">
        <img
          className='position-bottom-left top_image_bounce'
          src='assets/img/icon/4.png'
          alt='img'
        />
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>CREATIVE SERVICES</h6>
            <h2 className='title'>
              Your Partner In <span>Digital</span> Success
            </h2>
          </div>
          <div className='row'>
            {serviceList.map((data, index) => (
              <div className='col-lg-4 col-md-6' key={index}>
                <div className="h-100 pb-5">
                  <div className='single-service-inner text-center'>
                    <div className='thumb d-flex justify-content-center'>
                      <img src={data.img} alt='img' />
                    </div>
                    <div className='details'>
                      <h5>
                        <Link href='#'>{data.title}</Link>
                      </h5>
                      <p>{data.des}</p>
                      {/* <Link className='btn btn-border-base' href='/service-details'>
                      Touch More <FaPlus />
                    </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaOne;
