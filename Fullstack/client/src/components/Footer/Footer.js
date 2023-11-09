import React, { memo } from "react";
import { icons } from "utils/icons";

const Footer = () => {
  const { BiLogoFacebook, AiOutlineGooglePlus, FaLinkedinIn } = icons;
  return (
    <footer className="mt-5 bg-feature w-full ">
      <div className="w-main my-0 mx-auto py-5 text-hover">
        <div className="grid grid-cols-4 gap-5 ">
          <div>
            <h1 className="text-xl font-semibold mb-5">About Us</h1>
            <div className="text-sm">

              <p className="my-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
                aspernatur!
              </p>
            </div>
            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/nguyenngocduong229/"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-feature border text-lg"
              >
                <BiLogoFacebook />
              </a>
              <a
                href="mailto: nguyenngocduong220901@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-feature border text-lg"
              >
                <AiOutlineGooglePlus />
              </a>
              <a
                href="https://www.linkedin.com/in/duongnguyen2209/"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-feature border text-lg"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-5">Purchase Policy</h1>
            <div className="text-sm">
              <p className="mb-1">Lorem ipsum dolor sit amet</p>
              <p className="mb-1">Lorem ipsum dolor sit amet</p>
              <p className="mb-1">Lorem ipsum dolor sit amet</p>

            </div>
          </div>

          <div>
            <h1 className="text-xl font-semibold mb-5">Support</h1>
            <div className="text-sm">
              <p className="mb-1">Lorem ipsum dolor sit amet</p>
              <p className="mb-1">Lorem ipsum dolor sit amet</p>
              <p className="mb-1">Lorem ipsum dolor sit amet</p>

            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-5">Store</h1>
            <div className="text-sm">
              <p className="mb-1">Lorem ipsum dolor sit amet</p>
              <p className="mb-1">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <p className="text-center mt-5 text-sm">
          © 2023 TechShop. |{" "}
          <a
            href="https://www.facebook.com/nguyenngocduong229/"
            className="text-black"
          >
            {" "}
            DuongNguyen
          </a>
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
