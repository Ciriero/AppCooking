import AppRoute from "./routes/AppRoute";
import GlobalStyle from "./styles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites";
import IconHome from "./components/IconHome";
import Drawer from "./components/Drawer";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Drawer />
        <IconHome />
        <Routes>
          <Route path="/fav" element={<Favourites />} />
          <Route path="*" element={<AppRoute />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
