import img from '../../src/constants/img'

export function imageProxy(image_url?: string) {
	let imageURL = img.beautyx
	if (image_url) {
		imageURL = `/v1/imageproxy?url=${encodeURIComponent(image_url)}`
	}
	return imageURL
}
export default imageProxy
