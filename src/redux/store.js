import { createStore } from "redux";

const defaultState = {
  loading: true,
  countries: [],
  filteredCountries: [],
  searchTerm: '',
  languages: []
};

function reducer ( state = defaultState, action ) {
  const { type, countries, searchTerm, error, language  } = action;

  switch ( type ){

    case 'countries:update':
      return { ...state, countries, filteredCountries: countries, loading: false };

    case 'countries:error':
      return { ...state, loading: false, error };

    case 'search:change':
      const filterLower = state.searchTerm.toLocaleLowerCase();
      const filteredCountries =
        ! state.searchTerm.trim()
        ? state.countries
        : state.countries.filter(
          country => country.languages.reduce(
            ( prev, language ) =>
              prev
              || language.name.toLocaleLowerCase().includes(filterLower),
            false
          )
        )
      return { ...state, searchTerm, filteredCountries };

      case 'language:select':
        const langAlreadySelected = state.languages.reduce( ( prev, lang ) => prev || lang.name === language.name, false)
        if ( langAlreadySelected ) return state;
        return { ...state, languages: [ language, ...state.languages].slice(0,2) }

      case 'language:remove':
        return { ...state, languages: state.languages.filter( l => l.name === language.name ) }
      
    default: return state;
  }
};


export default createStore(reducer);