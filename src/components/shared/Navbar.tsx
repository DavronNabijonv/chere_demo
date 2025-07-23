import { logo } from "@/assets";
import { useTranslations } from "@/hooks/useTranslations";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const { lang } = useParams();
  const t = useTranslations();
  const pathName = useLocation();
  const navigate = useNavigate();

  // togle variable
  const [btn, setBtn] = useState<string>("uz");
  const [tog, setTog] = useState<boolean>(false);

  // change language function
  const handleChangeLang = (value: string) => {
    setBtn(value);
    const segments = pathName.pathname.split("/");
    segments[1] = value;
    const newPath = segments.join("/");
    navigate(newPath);
  };

  return (
    <div className="absolute top-0 left-0 z-10 w-full bg-[#fff0]">
      <nav className="py-3 px-2 min-[1100px]:p-4">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between bg-none px-2">
          {/* phone format */}

          {/* open icon */}
          <div
            className="hidden cursor-pointer flex-col items-center gap-[6px] max-lg:flex"
            onClick={() => setTog(!tog)}
          >
            <div
              className={`h-[0.12rem] w-[0.8rem] rounded-[100px] bg-black duration-[0.4s]`}
            ></div>
            <div
              className={`h-[0.12rem] w-[2rem] bg-black duration-[0.4s]`}
            ></div>
            <div
              className={`h-[0.15rem] w-[0.8rem] rounded-[100px] bg-black duration-[0.4s]`}
            ></div>
          </div>

          <div
            className={`fixed top-20 z-10 transition-transform right-0 duration-300 max-w-[300px] w-full  ${
              tog ? " mx-2 translate-x-0" : " translate-x-full"
            }`}
          >
            <div className="flex flex-col max-w-[400px] w-full py-8 items-center justify-center gap-5 rounded-[20px] border-1 border-white bg-[#ffffffd8] px-1 shadow-[0px_1px_10px_#77767679] backdrop-saturate-200 ">
              <NavLink
                to={""}
                className={({ isActive }) =>
                  `hover:text-lightBlue rounded-[100px] p-2 px-4 text-center text-[16px] font-semibold ${isActive && pathName.pathname === "/uz" ? "bg-[#ffffff] text-[#38549b] shadow-[0px_1px_10px_#77767679]" : "text-[#727886]"}`
                }
              >
                {t.navbar.home}
              </NavLink>

              <NavLink
                to={`/${lang}/products`}
                className={({ isActive }) =>
                  `hover:text-lightBlue rounded-[100px] p-2 px-4 text-[16px] font-semibold ${isActive ? "bg-[#ffffff] text-[#38549b] shadow-[0px_1px_10px_#77767679]" : "text-[#727886]"}`
                }
              >
                {t.navbar.products}
              </NavLink>
              <NavLink
                to={`/${lang}/about`}
                className={({ isActive }) =>
                  `hover:text-lightBlue rounded-[100px] p-2 px-4 text-[16px] font-semibold ${isActive ? "bg-[#ffffff] text-[#38549b] shadow-[0px_1px_10px_#77767679]" : "text-[#727886]"}`
                }
              >
                {t.navbar.about}
              </NavLink>
              <NavLink
                to={`/${lang}/contact`}
                className={({ isActive }) =>
                  `hover:text-lightBlue rounded-[100px] p-2 px-4 text-[16px] font-semibold ${isActive ? "bg-[#ffffff] text-[#38549b] shadow-[0px_1px_10px_#77767679]" : "text-[#727886]"}`
                }
              >
                {t.navbar.contact}
              </NavLink>
              <button className="flex items-center gap-3 rounded-[100px] border-2 border-white bg-linear-to-r from-[#1A367C] to-[#AF8C4B] p-2 px-3 text-[16px] text-white">
                {t.buttons.order} <FaArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* above code is phone format navbar */}

          {/* logo */}
          <Link to="" className="text-2xl font-bold">
            <img src={logo} width={100} />
          </Link>

          {/* main links */}
          <ul className="hidden items-center justify-between space-x-6 rounded-[100px] border-1 border-white bg-[#ffffff86] px-1 py-2 shadow-[0px_1px_10px_#77767679] backdrop-saturate-200 min-lg:flex">
            <li>
              <NavLink
                to={""}
                className={({ isActive }) =>
                  `hover:text-lightBlue rounded-[100px] p-2 px-4 text-[16px] font-semibold ${isActive && pathName.pathname === "/uz" ? "bg-[#ffffff] text-[#38549b] shadow-[0px_1px_10px_#77767679]" : "text-[#727886]"}`
                }
              >
                {t.navbar.home}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${lang}/products`}
                className={({ isActive }) =>
                  `hover:text-lightBlue rounded-[100px] p-2 px-4 text-[16px] font-semibold ${isActive ? "bg-[#ffffff] text-[#38549b] shadow-[0px_1px_10px_#77767679]" : "text-[#727886]"}`
                }
              >
                {t.navbar.products}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${lang}/about`}
                className={({ isActive }) =>
                  `hover:text-lightBlue rounded-[100px] p-2 px-4 text-[16px] font-semibold ${isActive ? "bg-[#ffffff] text-[#38549b] shadow-[0px_1px_10px_#77767679]" : "text-[#727886]"}`
                }
              >
                {t.navbar.about}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${lang}/contact`}
                className={({ isActive }) =>
                  `hover:text-lightBlue rounded-[100px] p-2 px-4 text-[16px] font-semibold ${isActive ? "bg-[#ffffff] text-[#38549b] shadow-[0px_1px_10px_#77767679]" : "text-[#727886]"}`
                }
              >
                {t.navbar.contact}
              </NavLink>
            </li>
          </ul>

          {/* contact and language tegs */}
          <div className="flex items-center justify-center gap-2">
            {/* contact */}
            <button className="hidden items-center gap-3 rounded-[100px] border-2 border-white bg-linear-to-r from-[#1A367C] to-[#AF8C4B] p-2 px-3 text-[16px] text-white min-lg:flex">
              {t.buttons.order} <FaArrowRight size={16} />
            </button>

            {/* language */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleChangeLang("uz")}
                className={` ${btn === "uz" ? "text-[#DDAE57]" : "text-[#8996A6]"} text-[18px] font-normal`}
              >
                Uzb
              </button>
              <div className="h-[30px] w-[2px] bg-[#DDAE57]"></div>
              <button
                onClick={() => handleChangeLang("ru")}
                className={`${btn === "ru" ? "text-[#DDAE57]" : "text-[#8996A6]"} text-[18px] font-normal`}
              >
                Rus
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
      onClick={()=>setTog(false)}
        className={`fixed top-0 -z-10 h-[100%] w-[100%] bg-[#f5f2f204] ${tog ? "flex" : "hidden"}`}
      ></div>
    </div>
  );
}

export default Navbar;
