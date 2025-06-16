import { useRef, useState } from "react";
import axios from "axios";
import WeatherCard from "./components/weatherCard";

function App() {
  const [weather, setWeather] = useState();
  const [input, setInput] = useState();
  const [loading, setLoading] = useState(false);

  async function getWeather() {
    const city = input;

    const lang = "pt_br"; //lingua
    const unit = "metric"; //unidade medida
    const key = "f828b9c0e6b966d30fb24b482bf3b7e0"; //chave api
    console.log(loading)
    try {
      setLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&lang=${lang}&units=${unit}`;
      const dataApi = await axios.get(url);
      setWeather(dataApi.data);
      setInput("");
    } catch (error) {
      console.log("erro obter dados api: ", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <div className="font-roboto pt-10">
        <h1 className="font-bold text-white text-5xl">Previsão do Tempo</h1>
        <div className="flex place-content-center pt-5">
          <input
            className="p-2 rounded-l-full outline-none text-gray-500 pl-3"
            type="text"
            placeholder="digite o nome da cidade "
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            disabled={loading}
            className="bg-orange-400 p-2 rounded-r-full disabled:bg-red-100"
            onClick={getWeather}
          >
            Buscar
          </button>
        </div>
        {weather && <WeatherCard weather={weather} />}
      </div>
    </>
  );
}

export default App;
