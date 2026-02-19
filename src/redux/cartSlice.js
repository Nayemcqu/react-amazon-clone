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

// find the product removing the Array
const productToRemove=state.prodcuts.find((product)=>product.id===action.payload);

//remove the quantity from the product number
state.productNumber=state.productNumber-productToRemove.quantity;

//find the index of the removing
const index=state.prodcuts.findIndex((product)=>product.id===action.payload)

// remove  from the Array

state.prodcuts.splice(index,1);
},

incrementProduct:(state,action)=>{

const product=state.prodcuts.find((product)=>product.id===action.payload)
product.quantity++;
state.productNumber++;
},

decrementProduct:(state,action)=>{

const product=state.prodcuts.find((product)=>product.id===action.payload)

if(product.quantity>1){
    product.quantity--;
    state.productNumber--;
}

}

}
});

export const {addToCart,removeFromCart,incrementProduct,decrementProduct}=cartSlice.actions;
export default cartSlice.reducer;