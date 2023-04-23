import { Container } from '@mui/system';
import React from 'react';
import { NextPageWithLayout } from '../../models';
import { MainLayout } from '../../components/layout';


const Error: NextPageWithLayout = () => {
    return (
        <Container>
            Page not found
        </Container>
    );
}

export default Error;

Error.Layout = MainLayout