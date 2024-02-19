import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="lg:flex lg:flex-row-reverse lg:min-h-screen">   
            <main className="lg:w-3/4 p-10">
                    <Outlet></Outlet>
            </main>
            <aside className='bg-gray-200 px-5 py-10 h-screen flex-shrink-0 lg:w-1/4'>
                <div className='h-1/4'>
                    <h1 className='text-2xl md:text-3xl lg:text-3xl text-center my-2 font-bold text-gray-800'>Contactos<span className='text-indigo-800'>App</span></h1>
                    <Link to="/agregar"  className='block w-2/3 text-center m-auto my-4 py-2 bg-indigo-800 text-gray-100 uppercase font-bold text-sm md:text-base'>Agregar Contacto</Link>
                    <div className="max-w-md mx-auto">   
                        <label htmlFor="buscador" className="mb-2 text-sm font-medium text-gray-900 sr-only">Buscar</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <img className='w-5' src="https://cdn-icons-png.flaticon.com/512/25/25313.png" alt="Lupa Imagen" />
                            </div>
                            <input type="search" id="buscador" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 " placeholder="Busca en tus contáctos" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col my-5 h-3/4  overflow-y-scroll no-scrollbar'>
                    <Link className='py-5 px-2 border--2 border-gray-300 hover:bg-gray-100' to='/'>
                        Adriana López
                    </Link>
                    <Link className='py-5 px-2 border--2 border-gray-300 hover:bg-gray-100' to='/'>
                        Adriana López
                    </Link>
                </div>
            </aside>
        </div>
    )
}
export default Layout