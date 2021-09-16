import React, { useReducer } from "react"
import { CHANGE_SCREEN } from "../Types"
import { ScreenContext } from "./screenContext"
import { ScreenReducer } from "./screenReducer"

export const ScreenState = ({ children }) => {
	const [state, dispatch] = useReducer(ScreenReducer, null)
	const setTodoId = id => dispatch({ type: CHANGE_SCREEN, id })
	return <ScreenContext.Provider
		value={ {
			todoId: state,
			setTodoId
		} }
	>{ children }</ScreenContext.Provider>
}