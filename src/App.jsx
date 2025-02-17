import "./App.css";
import MainRoutes from "./Routes/MainRouter";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="scroller min-h-screen flex flex-col">
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
