import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Condotest from "@/components/Condotest";
import CondoCardHome from "@/components/CondoCardHome";

export default function Home() {
  return (
   <div>
     <div id="hero">
     <Navbar />
      <div className="container">
        <div className=" hero-container">
         
          <div>
            <h1 className="main-titlee pb-0  mb-0 mt-2 mt-md-0 ">
              UAE's leading Off Plan Property Platform
            </h1>
            <p className="titlee text-center fw-medium mt-0 pt-4 text-white">
            Find 100+ off plan properties in United Arab Emirates
            </p>
            <div className="text-center pt-5">
            <p className="fs-3 fw-normal fw-bold text-white text-center mb-0">Homebaba.ae | Coming Soon</p>
         
          </div>
          </div>
          
        </div>
        
      </div>
    </div>

    <section className="pt-5 mt-5 mx-md-5">
    <div className="d-flex">
   <div className="d-flex flex-column mb-3"> <h2 className="fw-mine   accent-line fs-2 float-start">
            Explore Our Recent Properties
          </h2>
          <p className="">Check out our recent properties for the best deal on homes, condos and commercial spaces.</p></div>
         <div className=" ms-auto">
         <a href="" className="  btn btn-lg btn-outline-secondary">View All</a>
         </div>
    </div>
<div className="row row-cols-md-4 row-col-4">
  <div className="col"><Condotest/></div>
  <div className="col"><Condotest/></div>
  <div className="col"><Condotest/></div>
  <div className="col"><Condotest/></div>
</div>


{/* cities */}

<div className="pt-md-5 mt-md-5">
<div className="d-flex pt-md-5">
   <div className="d-flex flex-column mb-3 "> <h2 className="fw-mine   accent-line fs-2 float-start">
            Explore Properties by City
          </h2>
          <p className="">Uncover Real Estate Marvels in Your Favorite Cities with our Exclusive Listings.
</p></div>
         <div className=" ms-auto">
         <a href="" className="  btn btn-lg btn-outline-secondary">View All</a>
         </div>
    </div>
<div className="row row-cols-md-4 ">
        <div className="col px-3"><img
        src="cities/dubai.webp"
        alt="The Unionville Condos"
        className="img-fluid rounded-mine cityimghei"
      />
       <div class ="img-text"><p class="img-text">Dubai</p></div></div>
     <div className="col px-3"> <img
        src="cities/ajamn.webp"
        alt="The Unionville Condos"
        className="img-fluid rounded-mine cityimghei"
      /> <div class ="img-text"><p class="img-text">Ajman</p></div></div>
       <div className="col px-3"><img
        src="cities/abu-dhabi.webp"
        alt="The Unionville Condos"
        className="img-fluid rounded-mine cityimghei"
      /> <div class ="img-text"><p class="img-text">Abu Dhabi</p></div></div>
     <div className="col px-3"> <img
        src="cities/sharjah.webp"
        alt="The Unionville Condos"
        className="img-fluid rounded-mine cityimghei"
      /> <div class ="img-text"><p class="img-text">Sharjah</p></div></div>
        </div>
</div>

<div className="py-md-5 mt-md-5 ">
<section className="clients section-bg mb-5">
      <div className="container">
        <div
          className="row d-flex justify-content-between align-items-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className=" text-center pb-5">
            <h1 className="pt-5 mt-4 pb-2  fw-bold fs-1 mb-0">
            Trusted Homes from Credible Builders
            </h1>
            <p className="">Building Dreams: Your Trusted Destination for Quality Homes from Credible Builders</p>
          </div>
        <div className="row row-cols-md-4 ">
        <div className="col px-5"><img
        src="/builder1.jpg"
        alt="The Unionville Condos"
        className="img-fluid rounded-mine imghei"
      /></div>
     <div className="col px-5"> <img
        src="/builder1.jpg"
        alt="The Unionville Condos"
        className="img-fluid rounded-mine imghei"
      /></div>
       <div className="col px-5"><img
        src="/builder1.jpg"
        alt="The Unionville Condos"
        className="img-fluid rounded-mine imghei"
      /></div>
     <div className="col px-5"> <img
        src="/builder1.jpg"
        alt="The Unionville Condos"
        className="img-fluid rounded-mine imghei"
      /></div>
        </div>
      </div>
      </div>
    </section>
</div>

    </section>
   </div>
  );
}
