const baseUrl = "https://mrpacc.pythonanywhere.com/"

class API{
    async register(email, password, password2){
        let myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        let raw = JSON.stringify({
            "password": password,
            "email": email,
            "password2": password2
        })
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }
        let response = await fetch(`${baseUrl}user/create`, requestOptions)
        let json = await response.json()
        console.log(json)
        return json
    }

    async login(email, password){
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
            "email": email,
            "password": password
        });
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let response = await fetch(`${baseUrl}user/login`, requestOptions)
        let json = await response.json()
        console.log(json)
        return json
    }
}

export default API