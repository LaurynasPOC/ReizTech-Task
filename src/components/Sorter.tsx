import React from 'react'
import { Select } from './styled'
import { SortType } from './types'
import { Country } from './types'

interface Props {
    countries: Country[]
    sortOption: SortType
    setSortOption: (newSortOption: SortType) => void
}

const Sorter: React.FC<Props> = ({ sortOption, setSortOption, countries }) => {
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value as SortType);
    }

    if (sortOption === 'asc') {
        countries.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } else {
        countries.sort((a, b) => (a.name < b.name) ? 1 : -1);
    }

    return (
        <Select width={'50%'} value={sortOption} onChange={handleSortChange}>
            <option value={'asc'}>ASC</option>
            <option value={'desc'}>DESC</option>
        </Select>
    )
}

export default Sorter
