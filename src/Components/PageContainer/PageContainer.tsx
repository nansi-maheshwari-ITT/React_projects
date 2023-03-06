import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../Screens/HomeScreen/Index";
import About from "../../Screens/AboutScreen/Index";
import Achievements from "../../Screens/AchievementScreen/Index";
import Contact from "../../Screens/ContactScreen/Index";
const PageContainer = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}></Route>
        <Route path="achievements" element={<Achievements />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>

      <Footer></Footer>
    </Router>
  );
};

export default PageContainer;
