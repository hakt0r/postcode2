
import store from './store';

const { dispatch } = store;

export async function countriesError(error){
  dispatch({ type: 'countries:error', error });
}

export async function countriesUpdate(countries){
  dispatch({ type: 'countries:update', countries });
}

export async function changeSearch(event){
  dispatch({ type: 'search:change', searchTerm: event.target.value });
}

export async function languageSelect(language){
  dispatch({ type: 'language:select', language });
}

export async function languageRemove(language){
  dispatch({ type: 'language:remove', language });
}
