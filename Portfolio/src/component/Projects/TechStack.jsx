export const TechStack = ({ children, props }) => {
    return (
        <p className="p-0 text-start" {...props}>
            <strong className="me-1">Tech stack :</strong>
            {children}
        </p>
    )
}