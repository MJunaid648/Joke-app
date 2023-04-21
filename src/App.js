import "./App.css";
import useGetJoke from "./useGetJoke";

function App(className = "App") {
  const [joke, getJoke] = useGetJoke();
  
  return (
    <div className="App">
      <button className="fetchBtn" onClick={() => getJoke()}>Get another joke</button>
      {joke}
      
    </div>
  );
}

export default App;
