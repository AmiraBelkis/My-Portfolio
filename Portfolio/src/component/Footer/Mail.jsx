export const Mail = ({ email }) => {
    return (
        <div className="col-12">
            <a href={`mailto:${email}`} className="email p-0">
                {email}
            </a>
        </div>
    )
}
