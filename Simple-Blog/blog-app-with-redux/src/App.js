import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      {/* <!-- navigation --> */}
      <Navigation />

      {/* <!-- search --> */}
      <Search />

      <BlogList />

      {/* <!-- footer --> */}
      <Footer />
    </div>
  );
}

export default App;
