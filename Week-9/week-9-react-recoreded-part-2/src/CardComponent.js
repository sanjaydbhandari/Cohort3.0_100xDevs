

export default function CardComponent({children}){
    const cardStyle = {
        border:"1px solid #000",
        padding:"1rem",
        margin:"1rem auto",
        width:"30vw"
    }
    return(
        <div className="CardComponent" style={cardStyle}>
            {children}
        </div>
    )
}