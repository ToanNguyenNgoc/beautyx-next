import React from 'react';
import style from "./loading.module.css"

interface LoadingGridProps {
    grid?: boolean | number
}

export function LoadingGrid(props: LoadingGridProps) {
    const { grid } = props;
    let listGrid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    if (grid === 2) {
        listGrid = [1, 2, 3, 4, 5, 6]
    }
    return (
        <ul
            style={grid ? { gridTemplateColumns: `repeat(${grid}, 1fr)` } : {}}
            className={style.load_grid_cnt_org}
        >
            {
                listGrid.map(i => (
                    <li
                        style={grid === 1 ? { height: "107px" } : {}}
                        key={i} className={style.load_grid_item}
                    >
                        <div className={style.load_grid_item_img}>
                        </div>
                        {
                            (!grid || grid > 1) &&
                            <div className={style.load_grid_item_de}>
                                <div className={style.name}>
                                </div>
                                <div className={style.de_item}>
                                </div>
                                <div className={style.de_item}>
                                </div>
                                <div className={style.de_item}>
                                </div>
                                <div className={style.de_item}>
                                </div>
                            </div>
                        }
                    </li>
                ))
            }
        </ul>
    );
}