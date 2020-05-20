import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store ({

  state: {
    user: '',
    company: ''
  },

  getters: {
    
  },

  mutations: {
    addUserInfo(state,info) {
      state.user = info
    },
    getCompany(state){
      state.user.authorities.map( (item,index) => {
        window.console.log(item,index)
      })      
    } 
  },

  actions: {
    addUser (context,info){
      context.commit("addUserInfo",info)
    },
    getCompanyList(context){
      context.commit("getCompany")
    }
  }


})

export default store