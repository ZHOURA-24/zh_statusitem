import { isEnvBrowser } from "./misc"

export const getImagePath = (image: string) => {
    return isEnvBrowser() ? `./images/${image}.png` : `nui://ox_inventory/web/images/${image}.png`
}