/*
 * Componente Tareas
 * Muestra una tarea individual con opciones para marcarla como completada o eliminarla.
 */


const Tareas = ({ tareas, handleSetComplete, handleDelete }) => {
    const { id, title, completed, date, time } = tareas;

    return (
        <div className="flex items-center justify-between p-4 bg-gray-700 border-solid border-gray-600">
            <div className="flex items-center">
                {completed ? (
                    <div 
                        onClick={() => handleSetComplete(id)} 
                        className="bg-green-700 p-1 rounded-full cursor-pointer">
                        <img className="h-4 w-4" src="/check-icons.svg" alt="Check Icon" />
                    </div>
                ) : (
                    <span 
                        onClick={() => handleSetComplete(id)} 
                        className="border-solid border border-gray-500 rounded-full p-3 cursor-pointer">
                    </span>
                )}
                <div className="ml-3">
                    <p className={` ${completed ? "line-through" : ""}`}>{title}</p>
                    <p className="text-sm text-gray-400">{date} {time}</p>
                </div>
            </div>
            <img
                onClick={() => handleDelete(id)}
                className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
                src="/close-icons.svg"
                alt="Close Icon"
            />
        </div>
    );
};

export { Tareas };
