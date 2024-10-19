import { menuItems } from "../../utils/constants"

export const Menu = () => {
    return <>
        <hr className="separator" />
        <div className="d-flex gap-5 p-0">
            {
                menuItems.map((item, index) =>
                    <a className="footer-menu-item" key={index} href={item.link}>{item.title} </a>
                )
            }
        </div>
    </>
}

