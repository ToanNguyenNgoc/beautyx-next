import React from 'react';
import { EX_APPLY_DATE, EX_DISCOUNT_TYPE } from "../../context/functions/discount"
import { IDiscountPar, IITEMS_DISCOUNT } from "../../interfaces/discount";
import { IOrganization } from '../../interfaces/organization';
import formatPrice from '../../src/utils/formatPrice';
import moment from "moment";
import style from "./voucher.module.css"

interface IVoucherItemProps {
    discount: IDiscountPar,
    org_id: number
}

function VoucherItem(props: IVoucherItemProps) {
    const { discount, org_id } = props;
    const voucher = {
        ...discount,
        valid_from: "2022-05-10 10:10:10",
        valid_util:"2022-12-01 10:10:00"
    }
    const orgVoucher = voucher.organizations.find((o: IOrganization) => o.id === org_id);
    const validDate = EX_APPLY_DATE(voucher)

    return (
        <div className={style.voucher_item_cnt}>
            <div className="flex-column voucher-org-item__left">
                <div className="org-img">
                    {/* <img src={"https://lzd-img-global.slatic.net/g/p/4994a6a593276431bc9f6a9a9a22d6c7.jpg_2200x2200q75.jpg_.webp"} onError={(e) => onErrorImg(e)} alt="" /> */}
                </div>
                <div className="org-name">
                    {orgVoucher?.name}
                </div>
            </div>
            <div className="voucher-org-item__right">
                <div>
                    <div className="flex-column voucher-org-item__right-head">
                        <span>
                            {EX_DISCOUNT_TYPE(voucher)}
                        </span>
                    </div>
                    {
                        (voucher.valid_from || voucher.valid_util) &&
                        <div className="voucher-org-item__right-date">
                            từ :
                            {voucher.valid_from && moment(voucher.valid_from).format("DD/MM/YYYY")} -
                            {voucher.valid_util && moment(voucher.valid_util).format("DD/MM/YYYY")}
                        </div>
                    }
                </div>
                <div className="flex-row-sp right-bot">
                    <span className="condition">
                        Điều kiện
                    </span>
                    <button className="save">
                        Lưu
                    </button>
                </div>
            </div>
            {/* <div className="voucher-org-condition-cnt">
                <VoucherItemCondition
                    voucher={voucher}
                    org_id={org_id}
                />
            </div> */}
        </div>
    )
}

export default VoucherItem;
export const VoucherItemCondition = ({
    voucher, org_id }: {
        voucher: IDiscountPar, org_id: number
    }) => {
    const orgVoucher = voucher.organizations.find((o: IOrganization) => o.id === org_id);
    const itemListName: string[] = voucher.items
        .filter((i: IITEMS_DISCOUNT) => i?.organization?.id === org_id)
        .map((i: IITEMS_DISCOUNT) => (i?.productable?.service_name || i?.productable?.product_name))
    return (
        <div className="voucher-org-condition">
            <span className="title">
                Điều kiện áp dụng
            </span>
            <div className="section-item">
                <div className="section-item__title">
                    Mã
                </div>
                <div className="section-item__desc">
                    {voucher.coupon_code}
                </div>
            </div>
            <div className="section-item">
                <div className="section-item__title">
                    Hình thức giảm
                </div>
                <div className="section-item__desc">
                    {EX_DISCOUNT_TYPE(voucher)}
                </div>
            </div>
            <div className="section-item">
                <div className="section-item__title">
                    Mô tả
                </div>
                <div className="section-item__desc">
                    {voucher.description}
                </div>
            </div>
            {
                (voucher.valid_from || voucher.valid_util) &&
                <div className="section-item">
                    <div className="section-item__title">
                        Ngày áp dụng
                    </div>
                    <div className="section-item__desc">
                        từ :
                        {voucher.valid_from && moment(voucher.valid_from).format("DD/MM/YYYY")} -
                        {voucher.valid_util && moment(voucher.valid_util).format("DD/MM/YYYY")}
                    </div>
                </div>
            }
            <div className="section-item">
                <div className="section-item__title">
                    Điều kiện
                </div>
                <div className="section-item__desc">
                    <span className="section-item__desc-i">
                        {
                            itemListName.length > 0 ?
                                <>
                                    Áp dụng cho các dịch vụ, sản phẩm:
                                    <span style={{ fontWeight: "bold" }}> {itemListName.join(", ")}</span>
                                </>
                                :
                                `* Áp dụng cho dịch vụ, sản phẩm của ${orgVoucher?.name}`
                        }
                    </span>
                    {
                        voucher.minimum_order_value > 0 &&
                        <>
                            <br />
                            <span className="section-item__desc-i">
                                * Đơn hàng tối thiểu {formatPrice(voucher.minimum_order_value)}đ
                            </span>
                        </>
                    }
                    {
                        (voucher.maximum_discount_value > 0 ||
                            voucher.discount_unit === "PERCENT") &&
                        <>
                            <br />
                            <span className="section-item__desc-i">
                                * Giảm tối đa {formatPrice(voucher.maximum_discount_value)}đ
                                cho {voucher.discount_value}%
                            </span>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}