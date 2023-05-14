import React from "react";
import { footer } from "../Constant/Footer";
const Footer = () => {
  return (
    <>
      <section className=" flex justify-around flex-col m-16 text-[14px] lg:mx-24 mx-4 md:flex-row ">
        <div className="text-gray-600 py-3 p-3 leading-10">
          <div className="text-white text-[30px] cursor-pointer">
            <i class="mr-4  fa-brands fa-facebook"></i>
            <i class="mr-4 fa-brands fa-instagram"></i>
            <i class="mr-4 fa-brands fa-youtube"></i>
          </div>
          <p className=" cursor-pointer">Audio description</p>
          <p className=" cursor-pointer">Investor relation</p>
          <p className=" cursor-pointer">Legal notice</p>
          <div>
            <button className="border border-white bg-black px-3 my-4 ">
              Service Code
            </button>
            <p className="font-serif">c 1997-2023, inc.</p>
          </div>
        </div>
        <div className="flex py-3 p-3 leading-10 flex-wrap">
          {footer.map((element, index) => {
            return (
              <div
                className={`text-gray-600 md:ml-24 ml-0 ${
                  footer !== index.length - 1 ? "mr-16" : "mr-0"
                }`}
                key={element.id}
              >
                <h1 className="font-serif font-bold">{element.title}</h1>
                <ul className="font-thin cursor-pointer">
                  {element.Links.map((link) => {
                    return <li key={link.Name}>{link.Name}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Footer;
