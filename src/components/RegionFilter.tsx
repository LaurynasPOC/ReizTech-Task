import React from 'react'
import { Select } from './styled'
import { RegionType } from './types'

interface Props {
    filterRegion: RegionType
    setFilterRegion: (newFilterRegion: RegionType) => void
}

const RegionFilter: React.FC<Props> = ({ filterRegion, setFilterRegion }) => {

    const handleFilterRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterRegion(event.target.value as RegionType);
    }

    return (
        <Select width={'25%'} value={filterRegion} onChange={handleFilterRegionChange}>
            <option value={'all'}>All</option>
            <option value={'africa'}>Africa</option>
            <option value={'americas'}>Americas</option>
            <option value={'asia'}>Asia</option>
            <option value={'europe'}>Europe</option>
            <option value={'oceania'}>Oceania</option>
            <option value={'polar'}>Polar</option>
        </Select>
    )
}

export default RegionFilter
