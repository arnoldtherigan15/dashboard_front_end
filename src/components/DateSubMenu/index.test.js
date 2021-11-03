import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import DateSubMenu from './index'


describe("DateSubMenu component render test", () => {
    test("Should render a div with className dateSubMenu", () => {
        const { container } = render(<DateSubMenu/>)
        expect(container.querySelector(".date-sub-menu")).toBeInTheDocument()
    })
})