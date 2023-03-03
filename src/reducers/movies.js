

const movies =  (movie = [], action) => {
    switch (action.type) {
      case "CREATE":
        return [...movie, action.payload];

      default:
       return movie
    }
}
export default movies