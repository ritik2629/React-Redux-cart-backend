import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  // cartItems: [],
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartquantity += 1;
        toast.info(`${state.cartItems[itemIndex].name} quantity increased`,{
          position:'bottom-left'
        });
      } else {
        const tempProduct = { ...action.payload, cartquantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`,{
          position:'bottom-left'
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeToCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.name} is removed from cart`,{
        position:'bottom-left'
      });
    },
    clearCart: (state) => {
      state.cartItems = [];
      toast.warn("All item removed from cart",{
        position:'bottom-left'
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseQty:(state,action)=>{
      const itemIndex=state.cartItems.findIndex((item)=>{
        return item.id ===action.payload.id
      })
      if(state.cartItems[itemIndex].cartquantity>1){
        state.cartItems[itemIndex].cartquantity -=1
        toast.info(`Decreased ${action.payload.name} from the cart`,{
          position:'bottom-left'
        });
      }else if(state.cartItems[itemIndex].cartquantity===1){
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        toast.error(`${action.payload.name} is removed from cart`,{
          position:'bottom-left'
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increaseQty:(state,action)=>{
      const itemIndex=state.cartItems.findIndex((item)=>{
        return item.id ===action.payload.id
      })
      if(state.cartItems[itemIndex].cartquantity<10){
        state.cartItems[itemIndex].cartquantity ++
        toast.info(`Increased ${action.payload.name} in the cart`,{
          position:'bottom-left'
        });
      }else if(state.cartItems[itemIndex].cartquantity >=10){
        toast.error("You reached maximum quantity",{
          position:'bottom-left'
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotal:(state,action)=>{
       let {total,quantity} = state.cartItems.reduce((cartTotal,cartItem)=>{
          const {price,cartquantity} = cartItem
          const itemTotal =price* cartquantity

          cartTotal.total +=itemTotal
          cartTotal.quantity +=cartquantity

          return cartTotal
        },{
          total:0,
          quantity:0
        })
        state.cartTotalQuantity=quantity
        state.cartTotalAmount=total
    }
  },
});

export const { addToCart, removeToCart, clearCart,decreaseQty,increaseQty,getTotal } = cartSlice.actions;
export default cartSlice.reducer;
