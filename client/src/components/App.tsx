import { NavLink, Outlet } from "react-router";

export const App = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <header className=" p-4 flex justify-between items-center border-b shadow-[0_2px_4px_0_rgb(0,0,0,0.05)] bg-[#b5f2ff]">
        <img
          alt="Haiilo Logo"
          className="max-h-12"
          src="/assets/images/logo.png"
        />
        <nav>
          <ul className="flex justify-between gap-4">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `hover:underline hover:cursor-default ${isActive ? "font-bold" : ""}`
                }
                data-testid="home-link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `hover:underline hover:cursor-default ${isActive ? "font-bold" : ""}`
                }
                data-testid="back-office-link"
                to="/back-office"
              >
                Back Office
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className="p-4 flex-1">
        <Outlet />
      </section>
    </div>
  );
};
