import './App.css'
import imgCalendarIcon from './assets/images/calendar-icon.svg'
import imgDownIcon from './assets/images/down-icon.svg'
import imgLogo from './assets/images/logo.svg'
import imgSearchIcon from './assets/images/search-icon.svg'
import imgTagIcon from './assets/images/tag-icon.svg'
import imgUpIcon from './assets/images/up-icon.svg'
import { Button } from './components/Button'
import { DescriptionCard } from './components/DescriptionCard'
import { TableItem } from './components/TableItem'

export interface IDescriptionCardData {
  title: string;
  icon?: string;
  value: string;
  small: string;
}

export interface ITableItemsData {
  title: string;
  value: string;
  type: 'input' | 'output';
  details: Array<{
    label: string;
    icon: string;
  }>
}

export function App() {
  const descriptionCardsData: IDescriptionCardData[] = [
    {
      title: 'Entrada',
      icon: imgUpIcon,
      value: '+ R$ 17.400,00',
      small: 'Última entrada em 13 de abril',
    },
    {
      title: 'Entrada',
      icon: imgDownIcon,
      value: '- R$ 1.259,00',
      small: 'Última saída em 10 de abril',
    },
    {
      title: 'Total',
      value: 'R$ 16.141,00',
      small: 'Valor total em conta.',
    },
  ]

  const tableItemsData: ITableItemsData[] = [
    {
      title: 'Desenvolvimento de site',
      value: 'R$ 12.000,00',
      type: 'input',
      details: [
        {
          icon: imgTagIcon,
          label: 'Venda'
        },
        {
          icon: imgCalendarIcon,
          label: '13/04/2022'
        },
      ]
    },
    {
      title: 'Hamburguer',
      value: '- R$ 59,00',
      type: 'output',
      details: [
        {
          icon: imgTagIcon,
          label: 'Alimentação'
        },
        {
          icon: imgCalendarIcon,
          label: '10/04/2022'
        },
      ]
    },
    {
      title: 'Aluguel do apartamento',
      value: '- R$ 1.200,00',
      type: 'output',
      details: [
        {
          icon: imgTagIcon,
          label: 'Cassa'
        },
        {
          icon: imgCalendarIcon,
          label: '10/04/2022'
        },
      ]
    },
  ]

  return (
    <div className="container">
        <header className="header">
          <img className="header__logo" src={imgLogo} alt="logo" />
          <Button variant="green">Nova transação</Button>
        </header>
       
        <main className="main">
          <div className="description-card-container">
            {descriptionCardsData.map(descriptionCardData => (
              <DescriptionCard
                title={descriptionCardData.title}
                value={descriptionCardData.value}
                icon={descriptionCardData.icon}
                small={descriptionCardData.small}
              />
            ))}
          </div>

          <section className="transactions-table-container">
            <header className="transactions-table-container__header">
              <span className="transactions-table-container__title">Transações</span>
              <span className="transactions-table-container__items-amount">4 itens</span>
            </header>

            <form className="transactions-table-container__search-form">
              <input
                type="text"
                className="transactions-table-container__search-input"
                placeholder="Busque uma transação"
              />
              <button className="transactions-table-container__search-button">
                <img src={imgSearchIcon} alt="Search Icon" />
              </button>
            </form>

            <main className="transactions-table-container__body">
              {tableItemsData.map(tableItemData => (
                <TableItem
                  title={tableItemData.title}
                  type={tableItemData.type}
                  details={tableItemData.details}
                  value={tableItemData.value}
                />
              ))}
            </main>
          </section>
        </main>
    </div>   
  )
}
