import React from 'react';
import { CircularProgress } from '@mui/material';
import './style.css';

interface IProps {
    loading: boolean,
    title?: string,
    onClick?: () => void,
    type?: "button" | "submit"
}

function ButtonLoading(props: IProps) {
    const { loading, title, onClick, type } = props;
    //const loading = true
    return (
        <button
            disabled={loading === true}
            className='btn-loading'
            onClick={onClick}
            type={type ?? "button"}
        >
            {
                loading === true &&
                <div className="loading-cnt">
                    <CircularProgress size="25px" color="primary" />
                </div>
            }
            {title}
        </button>
    );
}

export default ButtonLoading;