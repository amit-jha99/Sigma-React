const RestaurnantCategory = ({data})=>{
    console.log(data);
    return <div>
        {/* Accordian header */}
       <div>
        <span>{data.title}</span>
        <span>⬇️</span>
    
       </div>
        {/* Accordian body */}
    </div>
}

export default RestaurnantCategory;