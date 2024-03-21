
export const helpFetchApi = () => {
    const URL = "http://localhost:3004/";

    //Funcion para buscar ejecutar metodo HTTP dependiendo sea el endpoint enviado
    const customFetch = (endpoint , options = {}) => {
        //Verificamos si viene algun metodo , sino dejamos GET como predeterminado
        options.method = options.method || "GET";
        options.headers = {
            "content-type" : "application/json"
        }
        if(options.body){
            options.body = JSON.stringify(options.body);
        }
       console.log(options)
        return fetch(`${URL}${endpoint}`, options ).then(res => {
            return  res.ok 
            ? res.json()
            : Promise.reject({
                error:true,
                status: res.status,
                statusText : res.statusText
            })
        })
    }

    const get = (endpoint) => customFetch(endpoint)
    const post = (endpoint , options) => {
        options.method = "POST";
        return customFetch(endpoint,options)
    }  /*
    const del = (endpoint , options) => {
        options.method = "DELETE";
        return customFetch(endpoint,options)
    }  */
    //Devolvemos las functiones de los metodos HTTP
    return { get  , post }
}