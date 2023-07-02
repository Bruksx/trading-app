const baseUrl = "https://mrpacc.pythonanywhere.com/"

class API{
    token(){
        return localStorage.getItem("token")
    }

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
        return json
    }

    async dashboard(token, setBalance, setOrders, setTotalProfit, setTopTraders){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxMDMyODEwODgxNCwiaWF0IjoxNjg4MTA4ODE0LCJqdGkiOiIzOGY1NGFkNmRkN2I0ODVhYTg4NGY4NmI4MDc4ODNkMiIsInVzZXJfaWQiOjF9.v8e9jCO4zLdVN9AmtxTl5RS_A8qNlWc6n5fv9sZIHHQ");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        return fetch("https://mrpacc.pythonanywhere.com/user/dashboard", requestOptions)
            .then(response => response.text())
            .then((result)=> {
                result = JSON.parse(result)
                console.log(result)
                setBalance(result.user.balance)
                setOrders(result.orders)
                setTotalProfit(result.profits)
                setTopTraders(result.top_traders)
                return result
            })
        }

    invest(amount, password, setErrorText, setErrorTextClass, setBalance, balance){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${this.token()}`);
        var raw = JSON.stringify({
            "amount": amount,
            "password": password,
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch(`${baseUrl}user/invest`, requestOptions)
            .then(response => response.text())
            .then(result => {
                result = JSON.parse(result)
                if (result.code == 200){
                    setErrorText(result.message)
                    setErrorTextClass("text-green-400")
                    setBalance(balance - amount)
                    this.updateUser()
                }
                if (result.code == 400){
                    setErrorTextClass("text-red-400")
                    setErrorText(result.message)
                }
            })
        }
    
    updateUser(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${this.token()}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${baseUrl}user/details`, requestOptions)
            .then(response => response.text())
            .then(result => {
                let user = JSON.parse(result).user
                console.log(user)
                localStorage.setItem("user", JSON.stringify(user))
            })
    }

    investments(setInvestments, investments){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${this.token()}`)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${baseUrl}user/investments`, requestOptions)
            .then(response => response.text())
            .then(result => {
                result = JSON.parse(result)
                setInvestments(result.investments)
            })
            .catch(error => console.log('error', error));
    }

    editAcount(first_name, middle_name, last_name, address, phone_number, bank_name, account_number){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${this.token()}`);

        var raw = JSON.stringify({
            "first_name": first_name,
            "middle_name": middle_name,
            "last_name": last_name,
            "address": address,
            "phone_number":phone_number,
            "bank_name": bank_name,
            "account_number":account_number,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${baseUrl}user/edit`, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
        })
        .catch(error => console.log('error', error));
    }
}

export default API