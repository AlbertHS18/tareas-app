import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from "./TareaFilters.components";

/**
 * Componente TareaFilters
 *
 * Este componente permite filtrar una lista de tareas y ofrece opciones para mostrar todas las tareas,
 * solo las tareas activas o solo las completadas. También permite borrar las tareas completadas.
 */

const TareaFilters = ({ 
    total, 
    activeFilter, 
    showAllTareas, 
    showActiveTareas, 
    showCompletedTareas, 
    handleClearComplete 
}) => {
    return (
        <div>
            <FiltersContainer>
                <ItemsLeft total={total} />
                <FilterButtonContainer>
                    <FilterButton 
                        action={showAllTareas} 
                        active={activeFilter} 
                        filter="all" 
                        label="Todos" 
                    />
                    <FilterButton 
                        action={showActiveTareas} 
                        active={activeFilter} 
                        filter="active" 
                        label="Activos" 
                    />
                    <FilterButton 
                        action={showCompletedTareas} 
                        active={activeFilter} 
                        filter="completed" 
                        label="Completados" 
                    />
                </FilterButtonContainer>
                <button 
                    onClick={handleClearComplete} 
                    className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in"
                >
                    Borrar Completados
                </button>
            </FiltersContainer>
        </div>
    );
};

export { TareaFilters };
