const RestaurnantCategory = ({data})=>{
    console.log(data);
    return <div>
        {/* Accordian header */}
       <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
        <span>{data.title}</span>
        <span>⬇️</span>
    
       </div>
        {/* Accordian body */}
    </div>
}

export default RestaurnantCategory;