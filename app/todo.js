var React = require('react');
var ReactDOM = require('react-dom');
var Redux = require('redux')
import {createStore, combineReducers} from 'redux'

const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case 'TOGGLE_TODO':
			if (state.id != action.id) {
				return state
			}
			return {
				...state,
				completed: !state.completed
			}
		default:
			return state
	}
}

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			]
		case 'TOGGLE_TODO':
			return state.map(t => todo(t, action))
		default:
			return state
	}
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case 'SET_VISBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

const todoApp = combineReducers({ todos, visibilityFilter })

const ToDo = () => (
	<div>Todo</div>
)

const render = () => {
  ReactDOM.render(<ToDo />, document.getElementById('app'));
}

render()

const store = createStore(todoApp)
const l = () => {
	console.log(store.getState())
}
const a = (action) => {
	console.log('---' + action + '---')
}
l()
store.dispatch({
		type: 'ADD_TODO',
		id: 0,
		text: 'learn redux'
	})
a('add todo')
l()
store.dispatch({
		type: 'ADD_TODO',
		id: 1,
		text: 'learn redux'
	})
a('add todo')
l()
store.dispatch({
		type: 'TOGGLE_TODO',
		id: 1
	})
a('toggle todo')
l()
store.dispatch({
		type: 'SET_VISBILITY_FILTER',
		filter: 'SHOW_COMPLETED'
	})
a('SET_VISBILITY_FILTER')
l()