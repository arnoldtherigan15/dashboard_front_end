// import React from 'react'
// import { render, screen } from '@testing-library/react'
// import '@testing-library/jest-dom'
// import Badge from './index'


// const orders = [
//     {
//         "order_id": "b98e3e75-ef0e-4562-b59a-edaea5b8d3c4",
//         "start_date": "2020-01-03 11:17:22",
//         "due_date": "2020-02-03 11:17:22",
//         "full_name": "Caitlyn Aufderhar",
//         "location": "West Bradfordview, Swaziland",
//         "status": "canceled",
//         "conversion_item": "Mutualfund",
//         "conversion_revenue": "321"
//     },
//     {
//         "order_id": "dac4d5bf-0214-40e3-9f6e-06f8f51cdc36",
//         "start_date": "2020-01-05 09:05:12",
//         "due_date": "2020-02-05 09:05:12",
//         "full_name": "Mrs. Curtis Emard",
//         "location": "Lake Shawn, French Southern Territories",
//         "status": "pending",
//         "conversion_item": "Unit Link",
//         "conversion_revenue": "906"
//     }
// ]

// describe("Badge component render test", () => {
//     test("Should render a div with class badge", () => {
//         const { container } = render(<Badge data={orders} title="Users"/>)
//         expect(container.querySelector("#polarChart")).toBeInTheDocument()
//     })
    
//     test("Should render a div with className chart-title-box with props title", () => {
//         const { container, getByText } = render(<Badge data={orders} title="Users"/>)
    
//         expect(getByText("Users")).toBeInTheDocument()
//         expect(container.querySelector(".chart-title-box")).toBeInTheDocument()
//     })

//     test("Should render a div with className chart-desc-box with 4 color", () => {
//         const { container } = render(<Badge data={orders} title="Users"/>)
//         expect(screen.getByRole('chart-item-0')).toHaveStyle("background-color: rgb(114, 94, 156)") //#725E9C
//         expect(screen.getByRole('chart-item-1')).toHaveStyle("background-color: rgb(92, 143, 148)") //#5C8F94
//         expect(screen.getByRole('chart-item-2')).toHaveStyle("background-color: rgb(235, 164, 94)") //#EBA45E
//         expect(screen.getByRole('chart-item-3')).toHaveStyle("background-color: rgb(228, 234, 235)") //#E4EAEB

//         expect(container.querySelector(".chart-desc-box")).toBeInTheDocument()
//     })
    
// })