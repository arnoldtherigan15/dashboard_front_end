import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Calendar from './index'

describe("Calendar component render test", () => {
    test("Should render a div with className calendar-container", () => {
        const { container } = render(<Calendar/>)
        expect(container.querySelector(".calendar-container")).toBeInTheDocument()
    })
})