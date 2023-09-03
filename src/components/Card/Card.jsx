/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { addFav, removeFav } from "../../Redux/Actions";
import { useState } from "react";
import { connect } from "react-redux";

function Card (props) {
  const { id, name, status, species, gender, origin, image, onClose, addFav, removeFav } = props;

  const [isFav, setIsFav]= useState(false)
  
  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props)
    setIsFav(!isFav)
  }

  return (
    <div className={styles.wrapperCard}>{
      isFav ? (
         <button onClick={handleFavorite}>❤️</button>
      ) : (
         <button onClick={handleFavorite}>🤍</button>
      )
   }
      <button 
        className={styles.btn} 
        onClick={()=> {
          onClose(id);
        }}
      >
        Delete
      </button>
      <img src={image} alt="character" />
      <div className={styles.wrapperText}>
        <Link strict to={`/detail/${id}`}>
          <h1 className={styles.name}>{name}</h1>
        </Link>
        <div className={styles.details}>
          <h2>{status}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          <h2>{origin}</h2>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character))
    },
    removeFav: (id) => {
      dispatch(removeFav(id))
    },
  };
};
export default connect(null, mapDispatchToProps)(Card);