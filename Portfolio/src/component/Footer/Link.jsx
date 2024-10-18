import { profileIcons } from "../../utils/constants"

export const Link = ({ link, icon }) => {
    const Icon = profileIcons[icon]
    return (
        <a className="profile-icon" href={link}>
            {Icon}
        </a>
    )
}