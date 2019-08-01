import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

// 全局对象
const state = {
	appflag: true
}

// getter方法
const getters = {
	isAlone(state) {
		return state.appflag
	}
}

// 改变statee
const mutations = {
	aloneApp(state) {
		state.appflag = true
	},
	noAloneApp(state) {
		state.appflag = false
	}
}
const store = new Vuex.Store({
	state,
	getters,
	mutations
})


export default store
