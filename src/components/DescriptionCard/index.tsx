import { HTMLAttributes } from 'react';
import './style.css';

export interface IDescriptionCardProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    icon?: string;
    value: string;
    small: string;
}

export function DescriptionCard ({ title, icon, value, small, ...rest }: IDescriptionCardProps) {
    return (
        <article className="description-card" {...rest}>
            <header className="description-card__header">
                <span className="description-card__header__title">{title}</span>
                {icon && <img className="description-card__header__icon" src={icon} alt="Icon" /> }
            </header>

            <main className="description-card__content">
                <strong
                    className="description-card__content__value"
                >
                    {value}
                </strong>
                <small className="description-card__content__small">{small}</small>
            </main>
        </article>
    )
}