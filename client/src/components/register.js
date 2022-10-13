import { StrictMode, useState, useEffect } from "react";
import "./App.css";
import Navigation from "./navigation";
import Chat from "./chat";

export default function Register() {
    const [name, setName] = useState("");
    const [registered, setRegistered] = useState(false);
    const submit = (e)=>{
        e.preventDefault();
        if(name !== ""){
            setRegistered(true);
        }
    }
    useEffect(()=>{

    });
    return (
        <StrictMode>
            <Navigation/>
            {
                !registered && 
                <div className="register-container"> 
                    <form onSubmit={submit} className="register-form">
                        <label>Escribe aqui tu nombre</label>
                        <input value={name} onChange={(e)=>setName(e.target.value)}/>
                        <button>Ir al chat</button>
                    </form>
                </div>
            }
            {
                registered && <Chat name={name}/>
            }
        </StrictMode>
    );
}
