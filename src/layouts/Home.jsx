import { Outlet } from "react-router-dom";
import CategoryNews from "../Pages/CategoryNews";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/layout-components/LeftSidebar";
import RightSidebar from "../components/layout-components/RightSidebar";


const Home = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
      </header>
      <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </section>
      <nav className="py-2 w-11/12 mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto py-2 grid md:grid-cols-12 gap-3">
        <aside className="col-span-3">
          <LeftSidebar></LeftSidebar>
        </aside>
        <section className="col-span-6">
       <Outlet></Outlet>
          </section>
        <aside className="col-span-3">
          <RightSidebar></RightSidebar>
        </aside>
      </main>
     
    </div>
  );
};

export default Home;