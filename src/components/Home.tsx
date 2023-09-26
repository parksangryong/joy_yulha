import Header from "./Header";
import Banner from "./Banner";
import Navigation from "./Navigation";
import Event from "./Event";
import Notice from "./Notice";

function Home() {
  return (
    <div id="home">
      <Header />
      <Banner />
      <Navigation />
      <Event />
      <Notice />
    </div>
  );
}

export default Home;
