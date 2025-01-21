import './Country.css';

const Country = ({country}) => {
    console.log(country);
    const {name, flags, cca2, capital, population  } = country;
    return (
        <div className="country">          
            <img src={flags.svg} />
            <h3>Name: {name?.common}</h3>
            <h4>Code: {cca2}</h4>
           <p>{name.official}</p>
           <p>Population: {population}</p>
           <p>Capital: {capital}</p>
        </div>
    );
};

export default Country;