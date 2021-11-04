import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Table from './index'


const orders = [
    {
        "order_id": "b98e3e75-ef0e-4562-b59a-edaea5b8d3c4",
        "start_date": "2020-01-03 11:17:22",
        "due_date": "2020-02-03 11:17:22",
        "full_name": "Caitlyn Aufderhar",
        "location": "West Bradfordview, Swaziland",
        "status": "canceled",
        "conversion_item": "Mutualfund",
        "conversion_revenue": "321"
    },
    {
        "order_id": "dac4d5bf-0214-40e3-9f6e-06f8f51cdc36",
        "start_date": "2020-01-05 09:05:12",
        "due_date": "2020-02-05 09:05:12",
        "full_name": "Mrs. Curtis Emard",
        "location": "Lake Shawn, French Southern Territories",
        "status": "pending",
        "conversion_item": "Unit Link",
        "conversion_revenue": "906"
    }
]

describe("Table component render test", () => {
    test("Should render a table with following table head", () => {
        const { container, getByText } = render(<Table data={orders} title="Orders"/>)
        expect(container.querySelector("#orders")).toBeInTheDocument()
        expect(getByText("Order Number")).toBeInTheDocument()
        expect(getByText("Status")).toBeInTheDocument()
        expect(getByText("Operator")).toBeInTheDocument()
        expect(getByText("Location")).toBeInTheDocument()
        expect(getByText("Start Date")).toBeInTheDocument()
        expect(getByText("Due Date")).toBeInTheDocument()
    })
    
    test("Should render a div with className table-title-box with props title", () => {
        const { container, getByText } = render(<Table data={orders} title="Orders"/>)
    
        expect(getByText("Orders")).toBeInTheDocument()
        expect(container.querySelector(".table-title-box")).toBeInTheDocument()
    })
    
})