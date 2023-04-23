import React, { useEffect } from 'react';
import TreatmentCardItem from './TreatmentCardItem';
import { Masonry } from "@mui/lab"
import { useDispatch, useSelector } from 'react-redux';
import { useDeviceMobile, useSwrInfinite } from '@/context/hooks';
import { servicesUserParams } from '@/context/query-params';
import { IStore } from '@/redux/store/store.interface';
import { onClearSelect } from '@/redux/slices/auth-slice/booking-slice';
import { IServiceUser } from '@/interfaces/servicesUser';
import { LoadingGrid2 } from '@/components/loading';
import { ButtonLoading } from '@/components/layout';

export function ServiceUser() {
    const IS_MB = useDeviceMobile();
    const { resData, isValidating, onLoadMore, totalItem } = useSwrInfinite("/orders", servicesUserParams)
    const { services } = useSelector((state: IStore) => state.BOOKING)
    const dispatch = useDispatch();
    useEffect(() => {
        if (services.length === 0) dispatch(onClearSelect())
    }, [services.length])
    return (
        <div>
            <Masonry
                columns={IS_MB ? 1 : 2} spacing={IS_MB ? 1 : 2}
            >
                {
                    resData.map((card_items: IServiceUser, index: number) => (
                        <TreatmentCardItem
                            key={index}
                            card_items={card_items}
                        />
                    ))
                }
            </Masonry>
            {resData.length === 0 && <LoadingGrid2 grid={IS_MB ? 1 : 2} />}
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                {
                    (resData.length >= 15 && resData.length < totalItem) &&
                    <ButtonLoading
                        onClick={onLoadMore}
                        title='Xem thêm'
                        loading={isValidating}
                    />
                }
            </div>
        </div>
    );
}