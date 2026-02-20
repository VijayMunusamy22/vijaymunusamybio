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
        <About />
        <Experience />
        <Resume />
        <Contact />
        <Footer />
      </main>
      
      {/* Floating Action Button - Outside main container */}
      {!isChatbotOpen && (
        <button 
          className={appStyles.fabButton}
          onClick={() => setIsChatbotOpen(true)}
          aria-label="Open AI Assistant Chat"
        >
          <span className={appStyles.fabIcon}>💬</span>
          <span className={appStyles.fabTooltip}>Chat with AI</span>
        </button>
      )}

      {/* Chatbot Window - Outside main container */}
      <div className={appStyles.chatbot + (isChatbotOpen ? ` ${appStyles.chatbotDisplay}` : ` ${appStyles.chatbotHidden}`)}>
        <div className={appStyles.chatbotHeaderBar}>
          <div className={appStyles.chatbotHeader}>
            <span className={appStyles.chatbotIcon}>🤖</span>
            <h4>Vijay AI Assistant</h4>
          </div>
          <button 
            onClick={() => setIsChatbotOpen(false)} 
            className={appStyles.chatCloseBtn}
            aria-label="Close chatbot"
          >
            ✕
          </button>
        </div>
        <div className={appStyles.chatbotContent}>
          <iframe
            title="Vijay's Chatbot"
            width="100%"
            height="100%"
            src="https://vijaymunusamy22-vijaymunusamy-chatbot.hf.space"
            frameBorder="0"
            style={{ display: 'block', border: 'none' }}
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default App;
