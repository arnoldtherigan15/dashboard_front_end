import { useState, useEffect } from 'react'
import { Navbar, DateSubMenu, PieAreaChart, AreaChart } from './components'
import useFetch from './hooks/useFetch'
import groupingConversion from './helper/groupingConversion.js'
import './styles/global.css'
export default function App() {
    const [user, setUser] = useState({
        name: 'Rehnart H',
        address: "Grogol, Jakarta"
    })
    const [ orders, setOrders ] = useState([])
    const [ data, isLoading ] = useFetch("https://ae1cdb19-2532-46fa-9b8f-cce01702bb1e.mock.pstmn.io/takehometest/web/dashboard")

    const onSubmit = (e, text) => {
        e.preventDefault()
    }

    useEffect(() => {
        setOrders(data?.data?.orders)
    }, [data])

    return (
        <>
            <Navbar onSubmit={onSubmit} user={user} isNotifExist/>
            <DateSubMenu/>
            {
                isLoading ? (
                    <h1>Loading .... </h1>
                ) : (
                    <>
                        {
                            orders?.length && (
                                <PieAreaChart data={groupingConversion(orders)}/>
                            )
                        }
                        
                        <AreaChart/>
                    </>
                )
            }

        </>
    )
}