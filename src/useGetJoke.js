import { useState } from "react";

function useGetJoke() {
  const [textData, setTextData] = useState(null);

  async function fetchTextData() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setTextData(data.value);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const reFetch = () => {
    fetchTextData();
  };

  return [textData, reFetch];
}

export default useGetJoke;
