import React, { ReactElement } from 'react';
import style from "./loading.module.css"

interface LoadingGrid2Props {
    itemNumber?: number,
    grid?: number
}

export function LoadingGrid2(props: LoadingGrid2Props) {
    const { itemNumber, grid } = props;
    const item = itemNumber ?? 10
    const renderGridChild = () => {
        let GridChildElement: ReactElement[] = []
        for (var i = 0; i < item; i++) {
            const newChild =
                <li className={style.grid_2_cnt_item} key={i}>
                </li>
            GridChildElement.push(newChild)
        }
        return GridChildElement
    }
    return (
        <ul
            className={style.grid_2_cnt}
            style={grid ? {
                gridTemplateColumns: `repeat(${grid}, 1fr)`
            }:{}}
        >
            {renderGridChild()}
        </ul>
    );
}