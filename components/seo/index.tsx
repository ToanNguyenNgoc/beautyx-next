import React from 'react';
import Head from 'next/head';

interface ISeoProps {
    title: string,
    description: string,
    url: string
}

function Seo(props: ISeoProps) {
    // const domain = process.env.NEXT_PUBLIC_DOMAIN
    const domain = "https://localhost:3000"
    const { title, description, url } = props
    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${domain}/${url}`} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" /> */}

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`${domain}/${url}`} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            {/* <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta> */}
        </Head>
    );
}

export default Seo;