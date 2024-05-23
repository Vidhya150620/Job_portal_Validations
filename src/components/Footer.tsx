// import '../components/design.css';
import logoImage from "../assets/images/logo.svg";
import fb from "../assets/images/facebook-icon.png";
import instagram from "../assets/images/instagram-icon.png";
import twitter from "../assets/images/Twitter-X-Blue-Round 1.png";
import linkedIn from "../assets/images/linkedIn-icon.png";
import flipkart from "../assets/images/flipkart.png";
import swiggy from "../assets/images/swiggy.png";

export const Footer = () => {
  return (
    <main className="bg-white">
      <div className="flex w-4/5 mx-auto justify-around p-[35px] max-[1000px]:grid grid-cols-3 gap-6 max-[800px]:grid-cols-2 max-[570px]:grid-cols-1 max-w-[1400px]">
        {/*  */}
        <div>
          <img src={logoImage} alt="Logo" width={150} />
          <div className="flex gap-y-13 mt-13 flex-col footer-main-con">
            <p className="text-justify text-black-600 my-3">Connect with us</p>
            <div className="flex gap-4">
              <img
                src={fb}
                alt="facebook"
                height={30}
                width={30}
                className="object-contain"
              ></img>
              <img
                src={linkedIn}
                alt="linkedIn"
                height={30}
                width={30}
                className="object-contain"
              ></img>
              <img
                src={instagram}
                alt="instagram"
                height={30}
                width={30}
                className="object-contain"
              ></img>
              <img
                src={twitter}
                alt="twitter"
                height={40}
                width={50}
                className="object-contain"
              ></img>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="footer-con flex flex-col gap-[5px]">
          <a href="">Jobs</a>
          <a href="">Companies</a>
          <a href="">About us</a>
          <a href="">Careers</a>
        </div>
        {/*  */}
        <div className="footer-con flex flex-col gap-[5px]">
          <a href="">Report issues</a>
          <a href="">Help center</a>
        </div>
        {/*  */}
        <div className="footer-con flex flex-col gap-[5px]">
          <a href="">Privacy policy</a>
          <a href="">Terms & conditions</a>
        </div>
        {/*  */}
        <div className="footer-con flex flex-col gap-[5px]">
          <a href="">Fraud Alert</a>
          <a href="">Credits</a>
        </div>
      </div>
      <hr className="w-[80%] mx-auto"></hr>
      {/*  */}
      <section>
        <div className="flex gap-4 w-4/5 items-center mx-auto justify-evenly p-[20px] max-w-[1400px] max-[1050px]:flex-wrap">
          <p className="text-GrayFont-600">Our Clients</p>
          <div className="flex gap-6 max-[1050px]:flex-wrap">
            <img src={flipkart} alt="clients" className="object-contain"></img>
            <img src={swiggy} alt="clients" className="object-contain"></img>
            <img src={flipkart} alt="clients" className="object-contain"></img>
            <img src={swiggy} alt="clients" className="object-contain"></img>
            <img src={flipkart} alt="clients" className="object-contain"></img>
            <img src={swiggy} alt="clients" className="object-contain"></img>
            <img src={flipkart} alt="clients" className="object-contain"></img>
            <img src={swiggy} alt="clients" className="object-contain"></img>
            <img src={flipkart} alt="clients" className="object-contain"></img>
            <img src={swiggy} alt="clients" className="object-contain"></img>
            <img src={flipkart} alt="clients" className="object-contain"></img>
            <img src={swiggy} alt="clients" className="object-contain"></img>
            <img src={flipkart} alt="clients" className="object-contain"></img>
          </div>
        </div>
      </section>
    </main>
  );
};
