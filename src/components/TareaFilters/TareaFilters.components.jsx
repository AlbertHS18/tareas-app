/*
 * Componente FiltersContainer
 * Envuelve los elementos de filtrado con un contenedor estilizado.
 */

const FiltersContainer = ({ children }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-700 border-solid border-gray-600">
            {children}
        </div>
    );
};

/*
 * Componente ItemsLeft
 * Muestra el número de tareas restantes.
 */

const ItemsLeft = ({ total = 0 }) => {
    return (
        <p className="text-gray-400 text-sm">
            {total} Items restantes
        </p>
    );
};


const FilterButtonContainer = ({ children }) => {
    return (
        <div className="flex items-center space-x-2">
            {children}
        </div>
    );
};

/*
 * Componente FilterButton
 * Representa un botón de filtro que permite cambiar el filtro activo.
 */

const FilterButton = ({ action, active, filter, label }) => {
    return (
        <button
            onClick={action}
            className={`hover:text-white cursor-pointer transition-all duration-300 ease-in-out ${
                active === filter ? 'text-blue-400' : 'text-gray-400'
            }`}
        >
            {label}
        </button>
    );
};

export { FiltersContainer, ItemsLeft, FilterButtonContainer, FilterButton };
