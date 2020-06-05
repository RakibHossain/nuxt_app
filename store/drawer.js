// states
export const state = () => ({
	drawer: false
})

// mutations
export const mutations = {
	toggle(state) {
		state.drawer = !state.drawer
	}
}

// getters
export const getters = {
	getDrawerState(state) {
		console.log(state.drawer)
		return state.drawer
	}
}
