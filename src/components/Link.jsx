import { Link as NavLink } from 'react-router'

export const Link = () => {
    return (
        <NavLink to={href} {...restOfProps}>
            {children}
        </NavLink>
    )
}
