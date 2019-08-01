import axios from 'axios'

const basicUrl = "/";
const basicUrl002 = "";
const UpImgUri = "";
const UpFileUri = "";
const basicUrlParty = "";

let instance = axios.create({ //请求统一实例
  baseURL: basicUrl,
  timeout: 30000,
});

/**
 * 响应拦截器
 *
 */
instance.interceptors.response.use(function (response) {
  console.log("进入响应拦截器");
  /*console.log("响应参数|" + JSON.stringify(response));
  if (response.data["success"] !== "SUCCESS") {
    alert('登录超时，请重新登录');
    router.push("/");
  }*/
  return response;
});

/**
 * 请求拦截器
 *
 */
instance.interceptors.request.use((config) => {
   if (config.method === 'post' || 'get') {
    console.log("进入请求拦截器");
    let user = JSON.parse(localStorage.getItem("user"));
    if (!!user) {
      if(!!user.token) {
        config.data.token = user.token;
      }
      if(!!user.pta_user_id) {
        config.data.pta_user_id = user.pta_user_id;
      }
      if(!!user.pta_id) {
        config.data.pta_id = user.pta_id;
      }
    }
   }
  return config;
}, (error) => {
  return Promise.reject(error);
});

/**
 * 封装的共通post方法
 *
 * @param url
 * @param params
 * @param responseType
 * @returns {Promise<any>}
 */
export function post(url, params, responseType,loadFlag) {

  return new Promise((resolve, reject) => {
    if(loadFlag != '1') {
      this.$Indicator.open('数据加载中');
    }
  
    if (responseType) {
      instance.post(url, params, responseType)
        .then(response => {
          callBack(this.$router, resolve, response)
					if(loadFlag != '1') {
						this.$Indicator.close();
					}
          //resolve(response.data);
        }, err => {
          if(loadFlag != '1') {
          	this.$Indicator.close();
          }
          reject(err);
        })
        .catch((error) => {
          if(loadFlag != '1') {
          	this.$Indicator.close();
          }
          reject(error)
        })
    } else {
      instance.post(url, params)
        .then(response => {
          //console.log(params)
          //resolve(response.data);
          callBack(this.$router, resolve, response)
				 if(loadFlag != '1') {
						this.$Indicator.close();
					}
        }, err => {
          if(loadFlag != '1') {
          	this.$Indicator.close();
          }
          reject(err);
        })
        .catch((error) => {
          if(loadFlag != '1') {
          	this.$Indicator.close();
          }
          reject(error)
        })
    }

  })
}

/**
 * 封装的get方法
 *
 * @param url
 * @param params
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    instance.get(url, params)
      .then(response => {
        callBack(this.$router, resolve, response)
        //resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function callBack(router, resolve, response) {
  console.log(response.data)
  if (response.data.success) {
    resolve(response.data);
  } else if (response.data.errorCode == 'EC0001') {
    let instance = Toast('Token信息失效,请重新登录');
    delStorage();
		api.sendEvent({
			name: 'logoutFamily'
		});
    setTimeout(() => {
      instance.close();
      router.push('/login/passwordLogin/passwordLogin')
    }, 2000);
  } else if (response.data.errorCode == "EL0003" || response.data.errorCode == "EL0012") {
    let instance = Toast(response.data.errorMsg);
    delStorage();
		api.sendEvent({
			name: 'logoutFamily'
		});
    setTimeout(() => {
      instance.close();
      router.push('/login/passwordLogin/passwordLogin')
    }, 2000);
  } else {
    // if (!!response.data.errorMsg) {
    //   Toast(response.data.errorMsg)
    // }
		 resolve(response.data);
  }
}

export function delStorage() {
  localStorage.removeItem('user');
  localStorage.removeItem('aloneApp');
  localStorage.removeItem('store');
  localStorage.removeItem('globalData');
}

export function deletes(url, params) {
  return new Promise((resolve, reject) => {
    instance.delete(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  constantString() { //上传图片地址
    return UpImgUri;
  },
  UpFileUriString() { //上传文件地址
    return UpFileUri;
  },
  baseUrl() {
    return basicUrl;
  },
  basicUrlParty() {
    return basicUrlParty;
  }
}
