import { useEffect, useState } from 'react';
import './Countries.css';
import Country from '../Country/Country';


const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountry, setVisitedCountry] = useState([]);

    const handelVisitedCountries = country => {
        console.log(country);
        setVisitedCountry(country);
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div>
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