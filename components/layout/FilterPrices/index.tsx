import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Input, ButtonLoading } from "../../layout"
import style from "./filter-prices.module.css"

interface FilterPricesProps {
    onChangePrice?: (min: number, max: number) => void
    min_price?: any,
    max_price?: any
}

export function FilterPrices(props: FilterPricesProps) {
    const { onChangePrice, min_price, max_price } = props;
    const [err, setErr] = useState("");
    const formik = useFormik({
        initialValues: {
            min: min_price ?? "",
            max: max_price ?? ""
        },
        onSubmit: (values) => {
            if (onChangePrice && (values.min > 0 && values.max > values.min || values.min === "" || values.max === "")) {
                onChangePrice(values.min, values.max)
            } else {
                setErr("Vui lòng điền khoảng giá phù hợp")
            }
        }
    })
    const onChangeMin = (e:any) => {
        const min_price = e.target.value;
        if (min_price === "" || parseInt(min_price) > 0) {
            formik.setFieldValue("min", min_price)
        }
    }
    const onChangeMax = (e:any) => {
        const max_price = e.target.value;
        if (max_price === "" || parseInt(max_price) > 0) {
            formik.setFieldValue("max", max_price)
        }
    }

    return (
        <>
            <span className={style.filter_title}>
                Khoảng giá
            </span>
            <form
                onSubmit={formik.handleSubmit}
                autoComplete="off"
                className={style.filter_form}
            >
                <div className={style.form_input_cnt}>
                    <div className={style.filter_form_row}>
                        <Input
                            type="number"
                            onChange={onChangeMin}
                            onFocus={() => setErr("")}
                            name="min"
                            value={formik.values.min}
                            placeholder='tối thiểu'
                        />
                    </div>
                    <div className={style.filter_form_row}>
                        <Input
                            type="number"
                            onChange={onChangeMax}
                            onFocus={() => setErr("")}
                            name="max"
                            value={formik.values.max}
                            placeholder='tối đa'
                        />
                    </div>
                </div>
                <span className={style.filter_form_err}>{err}</span>
                <div className={style.form_bot}>
                    <ButtonLoading
                        type="submit"
                        title='Áp dụng khoảng giá'
                    />
                </div>
            </form>
        </>
    );
}