import { Link, NavLink, useParams } from "react-router-dom";

function Navbar() {
  const { lang } = useParams();

  return (
    <div className="bg-[#fff0] absolute z-10 top-0 left-0 w-full ">
      <nav className="p-4">
        <div className="main-container flex items-center justify-between bg-none">
          <Link to="" className="text-2xl font-bold">
            Tadbirkorlar
          </Link>
          <ul className="flex space-x-6 backdrop-saturate-200 rounded-2xl  ">
            <li>
              <NavLink to={''} className="hover:text-lightBlue">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${lang}/about`} className="hover:text-lightBlue">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${lang}/events`} className="hover:text-lightBlue">
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${lang}/news`} className="hover:text-lightBlue">
                News
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${lang}/contacts`} className="hover:text-lightBlue">
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
