import { menuItems } from "../../utils/constants"

export const Menu = () => {
    return <>
        <hr className="separator" />
        <div className="d-flex p-0 justify-content-between flex-wrap">
            {
                menuItems.map((item, index) =>
                    <a className="footer-menu-item" key={index} href={item.link}>{item.title} </a>
                )
            }
        </div>
    </>
}

