import { Title } from './components/Title';
import { Tareainput } from './components/Tareainput';
import { TareaList } from './components/TareaList/TareaList';
import { useEffect, useState } from 'react';

function App() {
    // Estado para almacenar la lista de tareas
    const [tareas, setTareas] = useState([]);

    // Estado para almacenar el filtro activo (all, active, completed)
    const [activeFilter, setActiveFilter] = useState('all');

    // Estado para almacenar la lista de tareas filtradas
    const [filteredTareas, setFilteredTareas] = useState(tareas);

    const addTarea = (title, date, time) => {
        const lastId = tareas.length > 0 ? tareas[tareas.length - 1].id : 1;
        const newTarea = { id: lastId + 1, title, date, time, completed: false };
        setTareas([...tareas, newTarea]);
    };


    const handleSetComplete = (id) => {
        const updatedList = tareas.map(tarea => {
            if (tarea.id === id) {
                return { ...tarea, completed: !tarea.completed };
            }
            return tarea;
        });
        setTareas(updatedList);
    };


    const handleDelete = (id) => {
        const updatedList = tareas.filter(tarea => tarea.id !== id);
        setTareas(updatedList);
    };

    
     // Función para eliminar todas las tareas completadas
     
    const handleClearComplete = () => {
        const updatedList = tareas.filter(tarea => !tarea.completed);
        setTareas(updatedList);
    };

    // Función para mostrar todas las tareas
    const showAllTareas = () => setActiveFilter('all');

    // Función para mostrar solo las tareas activas
    const showActiveTareas = () => setActiveFilter('active');

    // Función para mostrar solo las tareas completadas
    const showCompletedTareas = () => setActiveFilter('completed');

    
     //useEffect para actualizar la lista de tareas filtradas
    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredTareas(tareas);
        } else if (activeFilter === 'active') {
            setFilteredTareas(tareas.filter(tarea => !tarea.completed));
        } else if (activeFilter === 'completed') {
            setFilteredTareas(tareas.filter(tarea => tarea.completed));
        }
    }, [activeFilter, tareas]);

    return (
        <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
            <div className="container flex flex-col max-w-xl">
                <Title />
                <Tareainput addTarea={addTarea} />
                <TareaList 
                    tareas={filteredTareas}
                    activeFilter={activeFilter}
                    handleSetComplete={handleSetComplete}
                    handleDelete={handleDelete}
                    showAllTareas={showAllTareas}
                    showActiveTareas={showActiveTareas}
                    showCompletedTareas={showCompletedTareas}
                    handleClearComplete={handleClearComplete}
                />
            </div>
        </div>
    );
}

export default App;
