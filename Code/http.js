import axios from 'axios';
axios.defaults.timeout = 1000000; //设置超时时长
axios.defaults.baseURL = '';
//http request 拦截器
axios.interceptors.request.use(
    config => {        
        // const token = getCookie('名称');
        config.data = JSON.stringify(config.data);
        console.log(config, '访问内容')
        if (config.url.indexOf('biabilitymgmt') != -1 ||
            config.url.indexOf('biabilitytask') != -1 ||
            config.url.indexOf('area') != -1 ||
            config.url.indexOf('batcharea') != -1 ||
            config.url.indexOf('batchschool') != -1 ||
            config.url.indexOf('schoolcheck') != -1 ||
            config.url.indexOf('tabledd') != -1 ||
            config.url.indexOf('schoolroom') != -1 ||
            config.url.indexOf('syscfg') != -1 ||
            config.url.indexOf('biservers') != -1 ||
            config.url.indexOf('business') != -1 ||
            config.url.indexOf('bizconfig') != -1 ||
            config.url.indexOf('paper') != -1 ||
            config.url.indexOf('notice') != -1 ||
            config.url.indexOf('bizuser') != -1
        ) {
            config.headers = {
                'Content-Type': 'application/json',
                'x-auth-authtoken': JSON.parse(localStorage.id_token),
            }
        } else if (config.url.indexOf('/business/get-info') != -1) {
            config.headers = {
                'Content-Type': 'application/json',
                // 'site': 'china'
            }
        } else if (config.url.indexOf('ies5') != -1 ||
            config.url.indexOf('tmid') != -1 ||
            config.url.indexOf('/service/PushNotify') != -1 ||
            config.url.indexOf('prodanalysis') != -1 ||
            config.url.indexOf('bbauthapi') != -1) {
            config.headers = {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + JSON.parse(localStorage.access_token)
            }
        } else {
            config.headers = {
                'Content-Type': 'application/json',
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params) {
    let data = {};
    data.method = url;
    data.params = params;
    data.lang = localStorage.getItem('local');
    return new Promise((resolve, reject) => {
        axios.get(url, data)
            .then(response => {
                resolve(response.data);
                //  this.$Message.success('数据访问成功！');
            })
            .catch(error => {
                reject(error);
                // this.$Message.error('数据访问错误！');
            })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, params) {
    let data = {};
    data.method = url;
    data.params = params;
    data.lang = localStorage.getItem('local');
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
                // this.$Message.success('数据访问成功！');
            }, error => {
                reject(error);
                //this.$Message.error('数据访问错误！');
            })
    })
}