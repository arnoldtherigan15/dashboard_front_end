import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Badge from './index'

describe("Badge component render test", () => {
    test("Should render a div with backgroundColor #E59849 when status pending", () => {
        const { container, getByText } = render(<Badge status="pending"/>)
        expect(container.querySelector(".badge")).toBeInTheDocument()
        expect(screen.getByRole('badge')).toHaveStyle("background-color: #E59849")
        expect(getByText("pending")).toBeInTheDocument()
    })
    
    test("Should render a div with backgroundColor #789764 when status completed", () => {
        const { container, getByText } = render(<Badge status="completed"/>)
    
        expect(container.querySelector(".badge")).toBeInTheDocument()
        expect(screen.getByRole('badge')).toHaveStyle("background-color: #789764")
        expect(getByText("completed")).toBeInTheDocument()
    })

    test("Should render a div with backgroundColor #D66D4B when status canceled", () => {
        const { container, getByText } = render(<Badge status="canceled"/>)

        expect(container.querySelector(".badge")).toBeInTheDocument()
        expect(screen.getByRole('badge')).toHaveStyle("background-color: #D66D4B")
        expect(getByText("canceled")).toBeInTheDocument()
    })
    
})