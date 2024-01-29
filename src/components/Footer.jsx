import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <section className="ftr">
    <div className="ftrtop">
        <img src="" width="100%" alt="" />
    </div>
    <div className="container">
        <div className="row">
            <div className="col-6 pb-5 ps-0 pe-0">
                <div className="d-flex">
                    <div className="col-6">
                        <div className="ftimg pt-5">
                            <img src="favicon.png" alt="" />
                        </div>
                        <p className="text-light pt-4">
                            Followers
                        </p>
                        <div className="fionc d-flex text-center m-auto">
                            <div className="icon border rounded-circle border-light">
                                <img src="s_media_1.png" alt="" />
                            </div>
                            <div className="icon border rounded-circle border-light">
                                <img src="s_media_2.png" alt="" />
                            </div>
                            <div className="icon border rounded-circle border-light">
                                <img src="s_media_3.png" alt="" />
                            </div>
                            <div className="icon border rounded-circle border-light">
                                <img src="s_media_4.png" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="col-6">
                        <h3 className="f_title fs-2 pt-5 pb-3">
                            About React.js
                        </h3>
                        <p className="ftrpar r_intro">
                        As its official tagline states, React is a library for building user interfaces. React is not a framework, it's not even exclusive to the web. It's used with other libraries to render to certain environments. For instance, React Native can be used to build mobile applications.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-6 ps-0 pe-0">
                <div className="d-flex">
                    <div className="col-4 ms-5">
                        <h3 className="f_title fs-2 pt-5 ps-3 pb-3">
                            link
                        </h3>
                        <ul className="ftrlist ms-1 pb-4">
                            <li><a href=''>Home </a></li>
                            <li><a href=''>About Us</a></li>
                            <li><a href=''>Overview</a></li>
                            <li><a href=''>Rendering</a></li>
                            <li><a href=''>Routing</a></li>
                            <li><a href=''>Handeling</a></li>
                            <li><a href=''>FAQ's</a></li>
                            <li><a href=''>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h3 className="f_title fs-2 pt-5 pb-3">
                            Address
                        </h3>
                        <p className="ftrpar">
                            Bhargav Empire, beside Vellocity Hub, Adajan – Paal Road, Paal, Surat.
                        </p>
                    </div>
                    <div className="col-4 ps-4">
                        <h3 className="f_title fs-2 pt-5 pb-3">
                            Phone
                        </h3>
                        <p className="ftrpar">
                            +91 98989 65659
                        </p>
                        <p className="ftrpar">
                            +91 98989 65659
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </section>
  )
}

export default Footer

