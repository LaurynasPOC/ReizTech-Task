import React from 'react'
import { Country } from '../types'
import { Table } from '../styled'

interface Props {
    currentItems: Country[]
}

const Items: React.FC<Props> = ({ currentItems }) =>
    <Table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Region</th>
                <th>Area</th>
            </tr>
        </thead>
        <tbody>
            {currentItems.map(({ name, region, area }, i) =>
                <tr key={i}>
                    <td>{name}</td>
                    <td>{region}</td>
                    <td>{area}</td>
                </tr>
            )}
        </tbody>
    </Table>


export default Items
