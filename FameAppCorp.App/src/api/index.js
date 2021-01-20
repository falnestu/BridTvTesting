import axios from 'axios'
import store from '../store/index'

// We create an instance of axios so the
// original stays clean of all defaults we use.
export const api = axios.create({
  baseURL: process.env.API_BASEURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(function (config) {
  //console.log('axios before request')
  //console.log(config)
  //console.log(store.state.isReady)
  //store.commit('setStatus', false)
  return config
}, function (error) {
  return Promise.reject(error)
})

api.interceptors.response.use(function (response) {
  //console.log('good response')
  //store.commit('setStatus', true)
  return response
}, function (error) {
  return Promise.reject(error)
})



export function storeApiPlugin(store) {
  //console.log('api:storeApiPlugin: Setting up the watcher now')
  // store.watch: https://vuex.vuejs.org/en/api.html
  store.watch(
    // this is practically a getter.
    state => state.context,
    // When the above getter changes, 
    // the following function is called 
    // with the getters return value:
    context => {
      console.log('storeApiPlugin: The watcher callback is called, we save the context in our axios instance')
      if (context) {
        api.defaults.headers.common['Authorization'] = context.token_type + ' ' + context.access_token
      } else {
        delete api.default.headers.common['Authorization']
      }
    }
  )
}

export const helper = {
  toQueryString: (data) => {
    if (data) {
      var url = "?"
      var count = 0;
      for (var prop in data) {
        if (data.hasOwnProperty(prop)) {
          if (count != 0) url += '&'
          url += `${prop}=${data[prop]}`
          count++
        }
      }
      return url;
    }
  }
}

//export const api = {
//  //getQueryData: (url, data) => {
//  //  if (data) {
//  //    url += "?"
//  //    for (var prop in data) {
//  //      console.log(prop)
//  //      //console.log(index)
//  //      if (data.hasOwnProperty(prop)) {
//  //        url += `${prop}=${data[prop]}`
//  //      }
//  //    }
//  //  }
//  //  else
//  //    return get(url)
//  //},
//  get: (url) => http.get(url),
//  post: (url, data) => http.post(url, data)
//}
