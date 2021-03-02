
import { makeStyles } from '@material-ui/core';
import useCountries   from '../gql/countries';
import Country        from './Country';

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
  const countries = useCountries();
  const   classes = useStyles();
  return (
  <div className={classes.list}>
    { countries.map( country => <Country key={country.code} country={country} /> ) }
  </div> );
}
