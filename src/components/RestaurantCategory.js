const RestaurnantCategory = ({data})=>{
    console.log(data);
    return <div>
        {/* Accordian header */}
       <div className="w-full bg-gray-50 shadow-lg p-4">
        <span>{data.title}</span>
        <span>⬇️</span>
    
       </div>
        {/* Accordian body */}
    </div>
}

export default RestaurnantCategory;