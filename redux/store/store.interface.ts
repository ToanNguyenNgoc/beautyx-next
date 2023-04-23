import { ILOGIN } from "../slices/auth-slice/login-slice"
import { ISEARCH } from "../slices/search-slice/searchSlice"
import { IORG } from "../slices/org-slice/orgSlice";
import { IORG_CHILD } from "../slices/org-slice/orgChildSlice";
import { IUSER } from "../slices/auth-slice/user-slice";
import { ICART } from "../slices/cart-slice/cartSlice";
import { ISERVICES_BOOK } from "../slices/services-book-slice/services-book-slice";
import { IUSER_ADDRESS } from "../slices/auth-slice/address-slice";
import { IFILTER } from "../slices/filter-slice/filter-slice";
import { IBOOKING } from "../slices/auth-slice/booking-slice"

export interface IStore {
    LOGIN: ILOGIN,
    SEARCH: ISEARCH,
    ORG: IORG,
    ORG_CHILD: IORG_CHILD,
    USER: IUSER,
    CART: ICART,
    SERVICES_BOOK: ISERVICES_BOOK,
    USER_ADDRESS: IUSER_ADDRESS,
    FILTER: IFILTER,
    BOOKING: IBOOKING
}