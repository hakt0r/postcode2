
import { gql, useQuery } from '@apollo/client';
import { useEffect }     from 'react';
import { useSelector }   from 'react-redux';

import {
  countriesError,
  countriesUpdate
} from '../redux/actions';

const QUERY = gql`
query Countries {
  countries {
    code
    name
    emoji
    languages {
      code
      name
    }
  }
}`;

export default function useCountries () {
  const { data, error, loading } = useQuery(QUERY);
  
  useEffect(
    () => {
      if ( error )   return countriesError(error);
      if ( loading ) return;
      countriesUpdate(data.countries);
    },
    [data,error,loading]
  );
    
  const countries = useSelector( ({ filteredCountries }) => filteredCountries );

  return ({ countries, loading, error });
}