

import InputBase        from '@material-ui/core/InputBase';
import { MdSearch }     from 'react-icons/md';
import { useSelector }  from 'react-redux';
import { changeSearch } from '../redux/actions';
import   useStyles      from './boxStyles';

export default function SearchField() {
  const classes = useStyles();
  const   value = useSelector( state => state.searchTerm );
  return (
  <div className={classes.search}>
    <div className={classes.searchIcon}>
      <MdSearch />
    </div>
    <InputBase
      value={value} onChange={changeSearch}
      placeholder="Search…"
      classes={{ root:classes.inputRoot, input:classes.inputField }}
    />
  </div> );
}