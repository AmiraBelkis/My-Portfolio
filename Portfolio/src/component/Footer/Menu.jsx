import { menuItems } from "../../utils/constants"

export const Menu = () => {
    return <>
        <hr className="separator" />
        <div className="d-flex p-0" style={{ justifyContent: "space-between" }}>
            {
                menuItems.map((item, index) =>
                    <a className="footer-menu-item" key={index} href={item.link}>{item.title} </a>
                )
            }
        </div>
    </>
}

