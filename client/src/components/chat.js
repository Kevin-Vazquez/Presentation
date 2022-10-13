import { StrictMode, useState, useEffect } from "react";
import { MdSend } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import socket from "./socket";

export default function Chat({ name }) {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const submit = (e)=>{
        e.preventDefault();
        if(message !== ""){
            socket.emit("message", name, message);
            setMessage("");
        }
    }
    useEffect(()=>{
        socket.emit("connected", name);
    }, [name]);
    
    useEffect(()=>{
        socket.on("messages", (message)=>{
            setMessages([...messages, message]);
        });
        return ()=>{socket.off()}
    }, [messages]);

    return (
        <StrictMode>
            <div className="chat">{messages.map((e, i)=><p key={i}><b>{e.name}: </b>{e.message}</p>)}</div>
            <button className="faces-btn btn"><BsEmojiSmile/></button>
            <form onSubmit={submit} className="chat-form">
                <input value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Escribe aqui tu mensaje"/>
                <button className="send-btn btn"><MdSend/></button>
            </form>
        </StrictMode>
    );    
};