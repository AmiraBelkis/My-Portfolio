export const Logo = ({ img }) => {
    return (
        <div className="p-2 text-center d-flex justify-content-center">
            <img src={`/img/tech/${img}`} alt="Logo" />
        </div>
    )

}