import { ButtonHTMLAttributes } from 'react';
import './style.css';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'red' | 'green';
    children?: string;
}

export function Button({ children, variant, ...rest }: IButtonProps) {
    return (
        <button
            className={[
                'button',
                'button--' + variant
            ].join(' ')}
            data-testid="button"
            {...rest}
        >
            {children ?? 'button'}
        </button>
    )
}