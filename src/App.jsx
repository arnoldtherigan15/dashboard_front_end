import { useState, useEffect } from 'react'
import { Navbar, DateSubMenu, PieAreaChart, AreaChart, PolarAreaChart, Table, Calendar } from './components'
import useFetch from './hooks/useFetch'
import { groupingConversion, groupingUserCat, getRevenue } from './helper'
import './styles/global.css'
export default function App() {
    const [user, setUser] = useState({
        name: 'Rehnart H',
        address: "Grogol, Jakarta"
    })
    const [ orders, setOrders ] = useState([])
    const [ userCat, setUserCat ] = useState({})
    const [ data, isLoading ] = useFetch("https://ae1cdb19-2532-46fa-9b8f-cce01702bb1e.mock.pstmn.io/takehometest/web/dashboard")

    const onSubmit = (e, text) => {
        e.preventDefault()
    }

    useEffect(() => {
        setOrders(data?.data?.orders)
        setUserCat(data?.data?.user_category)
    }, [data])

    return (
        <>
            <Navbar onSubmit={onSubmit} user={user} isNotifExist/>
            <DateSubMenu/>
            {
                isLoading ? (
                    <h1>Loading .... </h1>
                ) : (
                    <main>
                        <section className="chart-section">
                            {
                                orders?.length && (
                                    <PieAreaChart data={groupingConversion(orders)} title="Conversion"/>
                                )
                            }
                            {
                                Object.keys(userCat).length && (
                                    <PolarAreaChart title="Users" data={groupingUserCat(userCat)}/>
                                )
                            }
                            {
                                orders?.length && (
                                    <AreaChart data={getRevenue(orders)} title="Revenue"/>
                                )
                            }
                        </section>
                        <section className="table-section">
                            <Calendar/>
                            {
                                orders?.length && (
                                    <Table data={orders} title="Orders"/>
                                )
                            }
                        </section>
                    </main>
                )
            }

        </>
    )
}