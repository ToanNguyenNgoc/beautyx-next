import React from 'react';
import style from "./filter-priority.module.css"

interface FilterPriorityProps {
    onChangeSort?: (sort: string) => void,
    value?: string
}

export function FilterPriority(props: FilterPriorityProps) {
    const { onChangeSort, value } = props;
    // console.log(svalue)
    const sorts = [
        { title: "Gần bạn", query: "location" },
        { title: "Phổ biến", query: "-priority" },
        { title: "Được yêu thích", query: "-favorites_count" },
    ]
    const onChange = (query: string) => {

        if (onChangeSort) {
            if (value === query) {
                onChangeSort("")
            } else {
                onChangeSort(query)
            }
        }
    }
    return (
        <>
            <span className={style.filter_title}>
                Sắp xếp theo
            </span>
            <div className={style.filter_sort_body}>
                <ul className={style.sorts_list}>
                    {
                        sorts.map((item) => (
                            <li
                                onClick={() => onChange(item.query)}
                                key={item.query} className={style.sort_item}
                            >
                                <div
                                    style={item.query === value ?
                                        { border: "solid 1px var(--purple)" } : {}}
                                    className={style.sort_item_check}
                                >
                                    {
                                        item.query === value &&
                                        <span className={style.sort_item_check_child}></span>
                                    }
                                    {/* <span className={style.sort_item_check_child}></span> */}
                                </div>
                                <span className={style.sort_item_name}>
                                    {item.title}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}