
import { useState } from "react";
import "./index.css";

function App() {
  const [message, setMessage] = useState("");

  return (
    <main className="app">
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <section className="chat-container">
        <header className="topbar">
          <div className="brand">
            <div className="brand-icon">✦</div>
            <div>
              <h2>Nova AI</h2>
              <p>Your intelligent assistant</p>
            </div>
          </div>

          <div className="status">
            <span></span> Online
          </div>
        </header>

        <div className="chat-body">
          <div className="welcome">
            <div className="welcome-icon">✧</div>

            <p className="eyebrow">YOUR AI COMPANION</p>

            <h1>
              What can I help
              <br />
              you <span>create?</span>
            </h1>

            <p className="welcome-text">
              Ask anything, explore ideas, or start something amazing.
            </p>
          </div>
        </div>

        <footer className="chat-footer">
          <div className="input-area">
            <input
              type="text"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              className="send-button"
              type="button"
              aria-label="Send message"
            >
              ↗
            </button>
          </div>

          <p className="footer-note">
            ✦ <span>Nova AI</span> can make mistakes. Explore with curiosity.
          </p>
        </footer>
      </section>
    </main>
  );
}

export default App;