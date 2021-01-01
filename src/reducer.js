export const initialState={
    basket:[],
    user:null
}

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer=(state,action)=>{
    switch(action.type){
        
        case 'ADD_TO_BASKET':
            
            return{
                ...state,
                basket: [...state.basket,action.item]
            }

        case 'REMOVE':
            
            const index=state.basket.findIndex((basketItem) => basketItem.id === action.id)
            var newBaket=[...state.basket]

            if (index>=0)
                newBaket.splice(index,1)
            return{
                ...state,
                basket:newBaket
            }
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }

        case 'EMPTY_BASKET':
            
            return{
                ...state,
                basket:[]
            }

        default:
            return state
    }
    
}

export default reducer