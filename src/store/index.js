import { createStore } from 'vuex'

export default createStore({
  state: {
    displayMenu: false,
  },
  mutations: {
    CHANGE_DISPLAY_MENU(state, menu) {
      state.displayMenu = menu
    },
  },
  actions: {
    changeDisplayMenu(context, menu) {
      context.commit('CHANGE_DISPLAY_MENU', menu)
    },
  },
  modules: {
  },
})
