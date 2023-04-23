import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppProvider';
import { ITag } from '../../../interfaces/tags';
import style from "./filter-tags.module.css"

interface FilterTagsProps {
    onChangeTagItem?: (name: string) => void,
    tagArr?: string[]
}

export function FilterTags(props: FilterTagsProps) {
    const { tags } = useContext(AppContext);
    const { onChangeTagItem, tagArr } = props;
    const onTagItem = (name: string) => {
        if (onChangeTagItem) onChangeTagItem(name)
    }
    return (
        <>
            <span className={style.section_title}>Danh mục</span>
            <ul className={style.tag_list}>
                {
                    tags.map((item: ITag) => (
                        <li
                            style={
                                tagArr?.includes(item.name) ? { color: "var(--bg-white)", backgroundColor: "var(--purple)" } : {}
                            }
                            onClick={() => onTagItem(item.name)}
                            key={item.id} className={style.tag_item_cnt}
                        >
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}