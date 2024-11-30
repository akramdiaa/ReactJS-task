import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { BackgroundProvider } from "./components/navbar/usersetting/backgroundlogic/BackgroundContext";

import "./styles/styles.scss";

function App() {
  return (
    <BackgroundProvider>
      <Navbar />
      <Body />
      <Footer />
    </BackgroundProvider>
  );
}

export default App;
