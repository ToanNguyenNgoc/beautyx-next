import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LayoutProps } from '@/models/index';
import { IStore } from '@/redux/store/store.interface';
import Footer from './Footer';
import HeaderLayout from './Header';
import BottomNavigation from './BottomNavigation';

export function AuthLayout({ children }: LayoutProps) {
    const { firstLoad, USER } = useSelector((state: IStore) => state.USER)
    const router = useRouter();
    useEffect(() => {
        if (!firstLoad && !USER) {
            router.replace("/sign")
        }
    }, [firstLoad, USER])
    return (
        <>
            <HeaderLayout />
            {<div>{children}</div>}
            <BottomNavigation/>
            <Footer />
        </>
    );
}