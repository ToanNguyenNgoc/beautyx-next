import { useSelector } from "react-redux"
import { IStore } from "../../redux/store/store.interface"
import { useSwr } from "./useSwr"
import { IUserAddress } from "../../interfaces/userAddress"

export function useAddress() {
    const { USER } = useSelector((state: IStore) => state.USER);
    const addresses = useSwr("/useraddresses", USER).response
    const addressDefault = addresses?.find((i:IUserAddress) => i.is_default === true)
    return { addressDefault, USER }
}