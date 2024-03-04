import React ,{useState} from 'react';

const SearchBar = ({WeatherData,onError}) => {
    const [City,setCity] = useState('');

    const API_KEY = '2dd9245d15ae0c4c786a8751617d96dd';
    
    const fetchWeatherData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${City},IN&units=metric#`)
        .then(response => {
            if(!response.ok){
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data =>{
            WeatherData(data);
        })
        .catch(error => {
            onError(error.message);
        });
    }
    
    const SearchPressed = (e) =>{
        e.preventDefault();
        fetchWeatherData();
    }

    return (
        <form onSubmit={SearchPressed}>
            <input 
                type="text"
                placeholder='Enter city Name'
                value={City}
                onChange={(e)=>setCity(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );


};

export default SearchBar;
