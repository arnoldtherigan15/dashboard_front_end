import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PolarAreaChart from './index'


const userCats = [
    {
        "label": "risk_averse",
        "value": 445
    },
    {
        "label": "conservative",
        "value": 242
    },
    {
        "label": "moderate",
        "value": 15
    },
    {
        "label": "risk_taker",
        "value": 7
    }
]

describe("PolarAreaChart component render test", () => {
    test("Should render a polarChart with id polarChart", () => {
        const { container } = render(<PolarAreaChart data={userCats} title="Users"/>)
        expect(container.querySelector("#polarChart")).toBeInTheDocument()
    })
    
    test("Should render a div with className chart-title-box with props title", () => {
        const { container, getByText } = render(<PolarAreaChart data={userCats} title="Users"/>)
    
        expect(getByText("Users")).toBeInTheDocument()
        expect(container.querySelector(".chart-title-box")).toBeInTheDocument()
    })

    test("Should render a div with className chart-desc-box with 4 color", () => {
        const { container } = render(<PolarAreaChart data={userCats} title="Users"/>)
        expect(screen.getByRole('chart-item-0')).toHaveStyle("background-color: rgb(114, 94, 156)") //#725E9C
        expect(screen.getByRole('chart-item-1')).toHaveStyle("background-color: rgb(92, 143, 148)") //#5C8F94
        expect(screen.getByRole('chart-item-2')).toHaveStyle("background-color: rgb(235, 164, 94)") //#EBA45E
        expect(screen.getByRole('chart-item-3')).toHaveStyle("background-color: rgb(228, 234, 235)") //#E4EAEB

        expect(container.querySelector(".chart-desc-box")).toBeInTheDocument()
    })
    
})