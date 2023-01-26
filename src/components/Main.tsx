import React, { useState } from 'react';
import PaginatedItems from './pagination/PaginatedItems';
import Sorter from './Sorter';
import RegionFilter from './RegionFilter';
import AreaFilter from './AreaFilter';
import Loader from './Loader';
import { SortType, RegionType, AreaType, Country } from './types';
import { Container } from './styled';

export interface Props {
    countries: Country[];
}

const Main: React.FC<Props> = ({ countries }) => {
    const [sortOption, setSortOption] = useState<SortType>('asc');
    const [filterRegion, setFilterRegion] = useState<RegionType>('all');
    const [filterArea, setFilterArea] = useState<AreaType>('all')

    if (filterRegion !== 'all') {
        const filteredRegion = countries.filter((country) =>
            country.region.toLowerCase().includes(filterRegion.toLocaleLowerCase())
        );
        countries = filteredRegion
    }

    if (filterArea === 'smaller') {
        countries = countries.filter(({ area }) => area < 65300)
    }
    if (filterArea === 'bigger') {
        countries = countries.filter(({ area }) => area > 65300)
    }

    return (
        <Container>
            <Sorter countries={countries} setSortOption={setSortOption} sortOption={sortOption} />
            <RegionFilter filterRegion={filterRegion} setFilterRegion={setFilterRegion} />
            <AreaFilter filterArea={filterArea} setFilterArea={setFilterArea} />
            {countries ? <PaginatedItems itemsPerPage={15} countries={countries} /> : <Loader />}
        </Container>
    )
}

export default Main
