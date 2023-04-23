import React, { useState } from 'react';
import { useDeviceMobile, useSwrInfinite, } from "@/context/hooks";
import { commentParams } from '@/context/query-params';
import { ButtonLoading, ImageComponent, Input } from "../layout"
import { IComment, ICommentChild } from "@/interfaces/comments"
import commentsApi from '@/api-client/commentsApi';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { IStore } from '@/redux/store/store.interface';
import Router from "next/router"
import { handlePostMedia } from '@/context/functions';

import icon from '@/src/constants/icon';
import style from "./comment.module.css"

interface CommentProps {
    // commentable_type: "SERVICE" | "PRODUCT" | "ORGANIZATION",
    commentable_type: any
    commentable_id: number,
    org_id: number
}
interface TempCmt {
    body: string,
    media_url: any[],
    media_ids: any[]
}
const tempCmtInit: TempCmt = {
    body: "",
    media_url: [],
    media_ids: []
}

function Comment(props: CommentProps) {
    const { commentable_type, commentable_id, org_id } = props;
    const { USER } = useSelector((state: IStore) => state.USER);


    const [tempCmt, setTempCmt] = useState<TempCmt>(tempCmtInit)
    const [cmtArr, setCmtArr] = useState<IComment[]>([])

    const params = {
        ...commentParams,
        "filter[commentable_type]": commentable_type,
        "filter[commentable_id]": commentable_id,
        "filter[organization_id]": commentable_type !== "ORGANIZATION" ? org_id : ""
    }
    const { resData, totalItem, onLoadMore, isValidating } = useSwrInfinite("/comments", params)
    const onChangeInputCmt = (e: any) => {
        setTempCmt({ ...tempCmt, body: e.target.value })
    }
    const paramPost = {
        "body": tempCmt.body,
        "commentable_id": commentable_id,
        "commentable_type": commentable_type,
        "organization_id": org_id,
        "media_ids": tempCmt.media_ids,
        "rate": 5,
    }
    const handlePostCmt = async () => {
        if (!USER) Router.push("/sign")
        if (USER && tempCmt.body !== "") {
            const res = await commentsApi.postComment(paramPost)
            const newCmt = {
                ...await res.data.context,
                children: [],
                media_url: tempCmt.media_url
            }
            setCmtArr([newCmt, ...cmtArr])
            setTempCmt(tempCmtInit)
        }
    }
    const onChangeMedia = async (e: any) => {
        const form = e.target.files[0];
        const { model_id, original_url } = await handlePostMedia(form)
        setTempCmt({
            ...tempCmt,
            media_url: [original_url, ...tempCmt.media_url],
            media_ids: [model_id, ...tempCmt.media_ids]
        })
    }
    const onRemoveImageTemple = (url: string) => {
        setTempCmt({
            ...tempCmt,
            media_url: tempCmt.media_url.filter(i => i !== url)
        })
    }

    const onViewMoreCmt = () => {
        onLoadMore()
    }


    return (
        <div className={style.container}>
            <h2 className={style.title}>
                Đánh giá - Nhận xét từ khách hàng
            </h2>
            <div className={style.cmt_input_par_cnt}>
                <div className={style.input_par_wrapper}>
                    <div className={style.input_top}>
                        <div className={style.par_user_avt}>
                            {
                                USER && USER?.avatar &&
                                <ImageComponent
                                    src={USER.avatar ?? ""}
                                    type="IMG" layout="responsive" alt=''
                                    width={"100%"} height={"100%"}
                                    style={{ borderRadius: "100%" }}
                                />
                            }
                        </div>
                        <div className={style.input_par_in_cnt}>
                            <Input
                                placeholder='Viết đánh giá...'
                                value={tempCmt.body}
                                onChange={onChangeInputCmt}
                                onKeyDown={handlePostCmt}
                            />
                            <div className={style.input_par_button}>
                                <label className={style.btn_cmt_img} htmlFor="file_par">
                                    <ImageComponent
                                        src={icon.addImg} alt="" layout="fixed"
                                        width={20} height={20} type="ICON"
                                    />
                                </label>
                                <input onChange={onChangeMedia} type="file" id='file_par' hidden />
                                <ButtonLoading
                                    onClick={handlePostCmt}
                                    className={style.btn_cmt}
                                    icon={icon.sendComment}
                                    iconSize={20}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={style.input_img_temp}>
                        {
                            tempCmt.media_url.length > 0 &&
                            tempCmt.media_url.map((img_url: string) => (
                                <div className={style.input_img_temp_item}>
                                    <button
                                        onClick={() => onRemoveImageTemple(img_url)}
                                    >
                                        <ImageComponent
                                            src={icon.closeCircle} alt="" layout="fixed" width={22} height={22} type="ICON"
                                        />
                                    </button>
                                    <ImageComponent
                                        src={img_url} alt="" layout="responsive" type="IMG"
                                        width={"100%"} height={"100%"}
                                        style={{ borderRadius: "4px" }}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={style.body}>
                <ul className={style.cmt_list}>
                    {
                        cmtArr.concat(resData).map((item: IComment, index: number) => (
                            <li key={index} className={style.cmt_list_li}>
                                <CommentParItem
                                    comment={item}
                                    org_id={org_id}
                                    USER_PAR_NAME={item.user?.fullname}
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={style.cmt_view_more}>
                {
                    resData.length >= 10 && resData.length < totalItem &&
                    <ButtonLoading
                        title='Xem thêm đánh giá'
                        className={style.cmt_view_more_btn}
                        onClick={onViewMoreCmt}
                        loading={isValidating}
                    />
                }
            </div>
        </div>
    );
}

export default Comment;

interface CommentParItemProps {
    comment: IComment,
    org_id: number,
    USER_PAR_NAME: string
}

export const CommentParItem = (props: CommentParItemProps) => {
    const { comment, org_id, USER_PAR_NAME } = props;
    const IS_MB = useDeviceMobile();
    const { USER } = useSelector((state: IStore) => state.USER)
    let body_par = ""
    let media_url: any[] = []
    try {
        const bodyOb = JSON.parse(comment.body)
        body_par = bodyOb?.text
        media_url = [bodyOb?.image_url].filter(Boolean)
    } catch (error) {
        body_par = comment?.body
        media_url = comment?.media_url ?? []
    }
    //handle reply comment
    const [tempCmt, setTempCmt] = useState<TempCmt>(tempCmtInit)
    const [cmtArr, setCmtArr] = useState<ICommentChild[]>([])
    const replyCount = comment.children?.length + cmtArr.length
    const paramPost = {
        "body": tempCmt.body,
        "commentable_id": comment.id,
        "commentable_type": "REPLY_COMMENT",
        "organization_id": org_id,
        // "media_ids": tempCmt.media_ids,
        "rate": 5,
    }
    const onChangeInputCmt = (e: any) => setTempCmt({ ...tempCmt, body: e.target.value })
    const handlePostCmtReply = async () => {
        const res = await commentsApi.postComment(paramPost);
        const newCmt = {
            ...await res.data.context
        }
        setCmtArr([newCmt, ...cmtArr])
        setTempCmt(tempCmtInit)
    }


    return (
        <div className={style.cmt_item_par_cnt}>
            <div className={style.cmt_item_par_user}>
                <div className={style.par_user_avt}>
                    <ImageComponent
                        src={comment.user?.avatar ?? ""}
                        type="IMG" layout="responsive" alt=''
                        width={"100%"} height={"100%"}
                        style={{ borderRadius: "100%" }}
                    />
                </div>
                <div className={style.par_user_name}>
                    {comment.user?.fullname}
                </div>
            </div>
            <div className={style.cmt_item_par_body}>
                {/* <div className={style.par_body_top}>
                    <div className={style.par_body_top_star}>
                        <ImageComponent
                            src={icon.star} width={14} height={14} alt=""
                            type="ICON" layout="fixed"
                        />
                        <ImageComponent
                            src={icon.star} width={14} height={14} alt=""
                            type="ICON" layout="fixed"
                        />
                        <ImageComponent
                            src={icon.star} width={14} height={14} alt=""
                            type="ICON" layout="fixed"
                        />
                        <ImageComponent
                            src={icon.star} width={14} height={14} alt=""
                            type="ICON" layout="fixed"
                        />
                        <ImageComponent
                            src={icon.star} width={14} height={14} alt=""
                            type="ICON" layout="fixed"
                        />
                    </div>
                    <span className={style.par_body_top_txt}>
                        Cực hài lòng
                    </span>
                </div> */}
                {/* <div className={style.par_body_check}>
                    <ImageComponent
                        src={icon.checkFlowGreen} alt="" layout="fixed"
                        type="ICON" width={14} height={14}
                    />
                    <span className={style.par_body_check_text}>
                        Đã mua hàng
                    </span>
                </div> */}
                <div className={style.cmt_text}>
                    {body_par}
                </div>
                {
                    media_url?.length > 0 &&
                    <div className={style.media_url_list}>
                        {
                            media_url.map((url: string, index: number) => (
                                <div key={index} className={style.media_url_list_item}>
                                    <ImageComponent
                                        src={url} alt="" type="IMG" height={"100%"} width={"100%"}
                                        layout="responsive"
                                        style={{ borderRadius: "6px" }}
                                    />
                                </div>
                            ))
                        }
                    </div>
                }
                <span className={style.cmt_time_late}>
                    {moment(comment.created_at).locale("vi").fromNow()}
                </span>
                <div className={style.cmt_reply_cnt}>
                    <Accordion
                        style={{ width: "100%" }}
                    >
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <span
                                className={style.cmt_reply_open}
                                onClick={() => setTempCmt({ ...tempCmt, body: `@${USER_PAR_NAME}` })}
                            >
                                {replyCount > 0 && replyCount}  Phản hồi
                            </span>
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ padding: IS_MB ? "0px" : "4px 16px" }}
                        >
                            {
                                cmtArr.concat(comment.children).map((child: ICommentChild, i: number) => (
                                    <div key={i} className={style.cmt_reply_cnt}>
                                        <div className={style.cmt_reply_user}>
                                            <div className={style.par_user_avt}>
                                                <ImageComponent
                                                    src={child.user?.avatar ?? ""}
                                                    type="IMG" layout="responsive" alt=''
                                                    width={"100%"} height={"100%"}
                                                    style={{ borderRadius: "100%" }}
                                                />
                                            </div>
                                        </div>
                                        <div className={style.cmt_reply_text}>
                                            <span className={style.par_user_name}>
                                                {child.user?.fullname}
                                            </span>
                                            <span className={style.cmt_text}>
                                                {child.body}
                                                <p className={style.cmt_time_late}>
                                                    {moment(child?.created_at).locale("vi").fromNow()}
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className={style.reply_cmt_input_cnt}>
                                <div className={style.input_top}>
                                    <div className={style.par_user_avt}>
                                        {
                                            USER && USER?.avatar &&
                                            <ImageComponent
                                                src={USER.avatar ?? ""}
                                                type="IMG" layout="responsive" alt=''
                                                width={"100%"} height={"100%"}
                                                style={{ borderRadius: "100%" }}
                                            />
                                        }
                                    </div>
                                    <div className={style.input_par_in_cnt}>
                                        <Input
                                            placeholder={`Phản hồi ${comment.user?.fullname}...`}
                                            value={tempCmt.body}
                                            onChange={onChangeInputCmt}
                                            onKeyDown={handlePostCmtReply}
                                        />
                                        <div className={style.input_par_button}>
                                            {/* <label className={style.btn_cmt_img} htmlFor="file_par">
                                                <ImageComponent
                                                    src={icon.addImg} alt="" layout="fixed"
                                                    width={20} height={20} type="ICON"
                                                />
                                            </label> */}
                                            {/* <input onChange={onChangeMedia} type="file" id='file_par' hidden /> */}
                                            <ButtonLoading
                                                onClick={handlePostCmtReply}
                                                className={style.btn_cmt}
                                                icon={icon.sendComment}
                                                iconSize={20}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className={style.input_img_temp}>
                                        {
                                            tempCmt.media_url.length > 0 &&
                                            tempCmt.media_url.map((img_url: string) => (
                                                <div className={style.input_img_temp_item}>
                                                    <button
                                                        onClick={() => onRemoveImageTemple(img_url)}
                                                    >
                                                        <ImageComponent
                                                            src={icon.closeCircle} alt="" layout="fixed" width={22} height={22} type="ICON"
                                                        />
                                                    </button>
                                                    <ImageComponent
                                                        src={img_url} alt="" layout="responsive" type="IMG"
                                                        width={"100%"} height={"100%"}
                                                        style={{ borderRadius: "4px" }}
                                                    />
                                                </div>
                                            ))
                                        }
                                    </div> */}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}