import CountryData from "../CountryData/CountryData";


const CountryDetails = (props) => {
    const {country, handelVisited, handelVisitedCountries} = props;
    return (
        <div>
            <h3>Country Details</h3>
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;