import { logo } from "@/assets";
import { useTranslations } from "@/hooks/useTranslations";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

function Footer(homePageStyle: string) {
  const { lang } = useParams();
  const t = useTranslations();
  const pathName = useLocation();
  return (
    <div className={`${homePageStyle} bg-[#e8eff8d8] py-10`}>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 max-lg:px-2">
        {/* page links part */}
        <div className="flex flex-wrap min-[770px]:gap-2 gap-5 items-center min-[770px]:justify-between justify-center">
          <img src={logo} width={150} />
          <div className="flex flex-wrap items-center justify-center gap-5 px-1">
            <NavLink
              to={""}
              className={({ isActive }) =>
                `hover:text-lightBlue rounded-[10px] p-2 px-4 text-center text-[16px] font-semibold ${isActive && pathName.pathname === "/uz" ? "bg-[#ffffff] text-[#38549b] shadow-[0px_1px_10px_#77767679]" : "text-[#727886]"}`
              }
            >
              {t.navbar.home}
            </NavLink>

            <NavLink
              to={`/${lang}/products`}
              className={({ isActive }) =>
                `hover:text-lightBlue rounded-[10px] p-2 px-4 text-[16px] font-semibold ${isActive ? "bg-[#ffffff] text-[#38549b] shadow-[0px_1px_10px_#77767679]" : "text-[#727886]"}`
              }
            >
              {t.navbar.products}
            </NavLink>
            <NavLink
              to={`/${lang}/about`}
              className={({ isActive }) =>
                `hover:text-lightBlue rounded-[10px] p-2 px-4 text-[16px] font-semibold ${isActive ? "bg-[#ffffff] text-[#38549b] shadow-[0px_1px_10px_#77767679]" : "text-[#727886]"}`
              }
            >
              {t.navbar.about}
            </NavLink>
            <NavLink
              to={`/${lang}/contact`}
              className={({ isActive }) =>
                `hover:text-lightBlue rounded-[10px] p-2 px-4 text-[16px] font-semibold ${isActive ? "bg-[#ffffff] text-[#38549b] shadow-[0px_1px_10px_#77767679]" : "text-[#727886]"}`
              }
            >
              {t.navbar.contact}
            </NavLink>
          </div>
        </div>

        {/* gray line */}
        <div className="h-[1px] w-full bg-[#9B9B9B]"></div>

        {/* privicy police and buttons to social networks */}
        <div className="flex flex-wrap gap-5 items-center min-[590px]:justify-between justify-center">
          <p className="text-[16px] font-semibold text-[#9B9B9B]">
            Featured by Saidoff.group
          </p>
          <p className="text-[16px] font-semibold text-[#9B9B9B]">
            © 2024 Chere Water
          </p>
          <div className="flex items-center gap-6">
            <Link to={""} className="text-[#1A367C]">
              <FaTelegram size={30}/>
            </Link>
            <Link to={""} className="text-[#1A367C]">
              <FaInstagram size={30}/>
            </Link>
            <Link to={""} className="text-[#1A367C]">
              <FaFacebook  size={30}/>
            </Link>
            <Link to={""} className="text-[#1A367C]">
              <TfiEmail size={30}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
