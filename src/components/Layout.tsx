import { Outlet, Link, useOutletContext, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Contact from '../Interfaces/contact';

import corazon from '../img/heart.png';
import corazonRojo from '../img/heart_filled.png';

interface useLayOutContext { 
    addContacts: (contact: Contact) => void;
    editContacts: (contact: Contact) => void;
    deleteContact: (id: string) => void;
}

export function useLayoutContext() {
    return useOutletContext<useLayOutContext>();
}

const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const contactsStorage = localStorage.getItem('contactos') as string;
    const contactsArray = JSON.parse(contactsStorage) ?? [] as Array<Contact>;
    const [contacts, setContacts] = useState<Array<Contact>>(contactsArray);
    const [showFavorites, setShowFavorites] = useState(false);
    const [search, setSearch] = useState('')
    const [showContacts, setShowContacts] = useState<Array<Contact>>(contacts);

    useEffect(() => { 
        localStorage.setItem('contactos', JSON.stringify(contacts) ?? [])
    }, [contacts]);

    const addContacts = (contact: Contact) => {
        let newContacts = [...contacts, contact]
        newContacts.sort((a, b) => {
            if (a.firstName === b.firstName) {
              return a.lastName.localeCompare(b.lastName);
            } else {
              return a.firstName.localeCompare(b.firstName);
            }
          });
        setContacts(newContacts);
    }
    const editContacts = (contact: Contact) => {
        const newContacts = contacts.map((c: Contact) => c.id === contact.id ? contact : c);
        setContacts(newContacts);
    }
    const deleteContact = (id: string) => {
        const newContacts = contacts.filter((c: Contact) => c.id !== id);
        setContacts(newContacts);
        navigate('/');
    }
    const toggleFavorite = (id: string) => {
        const newContacts = contacts.map((c: Contact) => c.id === id ? {...c, favorite: !c.favorite} : c);
        setContacts(newContacts);
    }
    useEffect(() => {
        if(showFavorites){
            const newContacts = contacts.filter(contact => contact.favorite);
            setShowContacts(newContacts);
        }  else { 
            setShowContacts(contacts);
        }
    }, [showFavorites, contacts]);

    useEffect(() => { 
        const expresion = new RegExp("\\b" + search, "i");
        let contactsABuscar = showFavorites ? contacts.filter(contact => contact.favorite) : contacts;
        const newContacts = contactsABuscar.filter(contact => {
            let nombreCompleto = contact.firstName + ' ' + contact.lastName;
            if(nombreCompleto.toLowerCase().search(expresion) != -1){
                return contact;
            }
        });
        setShowContacts(newContacts)
    }, [search]);

    return (
        <div className="lg:flex lg:min-h-screen">   
            <aside className='bg-gray-200 px-5 py-10 h-screen flex-shrink-0 lg:w-1/4'>
                <div className='h-1/3 lg:h-1/4'>
                    <Link to="/"><h1 className='text-2xl md:text-3xl lg:text-3xl text-center my-2 font-bold text-gray-800'>Contactos<span className='text-indigo-800'>App</span></h1></Link>
                    <Link to="/agregar"  className='block w-2/3 text-center m-auto my-4 py-2 bg-indigo-800 text-gray-100 uppercase font-bold text-sm md:text-base'>Agregar Contácto</Link>
                    <div className="mx-auto">   
                        <label htmlFor="buscador" className="mb-2 text-sm font-medium text-gray-900 sr-only">Buscar</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <img className='w-5' src="https://cdn-icons-png.flaticon.com/512/25/25313.png" alt="Lupa Imagen" />
                            </div>
                            <input value={search} onChange={e => setSearch(e.target.value)} type="search" id="buscador" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 " placeholder={`Busca en tus ${!showFavorites ? 'contáctos' : 'contáctos favoritos'}`} />
                        </div>
                    </div>
                    <div className='flex my-3'>
                        <button onClick={() => setShowFavorites(false)} className={`w-1/2 ${!showFavorites && 'bg-gray-100'}`}>Todos</button>
                        <button onClick={() => setShowFavorites(true)} className={`w-1/2 ${showFavorites && 'bg-gray-100'}`}>Favoritos</button>
                    </div>
                </div>
                
                <div className='flex flex-col h-2/3 lg:h-3/4 overflow-y-scroll lg:no-scrollbar'>
                    {showContacts.length ? showContacts.map(contact => (
                        <Link key={contact.id} className={`flex relative py-5 px-2 border-t-2 hover:bg-gray-100 border-gray-300 ${location.pathname.slice(10) === contact.id && 'bg-gray-100'} `} to={`/contacto/${contact.id}`}>
                            {contact.firstName} {contact.lastName}
                            <button className='absolute right-1 top-0 bottom-0 w-6 z-10' onClick={() => toggleFavorite(String(contact.id))}>
                                <img src={contact.favorite ? corazonRojo : corazon} alt="corazon" />
                            </button>
                        </Link>
                    )) : (
                        <p className='text-center text-gray-800'>No hay contáctos</p>
                    )}
                </div>
            </aside>
            <main className="lg:w-3/4 p-2 md:p-10 lg:h-screen overflow-scroll">
                    <Outlet context={{addContacts, editContacts, deleteContact}}></Outlet>
            </main>
        </div>
    )
}
export default Layout
