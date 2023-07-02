import { redirect } from "next/navigation"

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
        return json
    }

    async dashboard(token, setBalance, setOrders, setTotalProfit, setTopTraders){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

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

    invest(amount, password, setErrorText, setErrorTextClass, setBalance, balance, setShow3Dots){
        setShow3Dots(true)
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
                    setShow3Dots(false)
                }
                if (result.code == 400){
                    setErrorTextClass("text-red-400")
                    setErrorText(result.message)
                    setShow3Dots(false)
                }
            })
        }
    
    updateUser(token, setUser){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

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
                //localStorage.setItem("user", JSON.stringify(user))
                setUser(JSON.parse(user))
            })
    }

    investments(token, setInvestments){
        //console.log("here2")
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`)

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
                //console.log(result.investments)
            })
            .catch(error => console.log('error', error));
    }

    editAcount(token, first_name, middle_name, last_name, address, phone_number, bank_name, account_number, setShow3Dots){
        setShow3Dots(true)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

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
            setShow3Dots(false)
            redirect("/profile")
        })
        .catch(error => console.log('error', error));
    }
}

export default API