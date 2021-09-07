import { useSelector } from 'react-redux';
import { countries, totalConfirmed } from '../redux/covidData/covidData';

export default function Home() {
  const countryComponents = useSelector(countries).map((country) => (
    <div key={country.id}>
      <h5>{country.name.toUpperCase()}</h5>
      <p>
        {
          Number(country.today_confirmed).toLocaleString()
        }
        {' '}
        Cases
      </p>
    </div>
  ));
  return (
    <div className="pt-3 bg-pink2">
      <div>
        <h1>GLOBAL</h1>
        <p>
          {Number(useSelector(totalConfirmed)).toLocaleString()}
          {' '}
          Total Cases
        </p>
      </div>
      <h6 className="text-white fw-bold m-0 p-2">STATS BY COUNTRY</h6>
      {countryComponents}
    </div>
  );
}
