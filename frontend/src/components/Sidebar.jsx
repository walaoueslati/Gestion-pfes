import LogoutButton from '../components/LogoutButton';

function Sidebar(){
    return(
        <div className="h-screen w-64 bg-white border-r overflow-y-auto">    
        <nav className="mt-4 space-y-1">
    
            <a href="./Actualite" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7m-9 14V10a2 2 0 012-2h4a2 2 0 012 2v12m-6 0h6"></path></svg>
                <span>Accueil</span>
            </a>
    
            <a href="./Actualitedirigee" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 16l4-4m0 0l4 4m-4-4v12"></path></svg>
                <span>Actualités dirigées <span className="text-red-500 font-bold">| New</span></span>
            </a>
    
            <a href="./Affectation" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"></path></svg>
                <span>Affectation PFE</span>
            </a>
            <a href="./DisponibiliteProf" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2h-2"></path><path d="M7 8H5a2 2 0 00-2 2v7a2 2 0 002 2h2m10-11V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 0v8"></path></svg>
            <span>Disponibilite prof</span>
            </a>
    
            <a href="#" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"></path></svg>
                <span>E-Forms</span>
            </a>

            <LogoutButton />
        </nav>
    </div>
    )
}
export default Sidebar;