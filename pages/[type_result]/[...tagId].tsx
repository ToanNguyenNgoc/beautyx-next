import React from 'react';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../../models';
import { MainLayout } from '../../components/layout';
import tagsApi from '../../api-client/tagApi';
import { useSwr } from "../../context/hooks"
import { directUrlProSerResult } from "../../context/direct-url"
import style from "./tag.module.css";
import { Container } from '@mui/material';
import Link from 'next/link';
import Seo from "../../components/seo"
import { TagLeft, TagRight } from "../../components/pages/tag-cpn"
import { GetServerSidePropsContext } from 'next';

const Tag: NextPageWithLayout = (props: any) => {
    const { tagName, type_result, tagParentId } = props;
    const router = useRouter();
    const { query } = router
    const tagChildId = query.tagId[1]

    const tagParent = useSwr(`/tags/${tagParentId}`, tagParentId).response
    const tagChild = useSwr(`/tags/${tagChildId}`, tagChildId).response

    const type = type_result === "san-pham" ? "PRODUCT" : "SERVICE"
    // if (type_result === "san-pham") type = "PRODUCT"
    // if (type_result === "dich-vu") type = "SERVICE"
    return (
        <>
            <Seo
                title={`${tagName} | BeautyX`}
                description={`Dịch vụ làm đẹp Online ${tagName}`}
                url={router.asPath}
            />
            <Container>
                <div className={style.bread_crumbs}>
                    <Link href={"/"} >
                        <a className={style.bread_crumbs_title}>Trang chủ</a>
                    </Link>
                    {
                        tagParent &&
                        <Link href={directUrlProSerResult(type, tagParent.name, tagParent.id)} >
                            <a className={style.bread_crumbs_title}>{">  "}{tagParent.name}</a>
                        </Link>
                    }
                    {
                        tagChild &&
                        <Link href={directUrlProSerResult(type, tagChild.name, tagChild.id)} >
                            <a className={style.bread_crumbs_title}>{">  "}{tagChild.name}</a>
                        </Link>
                    }
                </div>
                <div className={style.container}>
                    <div className={style.container_left}>
                        <TagLeft
                            tagChild={tagChild}
                            tagParent={tagParent}
                            type={type}
                        />
                    </div>
                    <div className={style.container_right}>
                        <TagRight
                            tagChild={tagChild}
                            tagParent={tagParent}
                            tagName={tagName}
                            type={type}
                        />
                    </div>
                </div>
            </Container>
        </>
    );
}

Tag.Layout = MainLayout

export default Tag;

//static path
// export const getStaticPaths: GetStaticPaths = async () => {
//     return {
//         paths: [
//             { params: { type_result: "1", tagId: ["1"] } }
//         ],
//         fallback: false
//     }
// }
// export const getStaticProps: GetStaticProps<any> = async (
//     context: GetStaticPropsContext
// ) => {
//     console.log(context)
//     return {
//         props: {}
//     }
// }

// server side
export async function getServerSideProps(context: GetServerSidePropsContext) {
    context.res.setHeader(
        'Cache-Control',
        's-maxage=30000, stale-while-revalidate=30000'
    )
    const tagId = context.query.tagId[1]
    const tagName = context.query.tagId[0]
    const type_result = context.query.type_result

    if (!tagId || !tagName || !type_result) {
        return {
            redirect: {
                destination: '/error',
                permanent: false,
            },
        }
    }
    const resTagChild = await tagsApi.getTagId(tagId);
    const tagChild = await resTagChild.data.context
    const tagParentId = await tagChild.parent_id
    // let tagParent
    // if (tagParentId) {
    //     const resTagParent = await tagsApi.getTagId(tagParentId);
    //     tagParent = await resTagParent.data.context
    // }

    return {
        props: {
            // tagChild: tagChild,
            // tagParent: tagParent ?? null,

            tagParentId: tagParentId,
            tagName: tagName,
            type_result: type_result
            // tagChild: [],
            // tagParent: null,
            // tagName: `context.query.tag`
        }
    }
}