"use client"
import Dashboard from "../components/dashboard";
import { useEffect, useRef } from "react";
import {content, futures, crypto} from "./data";
import "../css/track.css"

export default function Track(){
    const ref = useRef(null)
    useEffect(()=>{
        const script = document.createElement("script")
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
        script.innerHTML = JSON.stringify(content)
        script.async = true
        document.getElementById("tape")?.appendChild(script)
    }, [])
    useEffect(()=>{
        const script2 = document.createElement("script")
        script2.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
        script2.innerHTML = JSON.stringify(futures)
        script2.async = true
        document.getElementById("cross")?.appendChild(script2)
    }, [])
    useEffect(()=>{
        const script3 = document.createElement("script")
        script3.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js"
        script3.innerHTML = JSON.stringify(crypto)
        script3.async = true
        document.getElementById("crypto")?.appendChild(script3)
    }, [])
    return (
        <Dashboard heading="Track">
            <div className="track-content">
                <div id="tape"></div>
                <div className="cross-crypto">
                    <div id="cross"></div>
                    <div id="crypto"></div>
                </div>
            </div>
        </Dashboard>
    )
}