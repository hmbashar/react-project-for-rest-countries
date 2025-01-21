import { useEffect, useState } from 'react';
import './Countries.css';
import Country from '../Country/Country';


const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setvisitedCountries] = useState([]);

    const handelVisitedCountries = country => { 
        const newVisitedCountries = [...visitedCountries, country];
        setvisitedCountries(newVisitedCountries);
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div>
            <h2>Total Visited Countries: {visitedCountries.length}</h2>

            <ul>
               {
                visitedCountries.map((country, index) => <li key={index}>{
                    country.name.common
                }</li>)
               }
            </ul>

            <h3>Countries {countries.length}</h3>
            

            <div className="countries-area">
                {
                    countries.map(country => <Country key={country.cca2} handelVisitedCountries={handelVisitedCountries} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;