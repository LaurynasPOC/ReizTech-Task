import React from 'react'
import { Select } from './styled'
import { AreaType } from './types'

interface Props {
    filterArea: AreaType
    setFilterArea: (newFilterArea: AreaType) => void
}

const AreaFilter: React.FC<Props> = ({ filterArea, setFilterArea }) => {
    const handleFilterAreaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterArea(event.target.value as AreaType)
    }

    return (
        <Select width={'25%'} value={filterArea} onChange={handleFilterAreaChange}>
            <option value={'all'}>All</option>
            <option value={'smaller'}>Smaller than Lithuania</option>
            <option value={'bigger'}>Bigger than Lithuania</option>
        </Select>
    )
}

export default AreaFilter
