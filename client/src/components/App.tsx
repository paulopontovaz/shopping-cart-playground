import { Outlet } from "react-router";

export const App = () => {
  return (
    <div className="flex flex-col justify-between w-dvw h-dvh">
      <header className=" p-4 flex justify-between items-center border-b shadow-[0_2px_4px_0_rgb(0,0,0,0.05)] bg-[#b5f2ff]">
        <img
          alt="Haiilo Logo"
          className="max-h-12"
          src="/assets/images/logo.png"
        />
        <nav className="flex justify-between gap-4">
          <ul>Home</ul>
          <ul>Back Office</ul>
        </nav>
      </header>
      <section className="p-4 flex-1">
        <Outlet />
      </section>
    </div>
  );
};
