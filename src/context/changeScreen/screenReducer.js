import { CHANGE_SCREEN } from "../Types"

const headers = {
	[CHANGE_SCREEN]: (state, id) => id,
	DEFAULT: state => state

}
export const ScreenReducer = (state, action) => {
	const head = headers[action.type] || headers.DEFAULT
	return head(state, action.id)
}