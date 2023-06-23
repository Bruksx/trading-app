const baseUrl = "https://mrpacc.pythonanywhere.com/"

class API{
    register(email, password, password2, setErrorText){
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        var raw = JSON.stringify({
            "password": password,
            "email": email,
            "password2": password2
        })
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }
        fetch(`${baseUrl}user/create`, requestOptions)
            .then(response => response.text())
            .then(result => {
                result = JSON.parse(result)
                console.log(result)
                if (result.code == 200){
                }
                if (result.code == 400){
                    setErrorText(result.message)
                }
            })
            .catch(error => console.log('error', error));
    }
}

export default API