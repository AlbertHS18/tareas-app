import { useState } from 'react';

/*
 * Componente Tareainput
 * Permite al usuario agregar una nueva tarea proporcionando un título, una fecha y una hora.
 * La tarea se agrega al presionar la tecla "Enter" cuando todos los campos están completos.
 */

const Tareainput = ({ addTarea }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleTarea = (e) => {
        if (e.key.toLowerCase() === 'enter' && title && date && time) {
            addTarea(title, date, time);
            setTitle('');
            setDate('');
            setTime('');
        }
    };

    return (
        <div className="mt-6 relative space-y-4">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">
                        <i className="fas fa-tasks"></i>
                    </span>
                </div>
                <input
                    type="text"
                    className="focus:shadow-lg font-inter focus:ring-blue-800 pl-10 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300"
                    placeholder="¿Cuál es la siguiente tarea....?"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    onKeyDown={e => handleTarea(e)}
                />
            </div>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">
                        <i className="fas fa-calendar-alt"></i>
                    </span>
                </div>
                <input
                    type="date"
                    className="focus:shadow-lg font-inter focus:ring-blue-800 pl-10 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
            </div>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">
                        <i className="fas fa-clock"></i>
                    </span>
                </div>
                <input
                    type="time"
                    className="focus:shadow-lg font-inter focus:ring-blue-800 pl-10 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    onKeyDown={e => handleTarea(e)}
                />
            </div>
        </div>
    );
}

export { Tareainput }
