import axios from 'axios'

class NetworkServices {
  
    static requestPost(url,params,headers = null){
        return NetworkServices.requestHttp('POST',url,params,headers)
    }

    static requestGet(url, headers = null) {
        return NetworkServices.requestHttp('GET', url, null, headers)
      }
    
      static requestPut(url, params, headers = null) {
        return NetworkServices.requestHttp('PUT', url, params, headers)
      }
    
      static requestPatch(url, params, headers = null) {
        return NetworkServices.requestHttp('PATCH', url, params, headers)
      }
    
      static requestDelete(url, params, headers = null) {
        return NetworkServices.requestHttp('DELETE', url, params, headers)
      }
      static requestFormDataPost(url,params,headers = null){
    
         return NetworkServices.rquestFormDataHttp('POST', url, params, headers)
    
      }

    static requestHttp(method, url, params, token) {
        console.log("tokenservice=>",token)
        return new Promise((resolve, reject) => {
          var options = {
            method,
            url,
            headers: {
              'Content-Type': 'application/json',
            }
          }
          if (params) {
            options.data = params
          }
          if (token) {
            options.headers['Authorization'] = token
          }
    
          axios(options)
            .then(response => {
              resolve({ statusCode: response.status, body: response.data })
            })
            .catch(error => {
              if (error.response !== undefined) {
                resolve({
                  statusCode: error.response.status,
                  body: error.response.data
                })
              } else {
                reject(new Error('Check Your Connection'))
              }
            })
        })
      }
    static rquestFormDataHttp(method,url,params,token){
        
        return new Promise((resolve,reject)=>{
          var options = {
                method,
                url,
                headers:{  
                  'Accept': 'application/json',
                  'Content-Type':'multipart/form-data',
              },
               
         }
         if(params){
           options.body = params
         }
         if(token){
           options.headers['Authorization']=token
         }
         axios(options)
         .then(response=>{
            resolve({statusCode:response.status,body:response.data})
         })
         .catch(error=>{
            if(error.response !==undefined){
              resolve({
                statusCode:error.response.status,
                body:error.response.data
              })
            } else{
              reject(new Error('Check Your Connection'))
            }
         })
      })
    }

}

export default NetworkServices