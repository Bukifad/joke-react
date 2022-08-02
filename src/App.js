import "./App.css";
import Joke from "./components/Joke";

function App() {
  return (
    <div>
      <Joke
        setup="i got my daughter a fridge for her birthday."
        punchline="i cant't wait to see her face light up when she sees it"
      />
      <Joke
        setup="how did the hacker escape the police?"
        punchline="he just ransomware"
      />
      <Joke
        setup="why dont pirates travel on mountain roads?"
        punchline="scurvy"
      />
      <Joke
        setup="wny do bees stay in the have in the winter"
        punchline="swarm"
      />
      <Joke setup="what's the best thing about switzerland" punchline="" />
    </div>
  );
}

export default App;
