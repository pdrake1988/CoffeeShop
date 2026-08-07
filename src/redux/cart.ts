import { createReducer, createAction } from "@reduxjs/toolkit";
import { Product } from "./types";

const initialState: Array<Product> = [];

const cartReducer = createReducer(initialState, (builder) => {
    builder.addCase(createAction<Product>("cart/addToCart"), (state, action) => {
        state.push(action.payload);
    }),
    builder.addCase(createAction<{productId: string}>("cart/increaseQuantity"), (state, action) => {
        const { productId } = action.payload;
        const product = state.find((item) => item.productId === productId);
        if (product) {
            product.quantity += 1;
        }
    }),
    builder.addCase(createAction<{productId: string}>("cart/decreaseQuantity"), (state, action) => {
        const { productId } = action.payload;
        const product = state.find((item) => item.productId === productId);
        if (product) {
            if (product.quantity > 1) {
              product.quantity -= 1;
            } else {
              const prodIndex = state.findIndex(
                (item) => item.productId === productId,
              );
              if (prodIndex !== -1) {
                state.splice(prodIndex, 1);
              }
            }
        }
    });
});

export default cartReducer;
