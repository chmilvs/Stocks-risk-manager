// import React, {useEffect, useState} from 'react';
// import {Link} from "react-router-dom";
//
//
// function ChatWindow({socket}) {
//     const [messages, setMessages] = useState([])
//
//     useEffect(() => {
//         socket.on("message", (data) => {
//             let temp = messages;
//             temp.push({
//                 userId: data.userId,
//                 username: data.username,
//                 text: data.text,
//             });
//             setMessages([...temp]);
//             // setMessages([...Object.values(data)])
//         });
//         console.log(messages)
//     }, [socket]);
//     const sendData = (e) => {
//         e.preventDefault()
//         let message = e.target.message
//         const text = message.value
//         console.log(text)
//         socket.emit("chat", text);
//     }
//
//     return (
//         <div style={{margin:"auto",textAlign:"center"}}>
//             <form style={{textAlign:"center"}} onSubmit={sendData}>
//                 <textarea name={'message'}/>
//                 <input type={'submit'}/>
//             </form>
//             <div style={{maxHeight:"20vh",overflowY:"scroll"}}>
//                 {messages&& messages.map(el => {
//                     return <section key={Math.random()}>
//                     <p>{el.username}</p>
//                     <p>{el.text}</p>
//                     </section>
//                 })}
//             </div>
//             <div>
//
//                 {/*<Link to={}>Комната</Link>*/}
//             </div>
//         </div>
//             );
//             }
//             export default ChatWindow;