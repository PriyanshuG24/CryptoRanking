const cryptoCoinReducer = (state, action) => {
    switch (action.type) {
        case "GET_COINS":
            return {
                ...state,
                coins: action.payload,
                loading: false
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        case "ADD_FAV_COIN":
            const { uuid, name, symbol, marketCap, rank, imgUrl, change, price,sparkline } = action.payload;
            const newCoin = {
                uuid,
                name,
                symbol,
                marketCap,
                rank,
                imgUrl,
                change,
                price,
                sparkline
            };
            return {
                ...state,
                favCoinList: [...state.favCoinList, newCoin]
            }
        case "DEL_FAV_COIN":
            return {
                ...state,
                favCoinList: state.favCoinList.filter((coin) => coin.uuid !== action.payload)
            }
        default:
            return state
    }
}
export default cryptoCoinReducer