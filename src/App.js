import React, { useState } from "react";
import Emojicontainer from "./components/Emojicontainer";
import Header from "./components/Header";
import data from "./json/emoji.json";

function App() {
  const [emojisList, setEmojisList] = useState(data);
  /* const [inputValue, setInputValue] = useState("") */

  const searchEmojis = (e) => {
    console.log(e.target.value);
    let searchedEmojis = data.filter((item) => {
      return item.keywords.includes(e.target.value);
    });
    setEmojisList(searchedEmojis);
  };

  return (
    <div className="App">
      <Header />

      <div style={{ textAlign: "center" }}>
        <input
          style={{ display: "inline-block", width: "30%", padding: "5px" }}
          type="text"
          name="search"
          onChange={searchEmojis}
        />
      </div>

      <Emojicontainer emojisList={emojisList} />
    </div>
  );
}

export default App;
