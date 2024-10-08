export const Card = ({ children, col }) => {
    return (
        <div className={`card m-auto mt-5 ${col}`}>
            {children}
        </div>
    );
}