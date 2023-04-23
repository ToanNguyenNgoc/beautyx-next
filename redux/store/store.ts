import { configureStore } from "@reduxjs/toolkit";
import testReducer from '../slices/testSlice';
import loginReducer from "../slices/auth-slice/login-slice";
import searchReducer from "../slices/search-slice/searchSlice";
import orgReducer from "../slices/org-slice/orgSlice";
import orgChildReducer from "../slices/org-slice/orgChildSlice";
import userReducer from "../slices/auth-slice/user-slice"
import cartReducer from "../slices/cart-slice/cartSlice";
import servicesBookReducer from "../slices/services-book-slice/services-book-slice";
import userAddressReducer from "../slices/auth-slice/address-slice";
import filterReducer from "../slices/filter-slice/filter-slice"
import bookingReducer from "../slices/auth-slice/booking-slice"
import { createWrapper } from 'next-redux-wrapper';

const rootReducer = {
    TEST: testReducer,
    LOGIN: loginReducer,
    SEARCH: searchReducer,
    ORG: orgReducer,
    ORG_CHILD: orgChildReducer,
    USER: userReducer,
    CART: cartReducer,
    SERVICES_BOOK: servicesBookReducer,
    USER_ADDRESS: userAddressReducer,
    FILTER: filterReducer,
    BOOKING: bookingReducer
}
export const makeStore = () =>
    configureStore({
        reducer: rootReducer,
    });

export const wrapper = createWrapper(makeStore, { debug: false })