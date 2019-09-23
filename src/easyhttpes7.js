// ES6 constructor
class EasyHTTP {

    // Methods using await
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        });

        const resData = await response.json();
        return resData;
    }

    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        });

        const resData = await response.json();
        return resData;
     
    }

    async delete(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
}

export const http = new EasyHTTP();
