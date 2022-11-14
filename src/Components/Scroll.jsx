// import react from "react";

const Scroll = (props) => {
    return (
        <div className="noScrollBar" style={{ overflowY: 'scroll', border: '1px solid black', height: '500px'}}>

        {props.children}
        </div>  
    )}    


export default Scroll;