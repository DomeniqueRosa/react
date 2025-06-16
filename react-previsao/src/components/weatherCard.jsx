export default function WeatherCard({ weather }) {
  console.log(weather);

  return (
    <div>
      {weather ? (
        <div>
          <h1 className="font-roboto">{weather.name}</h1>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""
            />
            <p>{weather.main.temp}</p>
          </div>
          <p>{weather.weather[0].description}</p>
          <div>
            <p>Sensacao termina: {weather.main.feels_like}</p>
            <p>Umidade: {weather.main.humidity}</p>
            <p>Pressao: {weather.main.pressure}</p>
            
          </div>
        </div>
      ) : (
        <p>Carregando..</p>
      )}
    </div>
  );
}
