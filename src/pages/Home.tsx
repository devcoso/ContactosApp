import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-4">
      <h1 className=" text-center text-3xl font-bold text-gray-800">Bienvenido a Contactos<span className="text-indigo-800">App</span></h1>
      <div className="text-gray-800 text-center text-lg">
        <p>Encuentra a la persona que necesitas al instante con una aplicación útil y cómoda.</p>
        <p> Está aplicación te permite guardar:</p>
        <ul className="text-indigo-800 font-semibold">
          <li>Nombres</li>
          <li>Correos electrónicos</li>
          <li>Número de teléfono</li>
          <li>Redes sociales</li>
          <li>Y más</li>
        </ul>
      </div>
     
      <p className="text-gray-800 text-lg">Añade nuevos Contáctos <Link className="text-indigo-800 underline" to="/agregar">aquí</Link></p>
    </div>
  )
}
