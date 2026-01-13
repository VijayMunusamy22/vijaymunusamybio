import Header from "./components/header";
import About from "./components/about";
import Experience from "./components/experience";
import Resume from "./components/Resume";
import Contact from "./components/contact";
import Footer from "./components/footer";

import appStyles from "./app.module.css";
import { useState } from "react";


function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  return (
    <>
      <main className={appStyles.appContainer}>
        <Header />
        {!isChatbotOpen && <div className={appStyles.chatbotContainer}>
          <h4>Ask Vijay AI Assistant</h4>
          <span>Get quick answers about my work, skills, and projects</span>
          <input type="text" placeholder="Ask me anything..." onFocus={() => setIsChatbotOpen(true)} />
        </div>}
        <About />
        <Experience />
        <Resume />
        <Contact />
        <Footer />
        <div className={appStyles.chatbot + (isChatbotOpen ? ` ${appStyles.chatbotDisplay}` : ` ${appStyles.chatbotHidden}`)}>
          <span onClick={() => setIsChatbotOpen(false)} className={appStyles.chatCloseBtn}>close</span>
          <iframe
            title="Vijay's Chatbot"
            width="100%"
            height="100%"
            src="https://vijaymunusamy22-vijaymunusamy-chatbot.hf.space"
          ></iframe>
        </div>
      </main>
    </>
  );
}

export default App;
