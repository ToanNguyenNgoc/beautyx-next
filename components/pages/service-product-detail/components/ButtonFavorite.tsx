import React from 'react';
import { useSwr, useTrans } from "../../../../context/hooks"
import favorites from "../../../../api-client/favorite"
import Router from "next/router"

import Image from 'next/image'
import icon from '../../../../src/constants/icon';
import style from "../detail.module.css"
import { useSelector } from 'react-redux';
import { IStore } from '../../../../redux/store/store.interface';

interface ButtonFavoriteProps {
    id?: number,
    subdomain?: string,
    org_id: number,
    is_icon?: boolean
    type: "ORG" | "SERVICE" | "PRODUCT"
}

export function ButtonFavorite(props: ButtonFavoriteProps) {
    const { id, type, org_id, subdomain, is_icon } = props;
    const { USER } = useSelector((state: IStore) => state.USER)
    const trans = useTrans();
    const params = {
        include: "category|favorites_count",
        append: "is_favorite|rating",
    };
    let API_URL = ""
    if (type === "ORG") API_URL = `/organizations/${subdomain ?? org_id}`
    if (type === "PRODUCT") API_URL = `/organizations/${org_id}/products/${id}`
    if (type === "SERVICE") API_URL = `/organizations/${org_id}/services/${id}`

    const onToggleFavoriteOrg = async () => {
        if (response?.is_favorite) {
            await favorites.deleteFavorite(org_id)
        } else {
            await favorites.postFavorite(org_id)
        }
    }
    const onToggleFavoriteDetail = async () => {
        const values = {
            org_id: org_id,
            service_id: type === "SERVICE" && id,
            product_id: type === "PRODUCT" && id
        }
        if (response?.is_favorite) {
            await favorites.deleteFavoriteItem(values)
        } else {
            await favorites.postFavoriteItem(values)
        }
    }
    let condition = false
    if (type === "ORG" && org_id) condition = true;
    if (type !== "ORG" && id) condition = true

    const { response, mutate } = useSwr(API_URL, condition, (type !== "ORG" && params))
    const onToggleFavorite = () => {
        if (USER) {
            if (type === "ORG") {
                onToggleFavoriteOrg()
            } else {
                onToggleFavoriteDetail()
            }
            mutate({
                ...response,
                is_favorite: response?.is_favorite ? false : true
            }, true)
        } else {
            Router.push("/sign")
        }
    }


    return (
        <>
            {
                is_icon ?
                    <button
                        onClick={onToggleFavorite}
                        className={style.btn_favorite_icon}
                    >
                        <Image
                            src={response?.is_favorite ? icon.heart : icon.unHeart} alt="" layout="fixed"
                            width={18} height={18}
                        />
                    </button>
                    :
                    <button
                        className={style.btn_favorite}
                        style={response?.is_favorite ? {
                            backgroundColor: "var(--red-cl)",
                            color: "var(--bg-white)"
                        } : {}}
                        onClick={onToggleFavorite}
                    >
                        {response?.is_favorite ? trans.Mer_de.flowing : trans.Mer_de.flow}
                    </button>
            }
        </>
    );
}