import { Tareas } from "../Tareas/Tareas";
import { TareaFilters } from "../TareaFilters";

/*
 * Componente TareaList
 * Muestra una lista de tareas y los filtros asociados para ver todas las tareas,
 * solo las tareas activas o solo las tareas completadas. Permite marcar tareas como
 * completas, eliminarlas y borrar las tareas completadas.
 */


const TareaList = ({ 
    tareas, 
    handleSetComplete, 
    handleDelete, 
    activeFilter, 
    showAllTareas, 
    showActiveTareas, 
    showCompletedTareas, 
    handleClearComplete 
}) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {tareas.map(tarea => (
                <Tareas
                    key={tarea.id}
                    tareas={tarea}
                    handleSetComplete={handleSetComplete}
                    handleDelete={handleDelete}
                />
            ))}
            <TareaFilters 
                activeFilter={activeFilter}
                total={tareas.length}
                showAllTareas={showAllTareas}
                showActiveTareas={showActiveTareas}
                showCompletedTareas={showCompletedTareas}
                handleClearComplete={handleClearComplete}
            />
        </div>
    );
};

export { TareaList };
