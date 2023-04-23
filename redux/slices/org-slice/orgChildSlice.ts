import { createSlice } from '@reduxjs/toolkit'

export interface IORG_CHILD {
	CATE_SERVICES: {
		org_id: string
		cate_id: number
	}
	CATE_PRODUCTS: {
		org_id: string
		cate_id: number
	}
}
const initialState: IORG_CHILD = {
	CATE_SERVICES: {
		org_id: '',
		cate_id: 0,
	},
	CATE_PRODUCTS: {
		org_id: '',
		cate_id: 0,
	},
}
const orgChildSlice = createSlice({
	name: 'ORG_CHILD',
	initialState,
	reducers: {
		onEmptyCateServices: (state, { payload }) => {
			// console.log("payload", payload)
			// console.log("state org", state.CATE_SERVICES.org_id)
			if (state.CATE_SERVICES.org_id !== payload) {
				state.CATE_SERVICES.cate_id = 0
			}
			state.CATE_SERVICES.org_id = payload
		},
		onChooseCateService: (state, { payload }) => {
			state.CATE_SERVICES = {
				cate_id: payload.cate_id,
				org_id: payload.org_id,
			}
		},
		onEmptyCateProduct: (state, { payload }) => {
			if (state.CATE_PRODUCTS.org_id !== payload) {
				state.CATE_PRODUCTS.cate_id = 0
			}
			state.CATE_PRODUCTS.org_id = payload
		},
		onChooseCateProduct: (state, { payload }) => {
			state.CATE_PRODUCTS = {
				cate_id: payload.cate_id,
				org_id: payload.org_id,
			}
		},
	},
})

const { reducer, actions } = orgChildSlice
export const { onChooseCateService, onEmptyCateServices, onEmptyCateProduct, onChooseCateProduct } =
	actions
export default reducer
