import { HTMLAttributes } from 'react';
import './style.css';

export interface ITableItemProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    value: string;
    type: 'input' | 'output';
    details: Array<{
        label: string;
        icon: string;
    }>
}

export function TableItem({ title, value, details, type, ...rest }: ITableItemProps) {
    return (
        <div className="transactions-table-container__item" {...rest}>
            <span className="transactions-table-container__item__title">
                {title}
            </span>

            {type === 'input' ? (
                <strong className="transactions-table-container__item__value transactions-table-container__item__value--green">
                    {value}
                </strong>
            ) : (
                <strong className="transactions-table-container__item__value transactions-table-container__item__value--red">
                    {value}
                </strong>
            )}

            <footer className="transactions-table-container__item__footer">
                {details.map(detail => (
                    <span className="transactions-table-container__item__detail">
                        <img src={detail.icon} alt="Icon" />
                        {detail.label}
                    </span>
                ))}
            </footer>
        </div>
    )
}