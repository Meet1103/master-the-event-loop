import { combineReducers } from 'redux'
import { helpReducer } from './helpToggle/helpToggle.reducer'
import { consoleReducer } from './Console/Console.reducer'
import { callstackReducer } from './callstack/callstack.reducer'
import { webApiReducer } from './webApi/webApi.reducer'

// import all reducers in this file and add them with a flag to the combineReducer method by adding it to the object
// reducerName : reducer;

export default combineReducers({
	helpReducer: helpReducer,
	consoleReducer: consoleReducer,
	callstack: callstackReducer,
	webApi: webApiReducer,
})
