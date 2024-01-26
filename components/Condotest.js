import Image from "next/image";
import Link from "next/link";

const condotest = () => {
  return (
    <div className="row">
    <div className="afte-proj">
      <img
        src="/house1.webp"
        alt="The Unionville Condos"
        className="img-fluid rounded-mine imghei"
      />
      <div className=" card">
        <p className="mb-0 fw-bold">Central District Towns</p>
        <p className="mb-0 tet-s">770 Kingston Road, Pickering, ON</p>
        <p className="mb-0 tet-s">Move in Est. Spring 2024</p>
        <p className="mb-0 tet-s">Developed by: Towerhill Homes</p>
        <p className="mb-0 tet-s">No of units: 0</p>
      </div>
    </div>
  </div>
  );
};

export default condotest;
