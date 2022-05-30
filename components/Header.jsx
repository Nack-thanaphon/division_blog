import React, { useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-2 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <h3 className="text-blue-400">คลังความรู้</h3>
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-blue">
              Division Siriraj | Blog
            </span>
          </Link>
          <br />
          <small>ฝ่ายวิศวกรรมบริการและอาคารสถานที่</small>
        </div>
        <div className="hidden md:float-left md:contents">
          {/* {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-primary ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Header;
