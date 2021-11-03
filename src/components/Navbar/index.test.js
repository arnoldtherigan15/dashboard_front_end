import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from './index'

const handleSubmit = jest.fn()
const user = {
    name: "Reinhart H",
    address: "Kemang, Jakarta"
}

describe("Navbar component render test", () => {
    test("Should render a div with className notif-dot when isNotifExists is true", () => {
        const { container } = render(<Navbar onSubmit={handleSubmit} isNotifExists user={user}/>)
        expect(container.querySelector(".notif-dot")).toBeInTheDocument()
    })
    
    test("Should render a div with className nav-user-info-main with props user name and address", () => {
        const { container, getByText } = render(<Navbar onSubmit={handleSubmit} isNotifExists user={user}/>)
    
        expect(getByText(user.name)).toBeInTheDocument()
        expect(getByText(user.address)).toBeInTheDocument()
        expect(container.querySelector(".nav-user-info-main")).toBeInTheDocument()
    })
    
    test("Should handle input onChange correctly", () => {
        const handleSubmit = jest.fn()
        render(<Navbar onSubmit={handleSubmit} isNotifExists user={user}/>)
        const input = screen.getByRole('searchInput')
        fireEvent.change(input, {target: {value: 'something'}})
        expect(input.value).toBe('something')
    })
    
    test("Should handle form onSubmit correctly", () => {
        const handleSubmit = jest.fn()
        render(<Navbar onSubmit={handleSubmit} isNotifExists user={user}/>)
        const form = screen.getByRole('searchForm')
        fireEvent.submit(form)
        expect(handleSubmit).toHaveBeenCalledTimes(1)
    })
})