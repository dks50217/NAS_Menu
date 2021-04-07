const { loadModule } = window["vue3-sfc-loader"];

const options = {
    moduleCache: {
        vue: Vue,
    },
    getFile(url) {
        console.log("getFile: " + url);
        
        return fetch(url).then(response => response.ok ? response.text() : Promise.reject(response));
    },
    addStyle(styleStr) {

    },
    log(type, ...args) {
        console.log(type, ...args);
    }
}