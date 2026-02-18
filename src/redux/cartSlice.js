import { createSlice } from "@reduxjs/toolkit";

const initialState={
 prodcuts:[],
 productNumber:0,   
}
export const cartSlice=createSlice({
name:"cart",
initialState,
reducers:{
addToCart:(state,action)=>{
//check if we already have that 

const addProductexists=state.prodcuts.find((product)=>product.id===action.payload.id);

if(addProductexists){
    addProductexists.quantity+=parseInt(action.payload.quantity);
}
else{

state.prodcuts.push({...action.payload,quantity:parseInt(action.payload.quantity)})    
}

state.productNumber=state.productNumber+parseInt(action.payload.quantity);    
},
removeFromCart:(state,action)=>{


}

}
});

export const {addToCart,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;