import React from 'react';
import { NextPageWithLayout } from '../../models';
import { AccountLayout } from '../../components/layout';
import Seo from '../../components/seo';


const Account: NextPageWithLayout = (props) => {
    return (
        <Seo
            title='Thông tin tài khoản'
            description='Thông tin tài khoản'
            url=''
        />
    );
}

Account.Layout = AccountLayout

export default Account;