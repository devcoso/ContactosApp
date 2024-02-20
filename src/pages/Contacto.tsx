import { useLoaderData, Link } from "react-router-dom";
import { useLayoutContext } from "../components/Layout";

import Contact from "../Interfaces/contact";

import imagen from "../img/contacto_default.png";
import githubIcon from "../img/github.png";
import facebookIcon from "../img/facebook.png";
import instagramIcon from "../img/instagram.png";
import linkedinIcon from "../img/linkedin.png";
import twitterIcon from "../img/twitter.png";

export function loader({params}: {params: any}) {
    const contactsStorage = localStorage.getItem('contactos') as string;
    const contactsArray = JSON.parse(contactsStorage) ?? [] as Array<Contact>;
    const contact = contactsArray.find((contact : Contact) => contact.id === params.id);
    if(contact === undefined) throw new Error('Contacto no encontrado');
    return contact
}

export default function Contacto() {
    const {id,firstName, lastName, phoneNumber, picture, description, facebook, twitter, instagram, github, linkedin } = useLoaderData() as Contact;
    const { deleteContact } = useLayoutContext();
    const handleEliminar = (id: string) => { 
        confirm('¿Estás seguro de eliminar este contacto?') && deleteContact(id);
    }

  return (
    <div className="p-10">
        <div className="md:flex md:gap-2 justify-center">
            <div className="lg:w-1/3">
                <img src={picture?.length ? picture : imagen} className="h-36 w-36 md:w-40 md:h-40 lg:w-72 lg:h-72 object-cover object-center m-auto rounded-full"/>
            </div>
            <div className="lg:w-1/2 md:1/3 space-y-10">
                <h3 className="text-indigo-800 text-2xl md:text-4xl font-bold">{`${firstName} ${lastName}`}</h3>
                {phoneNumber?.length ? <p className="text-xl text-gray-700">Teléfono: <span className="text-gray-800 font-bold">{phoneNumber}</span></p> : <></>}
                <div>
                    {facebook?.length || twitter?.length || instagram?.length || github?.length || linkedin?.length ? <h3 className="text-xl text-gray-700">Redes Sociales:</h3> : <></>}
                    <div className="grid grid-cols-3 gap-3 lg:grid-cols-5 lg:w-2/3 items-center">
                        {facebook?.length ? <a className="w-10 h-10" href={`https://www.facebook.com/${facebook}`} target="blank"><img className="w-full" src={facebookIcon} alt="Icono Facebook"/></a> : <></>}
                        {twitter?.length ? <a className="w-10 h-10" href={`https://www.x.com/${twitter}`} target="blank"><img className="w-full" src={twitterIcon} alt="Icono Twitter" /></a> : <></>}
                        {instagram?.length ? <a className="w-10 h-10" href={`https://www.instagram.com/${instagram}`} target="blank"><img className="w-full" src={instagramIcon} alt="Icono Instagram" /></a> : <></>}
                        {github?.length ? <a className="w-10 h-10" href={`https://www.github.com/${github}`} target="blank"><img className="w-full" src={githubIcon} alt="Icono Github" /></a> : <></>}
                        {linkedin?.length ? <a className="w-10 h-10" href={`https://www.linkedin.com/in/${linkedin}`} target="blank"><img className="w-full" src={linkedinIcon} alt="Icono Linkedin" /></a> : <></>}
                    </div>
                </div>
                <div className=" flex md:justify-start justify-center gap-2">
                    <Link className="py-2 px-8 bg-blue-800 text-white hover:bg-blue-900 shadow-md" to={`/editar/${id}`}>Editar</Link>
                    <button onClick={() => {handleEliminar(String(id))}} className="py-2 px-8 bg-red-800 text-white hover:bg-red-900 shadow-md">Eliminar</button>
                </div>
            </div>
        </div>
        <div className="text-justify text-lg text-gray-800 md:p-20 mt-10">
            {description}
        </div>      
      
    </div>
  )
}
