import { createSlice } from "@reduxjs/toolkit";
import { inventoryData } from "../data/inventoryData";
import { v4 as uuid } from "uuid";

export const productsSlice = createSlice({
  name: "Products",
  initialState: {
    products: inventoryData,
    singleProduct: [],
    addProduct: [],
  },
  reducers: {
    allProducts(state, action) {
      const allProducts = inventoryData.map(item => {
       return { ...item , totalValue: item.unitPrice * item.inStock}
      })
      state.products = allProducts
    },
    singleProduct(state, action) {
      try {
        const oneProduct = state.products.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
      } catch (err) {
        return err;
      }
    },
    addProductPublish(state, action) {
        const newPro = action.payload
        state.addProduct = { id: uuid().slice(0,4) , ...newPro , totalValue: newPro.unitPrice * newPro.inStock , status: true}
        state.products.push(state.addProduct)
    },
    addProductDraft(state, action) {
        const newPro = action.payload
        state.addProduct = {...newPro , id: uuid().slice(0,4) , totalValue: newPro.unitPrice * newPro.inStock , status: false}
        state.products.push(state.addProduct)
    },
  },
});

export const { singleProduct, allProducts , addProductPublish , addProductDraft } = productsSlice.actions;

export default productsSlice.reducer;
