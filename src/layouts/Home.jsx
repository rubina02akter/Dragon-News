import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/layout-components/LeftSidebar";


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
        <section className="col-span-6">main content</section>
        <aside className="col-span-3">right content</aside>
      </main>
     
    </div>
  );
};

export default Home;