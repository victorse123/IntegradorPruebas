import {useState} from "react";
import styles from "./Favorites.module.css";
import { connect, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { filterCards, orderCards } from "../../Redux/Action";

const Favorites = (props) => {
    
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);
    
    const handlerOrder = (e) => {
      dispatch (orderCards(e.target.value));
      setAux(!aux);
    };

    const handlerFilter = (e) => {
      dispatch (filterCards(e.target.value));
    };

  return (
    <div className={styles.fav}>
      <div>
        <select onChange={handlerOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handlerFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
         {props.myFavorites.map((char) => {
            return(
              <Card
                key={char.id}
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