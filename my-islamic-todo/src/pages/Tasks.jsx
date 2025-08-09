import React from "react";
import TaskCard from "../components/TaskCard";
const Tasks = () => {
    const Tasks = [
        { title: "Revise My Books", dueDate: "10/08/25" },
        { title: "Read Quran", dueDate: "8/08/25" },
        { title: "Charity", dueDate: "8/08/25" },
        {  title: "Attend Jumma", dueDate: "8/08/25" },
    ];
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-400 text-center px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">My Tasks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Tasks.map((task, index) => (
                    <TaskCard key={index} title={task.title} dueDate={task.dueDate} />
                ))}
            </div>
        </div>
    )
}
export default Tasks;