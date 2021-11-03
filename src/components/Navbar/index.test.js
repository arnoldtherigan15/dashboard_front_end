import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from './index'

// test("Should render an nav with id nav", () => {
//     const { container } = render(<Navbar/>)
//     expect(container.querySelector("#nav")).toBeInTheDocument()
// })

test("Should handle input onChange correctly", () => {
    const handleSubmit = jest.fn()
    render(<Navbar onSubmit={handleSubmit}/>)
    const input = screen.getByRole('searchInput')
    fireEvent.change(input, {target: {value: 'something'}})
    expect(input.value).toBe('something')
})

test("Should handle form onSubmit correctly", () => {
    const handleSubmit = jest.fn()
    render(<Navbar onSubmit={handleSubmit}/>)
    const form = screen.getByRole('searchForm')
    fireEvent.submit(form)
    expect(handleSubmit).toHaveBeenCalledTimes(1)
})