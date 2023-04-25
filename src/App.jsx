import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: inputValue,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch("http://localhost:8000/chat", options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="app">
        <div className="side-bar">
          <button>+ New chat</button>
          <ul className="history"></ul>
          <nav>
            <p>Made by Andreas</p>
          </nav>
        </div>
        <main className="main">
          <h1>AMS GPT</h1>
          <div className="bottom-section">
            <div className="input-container">
              <input
                type="text"
                value={inputValue}
                className="input"
                onChange={handleInputChange}
              />
              <button onClick={getMessages} id="submit">
                Send
              </button>
              <p className="info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur accusamus ad quam doloremque debitis laudantium
                dolorem illum vel eum nobis autem, animi natus neque explicabo!
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
