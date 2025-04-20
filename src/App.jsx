import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";
import ScrollToTop from "./assets/components/ScrollToTop";
import AppRouter from "./assets/routes/AppRouter";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <ScrollToTop>
          <AppRouter />
        </ScrollToTop>
      </div>
      <Footer />
    </div>
  );
}

export default App;
