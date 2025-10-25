import Header from "./components/header";
import About from "./components/about";
import Experience from "./components/experience";
import Resume from "./components/Resume";
import Contact from "./components/contact";
import Footer from "./components/footer";

import appStyles from "./app.module.css";


function App() {
  return (
    <>
      <main className={appStyles.appContainer}>
        
        <Header />
        <About />
        <Experience />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
