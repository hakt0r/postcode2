
import { makeStyles }  from '@material-ui/core';
import   useCountries  from '../gql/countries';
import   Country       from './Country';
import   Loading       from './Loading';
import   Error         from './Error';

const useStyles = makeStyles( theme => ({
  list: {
    display:'flex',
    flexFlow: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: '1em'
  }
}));

export default function CountryList() {
  const { countries, loading, error } = useCountries();
  const classes = useStyles();
  if ( loading ) return <Loading/>;
  if ( error   ) return <Error error={error}/>;
  return (
  <div className={classes.list}>
    { countries.map( country => <Country key={country.code} country={country} /> ) }
  </div> );
}
