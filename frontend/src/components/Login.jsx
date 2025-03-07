import React from "react";
import logo from "../assets/images/logo.png";

function Login() {
  return (
    
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-30 w-auto" src={logo} alt="Your Company"/>
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-sky-700">Bienvenu(e)</h2>
    <p class="text-center text-zinc-600">Veuillez saisir vos paramètres d'accès à votre compte Issatso+ !</p>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm/6 font-medium text-gray-900">Email</label>
        <div class="mt-2">
          <input type="email" name="email" id="email" placeholder="entrer votre email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      </div>

      <div>
        
          <label for="password" class="block text-sm/6 font-medium text-gray-900">Mot de passe</label>
        <div class="mt-2">
          <input type="password" name="password" placeholder="entrer votre mot de passe" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
        <div class="text-sm text-right">
            <a href="#" class="font-semibold text-zinc-600 hover:text-zinc-800">mot de passe oublie?</a>
          </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-sky-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Se connecter</button>
      </div>
    </form>

    
  </div>
</div>

  );
}

export default Login;
