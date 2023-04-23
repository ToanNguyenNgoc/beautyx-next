import React from 'react';
import { CircularProgress } from '@mui/material';
import Image from 'next/image';
import style from "./button.module.css";

interface IProps {
    icon?: string
    loading?: boolean,
    elementType?: "div",
    title?: string,
    onClick?: () => void,
    type?: "button" | "submit",
    iconSize?: number,
    className?: string
}

export function ButtonLoading(props: IProps) {
    const {
        loading,
        title,
        onClick,
        type,
        elementType,
        icon,
        iconSize,
        className
    } = props;
    //const loading = true
    return (
        <>
            {
                !elementType ?
                    <button
                        disabled={loading === true}
                        className={`${style.btn_loading} ${className && className}`}
                        onClick={onClick}
                        type={type ?? "button"}
                    >
                        {
                            loading &&
                            <div className={style.loading_cnt}>
                                <CircularProgress size="25px" color="primary" />
                            </div>
                        }
                        {
                            icon &&
                            <Image
                                src={icon} layout="fixed"
                                width={iconSize ?? 14} height={iconSize ?? 14} alt=""
                            />
                        }
                        {title}
                    </button>
                    :
                    <div
                        className={`${style.btn_loading} ${className && className}`}
                        onClick={onClick}
                    >
                        {
                            loading &&
                            <div className={style.loading_cnt}>
                                <CircularProgress size="25px" color="primary" />
                            </div>
                        }
                        {
                            icon &&
                            <Image
                                src={icon} layout="fixed"
                                width={iconSize ?? 14} height={iconSize ?? 14} alt=""
                            />
                        }
                        {title}
                    </div>
            }
        </>
    );
}