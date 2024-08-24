
import { MenuItem } from "./MenuItem";

export function Menu({ items }) {
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