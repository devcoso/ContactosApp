import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useLayoutContext } from "../components/Layout";
import ErrorComponent from "../components/ErrorComponent";

import Contact from "../Interfaces/contact"

export function loader({params}: {params: any}) {
    const contactsStorage = localStorage.getItem('contactos') as string;
    const contactsArray = JSON.parse(contactsStorage) ?? [] as Array<Contact>;
    const contact = contactsArray.find((contact : Contact) => contact.id === params.id);
    if(contact === undefined) throw new Error('Contacto no encontrado');
    return contact
}

export default function Edit() {
    const contact = useLoaderData() as Contact;
    const navigate = useNavigate();
    const { editContacts } = useLayoutContext();
    const [firstName, setFirstName] = useState(contact.firstName);
    const [lastName, setLastName] = useState(contact.lastName);
    const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);
    const [picture, setPicture] = useState(contact.picture);
    const [description, setDescription] = useState(contact.description);
    const [facebook, setFacebook] = useState(contact.facebook);
    const [twitter, setTwitter] = useState(contact.twitter);
    const [instagram, setInstagram] = useState(contact.instagram);
    const [github, setGithub] = useState(contact.github);
    const [linkedin, setLinkedin] = useState(contact.linkedin);

    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if(!firstName || !lastName) {
            setError('Los campos de Nombre y Apellido son obligatorios');
            return
        }
        const newContact: Contact = {
            id: contact.id,
            firstName,
            lastName,
            favorite: false,
            phoneNumber,
            picture,
            description,
            facebook,
            twitter,
            instagram,
            github,
            linkedin,
        }
        editContacts(newContact);
        setTimeout(() => {navigate(`/contacto/${contact.id}`)}, 100)
    }

  return (
    <>
        <h1 className="font-black text-3xl text-indigo-800 text-center">Editar Contácto</h1>
        <p className="mt-3 text-center">Edita los compos del contácto que desees</p>

        <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
            <form>
                <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="firstName"
                >*Nombre:</label>
                <input 
                    id="firstName"
                    itemType="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Contácto"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label
                    className="text-gray-800"
                    htmlFor="lastName"
                >*Apellido:</label>
                <input 
                    id="lastName"
                    itemType="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Apellidos del Contácto"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                </div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="phoneNumber"
                    >Número de Teléfono:</label>
                    <input 
                        id="phoneNumber"
                        type="tel"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Número del Contácto"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="picture"
                    >URL de Imagen:</label>
                    <input 
                        id="picture"
                        itemType="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Imagen del Contácto"
                        name="picture"
                        value={picture}
                        onChange={(e) => setPicture(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="facebook"
                    >Facebook:</label>
                    <input 
                        id="facebook"
                        itemType="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Usuario de Facebook del Contácto"
                        name="facebook"
                        value={facebook}
                        onChange={(e) => setFacebook(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="twitter"
                    >Twitter:</label>
                    <input 
                        id="twitter"
                        itemType="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Usuario de Twitter del Contácto"
                        name="twitter"
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="instagram"
                    >Instagram:</label>
                    <input 
                        id="instagram"
                        itemType="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Usuario de Instagram del Contácto"
                        name="instagram"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="github"
                    >Github:</label>
                    <input 
                        id="github"
                        itemType="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Usuario de Github del Contácto"
                        name="github"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="linkedin"
                    >Linekdin:</label>
                    <input 
                        id="linkedin"
                        itemType="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Usuario de Linekdin del Contácto"
                        name="linkedin"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="description"
                    >Descripción:</label>
                    <textarea
                        id="description"
                        itemType="textarea"
                        className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                        placeholder="Notas del Contácto"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>  
                {error && <ErrorComponent >{error}</ErrorComponent>}
                <input 
                    onClick={handleSubmit}
                    type="submit" 
                    className="mt-5 cursor-pointer hover:bg-indigo-900 w-full bg-indigo-800 p-3 uppercase font-bold text-white text-sm" 
                    value='Editar Contácto'
                />
            </form>
        </div>
    </>
  )
}
