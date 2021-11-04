import './index.css'
import Badge from './Badge'
import { getFormatDate } from '../../helper'

export default function Table({ data,title }) {
    return (
        <div className="table-container" style={{ width: "100%" }}>
            <div className="table-title-box">
                <h2>{title}</h2>
            </div>
            <div style={{ "overflow":"auto", width: "100%" }}>
                <table id="orders">
                    <thead>
                        <tr>
                            <td>Order Number</td>
                            <td>Status</td>
                            <td>Operator</td>
                            <td>Location</td>
                            <td>Start Date</td>
                            <td>Due Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(order => {
                                return (
                                <tr key={ order.order_id }>
                                    <td>#{ order.order_id.slice(0,4) }</td>
                                    <td>
                                        <Badge status={ order.status } />
                                    </td>
                                    <td>{ order.full_name }</td>
                                    <td>{ order.location }</td>
                                    <td>{ getFormatDate(order.start_date) }</td>
                                    <td>{ getFormatDate(order.due_date) }</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
