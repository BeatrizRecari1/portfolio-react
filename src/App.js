import "./assets/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Trident from "./components/Trident";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="parent-container">
      <Header />
      <Trident />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
