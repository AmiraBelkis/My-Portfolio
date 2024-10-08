export const Menu = ({ items }) => {
    return (
        <nav className="menu">
            {items.map(item => {
                return (
                    <MenuItem
                        key={item.id}
                        title={item.title}
                        link={item.link}
                    />
                )
            })}
        </nav>
    )
}
export const MenuItem = ({ title, link }) => {
    return <a href={link} >{title}</a>
}