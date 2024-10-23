export const Logo = ({ img }) => {
    return (
        <div className="p-2 text-center d-flex justify-content-center">
            <img src={`/src/assets/img/tech/${img}`} alt="Logo" />
        </div>
    )

}