import { useState } from 'react'
import { Navbar } from './components'
import './styles/global.css'
export default function App() {
    const [user, setUser] = useState({
        name: 'Rehnart H',
        address: "Grogol, Jakarta"
    })
    const onSubmit = (e, text) => {
        e.preventDefault()
    }
    return (
        <>
            <Navbar onSubmit={onSubmit} user={user} isNotifExist/>
        </>
    )
}