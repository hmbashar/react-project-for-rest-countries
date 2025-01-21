import CountryDetails from '../CountryDetails/CountryDetails';
import './Country.css';
import {useState} from 'react';


const Country = ({country, handelVisitedCountries}) => {    
   
    const {name, flags, cca2, capital, population  } = country;

    const [visited, setVisited] = useState(false);


    const handelVisited = () => {
        setVisited(!visited);
    }

    


    return (
        <div className={`country ${visited ? "visited-color" : ""}`}>          
            <img src={flags.svg} />
            <h3>Name: {name?.common}</h3>
            <h4>Code: {cca2}</h4>
           <p>{name.official}</p>
           <p>Population: {population}</p>
           <p>Capital: {capital}</p>
           <button onClick={() => handelVisitedCountries(country)}>Mark Visited</button>
           <button onClick={handelVisited }>{visited ? 'Visited' : 'Visit'}</button>
           <p>{visited ? 'I have visted this country.' : 'Will go for visit inshaAllah'}</p>
           <hr />
           <CountryDetails
           country={country}
           handelVisited={handelVisited}
           handelVisitedCountries={handelVisitedCountries}
           ></CountryDetails>
        </div>
    );
};

export default Country;