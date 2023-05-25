/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import React from 'react'
import { useSwr } from '../../../context/hooks'
import { OrgHead, OrgTab, OrgHeader } from '../../../components/pages/org-detail'
import Seo from '../../../components/seo'
import { MainLayout } from '../../../components/layout'
import { NextPageWithLayout } from '../../../models'
import { Container } from '@mui/system'
import {
	orgGalleriesParams,
} from '../../../context/query-params/org-query-params'
// import orgApi from '../../../api-client/organizationApi'
import { IOrganization } from '../../../src/interface/organization'
import Error from "../../error/index"
import { GetServerSidePropsContext } from 'next'
import orgApi from '@/api-client/organizationApi'

const OrgDetail: NextPageWithLayout = (props: any) => {
	const { query } = useRouter()
	const org_id = query.orgId
	const { response, error } = useSwr(`/organizations/${org_id}`, org_id)
	const org: IOrganization = {
		...props.org,
		...response,
	}
	const galleries = useSwr(
		`/organizations/${org_id}/moba_galleries`,
		org,
		orgGalleriesParams
	).responseArray
	if (error) return (<Error />)
	return (
		<>
			<Seo
				title={`${props?.org?.name} - BeautyX`}
				description={`Lựa chọn nhiều sản phẩm, dịch vụ từ ${props?.org?.name}, thanh toán, đặt hẹn online và nhiều ưu đãi khác`}
				url={`org/${props?.org?.name}`}
				image_url={org.image_url}
			/>
			<OrgHeader org={org} />
			<Container>
				<OrgHead org={org} galleries={galleries} />
				<OrgTab org={org} galleries={galleries} />
			</Container>
		</>
	)
}

export default OrgDetail

OrgDetail.Layout = MainLayout

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const { params } = context
	const org_id = params?.orgId

	context.res.setHeader('Cache-Control', 's-maxage=1000000, stale-while-revalidate=1000000')
	const res = await orgApi.getOrgById(org_id)
	const org = await res?.data.context

	return {
		props: { org },
	}
}
