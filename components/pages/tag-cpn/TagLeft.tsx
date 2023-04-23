import { directUrlProSerResult } from '@/context/direct-url';
import { ITag } from '@/interfaces/tags';
import Link from 'next/link';
import React from 'react';
import style from "./tag-cpn.module.css"

interface TagLeftProp {
    tagChild: ITag,
    tagParent: ITag,
    type: "SERVICE" | "PRODUCT"
}

export function TagLeft(props: TagLeftProp) {
    const { tagChild, type } = props;

    let listTag = tagChild?.children

    return (
        <div className={style.tag_left_cnt}>
            <ul className={style.tag_list}>
                {
                    listTag?.map((tag: ITag, index: number) => (
                        <li key={index}>
                            <Link href={directUrlProSerResult(type, tag.name, tag.id)} >
                                <a className={style.tag_left_item}>{tag.name}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}