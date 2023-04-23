import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import favorites from '../../../api-client/favorite'
import { IOrganization } from '../../../interfaces'
import { STATUS } from '../../status'
import { Product } from '../../../interfaces/product'
import { Service } from '../../../interfaces/service'

export interface IORG {
	org: IOrganization | any
	tab: string
	GALLERIES: any[]
	SERVICES_KEYWORD: Service[]
	PRODUCTS_KEYWORD: Product[]
}

// export const onFavoriteOrg: any = createAsyncThunk(
//     "ORG/onFavoriteOrg",
//     async (org: any) => {
//         await favorites.postFavorite(org?.id);
//         const payload = org.favorites_count + 1;
//         return payload;
//     }
// );
// export const onDeleteFavoriteOrg: any = createAsyncThunk(
//     "ORG/onDeleteFavoriteOrg",
//     async (org: any) => {
//         await favorites.deleteFavorite(org?.id);
//         const payload = org.favorites_count - 1;
//         return payload;
//     }
// );
const initialState: IORG = {
	org: {},
	tab: '1',
	GALLERIES: [],
	SERVICES_KEYWORD: [],
	PRODUCTS_KEYWORD: [],
}
const orgSlice = createSlice({
	initialState,
	name: 'ORG',
	reducers: {
		onSetOrgDetail: (state, action: any) => {
			state.org = action.payload
		},
		onSetGalleries: (state, action) => {
			state.GALLERIES = action.payload
		},
		onActiveTab: (state, action) => {
			state.tab = action.payload
		},
	},
	extraReducers: {
		// favorites org
		// [onFavoriteOrg.pending]: (state) => {
		//     return state;
		// },
		// [onFavoriteOrg.fulfilled]: (state, { payload }) => {
		//     return {
		//         ...state,
		//         org: {
		//             ...state.org,
		//             is_favorite: true,
		//             favorites_count: payload,
		//         },
		//     };
		// },
		// [onFavoriteOrg.rejected]: (state, { payload }) => {
		//     console.log(payload);
		//     return state;
		// },
		//remove favorite org
		// [onDeleteFavoriteOrg.pending]: (state) => {
		//     return state;
		// },
		// [onDeleteFavoriteOrg.fulfilled]: (state, { payload }) => {
		//     console.log(payload);
		//     return {
		//         ...state,
		//         org: {
		//             ...state.org,
		//             is_favorite: false,
		//             favorites_count: payload,
		//         },
		//     };
		// },
		// [onDeleteFavoriteOrg.rejected]: (state) => {
		//     return state;
		// },
		//fetch by keyword
	},
})
const { actions } = orgSlice
export const { onSetOrgDetail, onSetGalleries, onActiveTab } = actions
export default orgSlice.reducer
