import { useState } from "react"

// Componente de Representacion, recibe un array como prop y renderiza
const TaskList =({tasks}) => {
    return (
        <>
            <ul>
                {tasks.map(task => (
                    <li key = {task.id}>{task.nombre}</li>
                ))}
            </ul>
        </>
    )
}

// Componente de Orden Superior, recibo como children todo el contenido html y devuelvo ese children modificado
const Filter =({children}) => {
    const [filterState, setFilterState] = useState("all");

    const hanldeFilterState = (evento) => {
        setFilterState(evento.target.value);
    }
    return children(filterState, hanldeFilterState);
}

const RenderProps = () => {
    const tasks = [
        {id:1, nombre:"Hacer la cama", completed:true},
        {id:2, nombre:"Hacer el desayuno", completed:false},
        {id:3, nombre:"Hacer el almuerzo", completed:false},
        {id:4, nombre:"Ir al gimnasio", completed:true},
        {id:5, nombre:"Hacer alfajorcitos de maicena", completed:true},
    ]

    return (
        <Filter>
            {(filterState, hanldeFilterState) => (
                <div className="conteiner">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="filter">Tareas</label>
                            <select id="filter" select={filterState} onChange={hanldeFilterState}>
                                <option value="all">Todos</option>
                                <option value="completed">Completados</option>
                                <option value="nocompleted">No Completados</option>
                            </select>
                            <TaskList tasks={filterState == "all" ? tasks : tasks.filter (item => (filterState == "completed" ? item.completed : !item.completed))}/>
                        </div>
                    </div>
                </div>
            )}
        </Filter>
    )
}

export default RenderProps;