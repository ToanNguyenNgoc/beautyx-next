import mediaApi from "../../api-client/mediaApi"

export const handlePostMedia = async (form: any) => {
    let formData = new FormData();
    formData.append('file', form);
    let model_id
    let original_url
    const img = URL.createObjectURL(form)
    try {
        const res = await mediaApi.postMedia(formData)
        model_id = await res.data.context.model_id;
        original_url = await res.data.context.original_url
    } catch (error) {
        console.log(error)
    }
    return { model_id, original_url, img}
}