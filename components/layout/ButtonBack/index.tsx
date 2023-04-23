import React from 'react';
import Image from "next/image"
import Router from "next/router"
import icon from "../../../src/constants/icon"
import style from "./button-back.module.css"

interface ButtonBackProps {
    onClick?: () => void,
    layout?: "fixed"
}

export function ButtonBack(props: ButtonBackProps) {
    const { onClick, layout } = props;
    const onCBackClick = () => {
        if (onClick) return onClick()
        Router.back()
    }
    return (
        <div
            onClick={onCBackClick}
            className={`${style.container} ${layout === "fixed" && style.fixed}`}
        >
            <Image
                src={icon.chevronLeft} alt=""
                layout="fixed" width={30} height={30}
            />
        </div>
    );
}