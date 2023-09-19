import {useState} from "react";
import styles from "./Favorites.module.css";
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../Redux/Action";

const Favorites = (props) => {
    const {myFavorites} = props;
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);
    
    const handleOrder = (e) => {
      dispatch (orderCards(e.target.value));
      setAux(!aux);
    }

    const handleFilter = (e) => {
      dispatch (filterCards(e.target.value));
    }

  return (
    <div className={styles.fav}>
      <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        
      </div>
         {myFavorites.map((char, index) => {
            return(
              <Card
                key={index}
                id={char.id}
                name={char.name}
                status={char.status}
                species={char.species}
                gender={char.gender}
                origin={char.origin.name}
                image={char.image}
              />
           );
         })}
    </div>
  );
};
const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites,
    };
}
  

export default connect (mapStateToProps, null)(Favorites);