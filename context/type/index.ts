export * from './platform-type'

export const ORDER_STATUS = [
	{
		key: 'PENDING',
		text: 'Chờ thanh toán',
		color: '#F5D91D',
	},
	{
		key: 'CANCELED',
		text: 'Bị hủy',
		color: 'var(--text-orange)',
	},
	{
		key: 'CANCELED_BY_USER',
		text: 'Bị hủy bởi người dùng',
		color: 'var(--text-orange)',
	},
	{
		key: 'PAID',
		text: 'Đã thanh toán',
		color: 'var(--green)',
	},
]
export const TYPE_MODEL = {
	SERVICE: "App\\Models\\CI\\Service",
	PRODUCT: "App\\Models\\CI\\Product",
	COMBO: "App\\Models\\CI\\TreatmentCombo",
}
