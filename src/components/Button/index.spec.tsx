import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Button } from '.'

describe('Button Component', () => {
    it('should be able to render', () => {
        const { getByTestId } = render(<Button />)

        expect(getByTestId('button')).toBeInTheDocument()
    })

    it('should display children property', () => {
        const { getByTestId } = render(<Button>Any Text</Button>)

        expect(getByTestId('button')).toHaveTextContent('Any Text')
    })

    it('should display default children property value if not given', () => {
        const { getByTestId } = render(<Button></Button>)

        expect(getByTestId('button')).toHaveTextContent('button')
    })

    it('should display with the default styles', () => {
        const { getByTestId } = render(<Button>Any Text</Button>)

        expect(getByTestId('button')).toHaveClass('button')
    })

    it('should display with the green variant', () => {
        const { getByTestId } = render(<Button variant="green">Any Text</Button>)

        expect(getByTestId('button')).toHaveClass('button--green')
    })

    it('should display with the red variant', () => {
        const { getByTestId } = render(<Button variant="red">Any Text</Button>)

        expect(getByTestId('button')).toHaveClass('button--red')
    })

    it('should handle click event', () => {
        const clickHandler = vi.fn()
        const { getByTestId } = render(<Button onClick={clickHandler}>Any Text</Button>)

        fireEvent.click(getByTestId('button'))

        expect(clickHandler).toHaveBeenCalledTimes(1)
    })
})