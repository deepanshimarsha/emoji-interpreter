import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😂": "Face with Tears of Joy",
  "💀": "Skull",
  "🎉": "Party Popper",
  "😍": "Smiling Face with Heart-Eyes",
  "👀": "Eyes",
  "😉": "Winking Face",
  "👇": "Backhand Index Pointing Down",
  "🤔": "Thinking Face",
  "🥰": "Smiling Face with Hearts",
  "🤩": "Star-Struck",
  "⭐": "Star",
  "😭": "Loudly Crying Face",
  "🥳": "Partying Face",
  "🥺": "Pleading Face",
  "🥲": "Smiling Face with Tear",
  "🤍": "White Heart",
  "🙏": "Folded Hands",
  "🏁": "Chequered Flag",
  "🚩": "Triangular Flag",
  "🎌": "Crossed Flags",
  "🏴": "Black Flag",
  "🏳️‍🌈": "Rainbow Flag",
  "🏳️‍⚧️": "Transgender Flag"
};

var emojisWeKnow = Object.keys(emojiDictionary);

var array = ["milk", "bread", "pizza", "pastries"];

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function getcolor(index) {
    if (index % 2 === 0) {
      return "red";
    }
    return "blue";
  }

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setEmojiMeaning(meaning);
  }

  function clickHandler(item) {
    var meaning = emojiDictionary[item];
    setEmojiMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside outtt!</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{emojiMeaning}</h2>
      <h3>emoji's we know</h3>
      {emojisWeKnow.map(function (item) {
        return (
          <span
            onClick={() => clickHandler(item)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
