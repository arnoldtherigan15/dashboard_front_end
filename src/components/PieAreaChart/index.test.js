import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PieAreaChart from './index'


const orders = [
    {
        "label": "Bonds",
        "value": 30
    },
    {
        "label": "Mutualfund",
        "value": 23
    },
    {
        "label": "Unit Link",
        "value": 18
    },
    {
        "label": "Gold",
        "value": 16
    }
]

describe("PieAreaChart component render test", () => {
    test("Should render a pieChart with id pieChart", () => {
        const { container } = render(<PieAreaChart data={orders} title="Conversion"/>)
        expect(container.querySelector("#pieChart")).toBeInTheDocument()
    })
    
    test("Should render a div with className chart-title-box with props title", () => {
        const { container, getByText } = render(<PieAreaChart data={orders} title="Conversion"/>)
    
        expect(getByText("Conversion")).toBeInTheDocument()
        expect(container.querySelector(".chart-title-box")).toBeInTheDocument()
    })

    test("Should render a div with className chart-desc-box with 4 color", () => {
        const { container } = render(<PieAreaChart data={orders} title="Conversion"/>)
        expect(screen.getByRole('chart-item-0')).toHaveStyle("background-color: rgb(114, 94, 156)") //#725E9C
        expect(screen.getByRole('chart-item-1')).toHaveStyle("background-color: rgb(92, 143, 148)") //#5C8F94
        expect(screen.getByRole('chart-item-2')).toHaveStyle("background-color: rgb(235, 164, 94)") //#EBA45E
        expect(screen.getByRole('chart-item-3')).toHaveStyle("background-color: rgb(228, 234, 235)") //#E4EAEB

        expect(container.querySelector(".chart-desc-box")).toBeInTheDocument()
    })
    
})