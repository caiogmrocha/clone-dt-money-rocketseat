import "@testing-library/jest-dom"
import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import { App } from './App'

describe('App Component', () => {
    it('should be able to render', () => {
        const { getByText } = render(<App />)

        expect(getByText('Hello World!')).toBeInTheDocument()
    })
})