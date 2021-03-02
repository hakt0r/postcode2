
import useCountries from '../gql/countries';
import Country      from './Country';
import Loading      from './Loading';
import Error        from './Error';
import useStyles    from './boxStyles';

export default function CountryList() {
  const { countries, loading, error } = useCountries();
  const classes = useStyles();
  if ( loading ) return <Loading/>;
  if ( error   ) return <Error error={error}/>;
  return (
  <div className={classes.countries}>
    { countries.map( country => <Country key={country.code} country={country} /> ) }
  </div> );
}
