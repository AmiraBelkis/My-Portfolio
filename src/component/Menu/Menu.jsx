export const Menu = ({ items }) => {
    return (
        <nav className="menu">
            {items.map((item, index) => {
                return (
                    <MenuItem
                        key={index}
                        title={item.title}
                        link={item.link}
                    />
                )
            })}
        </nav>
    )
}
const MenuItem = ({ title, link }) => {
    return <a href={link} >{title}</a>
}