import './App.css';
// import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [query, setQuery] = useState({ q: 'Ulaanbaatar' });
    const [units, setUnits] = useState('metric');
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const message = query.q ? query.q : 'current location.';

            toast.info('Цаг агаарын мэдээг татаж байна. ' + message);

            await getFormattedWeatherData({ ...query, units }).then((data) => {
                toast.success(
                    `Амжилттай татагдлаа. ${data.name}, ${data.country}.`
                );

                setWeather(data);
            }).catch((error) => {
                toast.error(
                    `Та буруу хотын нэр оруулсан байна.`
                );
            });
        };

        fetchWeather();
    }, [query, units]);

    const formatBackground = () => {
        if (!weather) return 'from-cyan-700 to-blue-700';
        const threshold = units === 'metric' ? 0 : 60;
        if (weather.temp <= threshold) return 'from-cyan-700 to-blue-700';

        return 'from-yellow-700 to-orange-700';
    };

    return (
        <div
            className={`lg:mx-auto lg:py-5 px-4 lg:px-32 bg-gradient-to-br lg:min-h-screen w-fit h-full shadow-xl shadow-gray-400 ${formatBackground()}`}
        >
            {/* <TopButtons setQuery={setQuery} /> */}
            <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

            {weather && (
                <div className={`grid gap-8 lg:gap-40 lg:grid-cols-2 lg:pt-20`}>
                    <div>
                        <TimeAndLocation weather={weather} />
                        <TemperatureAndDetails weather={weather} />
                    </div>

                    <div className={`pb-20`}>
                        <Forecast title="Цагаар" items={weather.hourly} />
                        <Forecast title="Өдрөөр" items={weather.daily} />
                    </div>
                </div>
            )}

            <ToastContainer
                autoClose={2500}
                theme="colored"
                newestOnTop={true}
            />
        </div>
    );
}

export default App;
