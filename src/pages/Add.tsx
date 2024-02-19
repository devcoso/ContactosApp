import { useState } from "react";
import Contact from "../Interfaces/contact"
import { useLayoutContext } from "../components/Layout";

export default function Add() {
    const { addContact } = useLayoutContext();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [favorite, setFavorite] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [picture, setPicture] = useState('');
    const [description, setDescription] = useState('');
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');
    const [github, setGithub] = useState('');
    const [linkedin, setLinkedin] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newContact: Contact = {
            firstName,
            lastName,
            favorite,
            phoneNumber,
            picture,
            description,
            facebook,
            twitter,
            instagram,
            github,
            linkedin,
        }
        addContact(newContact);
    }

  return (
    <>
        <h1 className="font-black text-3xl text-indigo-800 text-center">Nuevo Contácto</h1>
        <p className="mt-3 text-center">LLena todos los campos para registrar un nuevo contácto</p>

        <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
            <form>
                <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="firstName"
                >*Nombre:</label>
                <input 
                    id="firstName"
                    type="text"
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
                    type="text"
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
                        type="text"
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
                        type="text"
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
                        type="text"
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
                        type="text"
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
                        type="text"
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
                        type="text"
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
                        as="textarea"
                        id="description"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                        placeholder="Notas del Contácto"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <input 
                    onClick={handleSubmit}
                    type="submit" 
                    className="mt-5 cursor-pointer hover:bg-indigo-900 w-full bg-indigo-800 p-3 uppercase font-bold text-white text-sm" 
                    value='Registrar Cliente'
                />
            </form>
        </div>
    </>
  )
}
