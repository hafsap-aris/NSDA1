
function TaskCard({title,dueDate}){
    
    return(
        <div className="bg-white shadow-md rounded-lg w-60 border border-gray-200 hover:shadow-lg transition ">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600">{dueDate}</p>
        </div>
        
    );
}  
export default TaskCard;