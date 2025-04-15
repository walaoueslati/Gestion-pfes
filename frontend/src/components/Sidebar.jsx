import React from "react";


function Sidebar(){
    return(
        <div class="h-screen w-64 bg-white border-r overflow-y-auto">    
        <nav class="mt-4 space-y-1">
    
            <a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7m-9 14V10a2 2 0 012-2h4a2 2 0 012 2v12m-6 0h6"></path></svg>
                <span>Accueil</span>
            </a>
    
            <a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M8 16l4-4m0 0l4 4m-4-4v12"></path></svg>
                <span>Actualités dirigées <span class="text-red-500 font-bold">| New</span></span>
            </a>
    
            <a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"></path></svg>
                <span>Qualité</span>
            </a>
    
            <a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2-10H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2z"></path></svg>
                <span>Fiche de renseignements</span>
            </a>
    
            <a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 4a2 2 0 012-2h14a2 2 0 012 2v16l-7-3-7 3V4z"></path></svg>
                <span>Emploi du temps</span>
            </a>
    
            <a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 17v-6h6v6m-6 0a2 2 0 11-4 0m10 0a2 2 0 11-4 0m4-10V5a2 2 0 00-2-2H7a2 2 0 00-2 2v6h10z"></path></svg>
                <span>Rattrapages</span>
            </a>
    
            <a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                <span>Liste des groupes</span>
            </a>
    
            <a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"></path></svg>
                <span>Tous les Emplois du temps</span>
            </a>
    
            <a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"></path></svg>
                <span>E-Forms</span>
            </a>
    
            <a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                <span>Mes demandes</span>
            </a>
    
            <a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
                <span>Notes</span>
            </a>
    
            <a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"></path></svg>
                <span>Bibliothèque</span>
            </a>
    
            <a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h16"></path></svg>
    <span>Supports de cours</span>
</a>

<a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 8h18M3 12h18M3 16h18"></path></svg>
    <span>Calendrier des examens</span>
</a>

<a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 8h18M3 12h18M3 16h18"></path></svg>
    <span>Calendrier des délibérations</span>
</a>

<a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h16"></path></svg>
    <span>Liste d'émargement</span>
</a>

<a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h16"></path></svg>
    <span>Calendrier Universitaire</span>
</a>

<a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path></svg>
    <span>Offres de Stages / emplois</span>
</a>

<a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"></path></svg>
    <span>Règlement interne</span>
</a>
<a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 11V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h6"></path><path d="M8 10h8m-8 4h5"></path><path d="M20 21l-2-2-2 2m2-2v-5"></path></svg>
    <span>IssatSo Alumni | <span class="text-blue-500 font-bold">Bientôt</span></span>
</a>

<a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2h-2"></path><path d="M7 8H5a2 2 0 00-2 2v7a2 2 0 002 2h2m10-11V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 0v8"></path></svg>
    <span>Envoyer vos avis</span>
</a>
<a href="./DisponibiliteProf" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2h-2"></path><path d="M7 8H5a2 2 0 00-2 2v7a2 2 0 002 2h2m10-11V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 0v8"></path></svg>
    <span>Disponibilite prof</span>
</a>

<a href="#" class="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-gray-100">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12H3m12 0l-4-4m4 4l-4 4m13-4a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>Se déconnecter</span>
</a>
        </nav>
    </div>
    


    )
}
export default Sidebar;