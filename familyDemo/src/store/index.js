import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

// 全局对象
const state = {
	appflag: true,
	parentflag: true
}

// getter方法
const getters = {
	isAlone(state) {
		return state.appflag
	},
	isParent(state) {
		return state.parentflag
	}
}

// 改变statee
const mutations = {
	aloneApp(state) {
		state.appflag = true
	},
	noAloneApp(state) {
		state.appflag = false
	},
	parent(state) {
		state.parentflag = true
	},
	notParent(state) {
		state.parentflag = false
	}
}
const store = new Vuex.Store({
	state,
	getters,
	mutations
})


export default store
