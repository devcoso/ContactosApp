import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLayoutContext } from "../components/Layout";
import ErrorComponent from "../components/ErrorComponent";

import generarId from '../helpers/generarId';

import Contact from "../Interfaces/contact"

export default function Add() {
    const navigate = useNavigate();
    const { addContacts } = useLayoutContext();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [picture, setPicture] = useState('');
    const [description, setDescription] = useState('');
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');
    const [github, setGithub] = useState('');
    const [linkedin, setLinkedin] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if(!firstName || !lastName) {
            setError('Los campos de Nombre y Apellido son obligatorios');
            return
        }
        
        const id = generarId();
        const newContact: Contact = {
            id,
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
        addContacts(newContact);
        setTimeout(() => {navigate(`/contacto/${id}`)}, 100)
    }

  return (
    <>
        <h1 className="font-black text-3xl text-indigo-800 text-center">Nuevo Contacto</h1>
        <p className="mt-3 text-center">Llena los campos para registrar un nuevo contacto</p>

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
                    placeholder="Nombre del Contacto"
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
                    placeholder="Apellido del Contacto"
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
                        itemType="tel"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Número del Contacto"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="picture"
                    >Imagen del Contacto:</label>
                    <input 
                        id="picture"
                        itemType="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="URL de la Imagen"
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
                        placeholder="Usuario de Facebook del Contacto"
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
                        placeholder="Usuario de Twitter del Contacto"
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
                        placeholder="Usuario de Instagram del Contacto"
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
                        placeholder="Usuario de Github del Contacto"
                        name="github"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="linkedin"
                    >Linkedin:</label>
                    <input 
                        id="linkedin"
                        itemType="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Usuario de Linkedin del Contacto"
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
                        placeholder="Notas del Contacto"
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
                    value='Añadir Contacto'
                />
            </form>
        </div>
    </>
  )
}
