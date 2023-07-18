"use client"
import Dashboard from "../components/dashboard"
import useLocalStorage from "../utils/uselocalstorage"
import "../css/toogle.css" 
import Toggle from "react-toggle";

function Settings(){
    const [theme, setTheme] = useLocalStorage("theme")
    console.log(theme)
    const defaultChecked = theme !== "dark"
    console.log(defaultChecked)
    function handleChage(){
        if (theme == "dark"){
            setTheme("light")
        }
        else{
            setTheme("dark")
        }
    }
    return (
        <Dashboard heading="Settings">
            <div>
                <div>
                    <p>Switch Theme</p>
                    <Toggle icons={false} checked={defaultChecked} onChange={handleChage}/>
                </div>
            </div>

        </Dashboard>
    )
}

export default Settings