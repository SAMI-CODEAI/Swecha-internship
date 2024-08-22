import React from 'react'
import {useState} from 'react'
function Chat() {
    const [messages, setmessages] = useState([])
    const [input, setinput] = useState('')

    const handleSubmit=(e)=>{
      e.preventDefault()
      if (input.trim()){
        setmessages([...messages,{text:input,id:Date.now()}])
      }
    }
  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      <header className='bg-blue-600 text-white p-4 shadow-md'>
        <h1 className='text-lg font-semibold'>Chat</h1>
      </header>
      <main>
        <div>
            {messages.map((msg)=>(
              <div>
                {msg.text}
              </div>
            ))}
        </div>
      </main>
      <footer>
            <form action="">
              <input type="text" value={input} onChange={(e)=>setinput(e.target.value)} placeholder='Type anything'/>
              <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:ring'>Send</button>
            </form>
      </footer>
    </div>
  )
}

export default Chat
