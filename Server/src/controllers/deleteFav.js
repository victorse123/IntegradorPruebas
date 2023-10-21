const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
   
  try {
    const { id } = req.params
    
    await Favorite.destroy({ where: {id: id} })
 
    const allFavorites = await Favorite.findAll()

    return res.jason(allFavorites)

  } catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = deleteFav;