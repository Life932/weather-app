function WeatherCard({ weatherData }) {
    if (!weatherData) {
        return null;
    }


    return (
        <div className="bg-white/10 backdrop-blur-md text-white p-8 rounded-lg shadow-lg mt-8 w-full max-w-md text-center">
            <h2 className="text-4xl font-bold">{weatherData.location.name}</h2>
            <p className="text-xl text-slate-300">{weatherData.location.country}</p>

            <div className="flex items-center justify-center my-6">
                <img src={weatherData.current.condition.icon} alt="Weather Icon" className="w-24 h-24" />
                <div className="text-left ml-4">
                    <p className="text-6xl font-semibold">{weatherData.current.temp_c}℃</p>
                    <p className="text-xl">{weatherData.current.condition.text}</p>
                </div>
            </div>
            
            <div className="flex justify-around text-lg">
                <div>
                    <p className="font-semibold">{weatherData.current.humidity}%</p>
                    <p className="text-slate-300">Humidity</p>
                </div>
                <div>
                    <p className="font-semibold">{weatherData.current.wind_kph} kph</p>
                    <p className="text-slate-300">Wind Speed</p>
                </div>

            </div>

        </div>
    )
}

export default WeatherCard;