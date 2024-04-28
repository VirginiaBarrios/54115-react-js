import Map from "../Clase6.jsx/Map"

const Caja = ({titulo, descripcion, children}) => {
    return (
        <div className="p-5 bg-dark-subtle text-white">
            <Titulo texto={titulo} />
            <p>{descripcion}</p>
            <div className="text-secondary">
                {children}
            </div>
        </div>
    )
}

const Titulo = ({texto}) => {
    return(
        <h1 className="display-3">{texto}</h1>
    )
}

const Children = () => {
    return (
        <Caja titulo={"Coderhouse"} desccripcion={"Curso de React Js"}>
            <p>Estamos viendo todo acerca de <b>Componentes Children</b></p>
            <p>Otro parrafo</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, inventore aperiam, dolorum consectetur ea sequi vitae, placeat provident voluptas facere sunt. Corporis ducimus soluta suscipit eveniet consequatur, deserunt commodi aperiam!</p>
            <Map />
        </Caja>

    )
}

export default Children;


//00:39:54