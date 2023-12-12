<template>
            <div>
            <nav class="navbar">
              <div class="nav_left">
              </div>
            </nav>
            <nav class="navsearch">
              <div class="div_header">
                <a class="name" href="/" ><img class=logo src="assets/logo.png" alt="logo" /></a>
              </div>
              <img class="search" src="assets/iconSearch.svg" alt="loupe"/>
              <div class="searchbar">
                <div class="input-field">
                  <input id="name" type="text" placeholder="Search..." required />
                </div>
                  <UDropdown :items="items" :popper="{ offsetDistance: 0, placement: 'right-start' }">
                    <button class="login">LOGIN</button>
                  </UDropdown>
              </div>
            </nav>
            <div class="bar">
                <button id = "button" class="Collection"><a href="/collection">Collection</a></button>
                <button id = "button" class="Wishlist"><a href="/wishlist">Wishlist</a></button>
                <button id = "button" class="Marque"><a href="">Filtres</a></button>
            </div>
          </div>
</template>

<script setup lang="js">
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const items = user.value
  ? [
    [{
      label: user.value.email,
    }],
    [{
      label: "Log Out",
      click: async () => {
        const { error } = await supabase.auth.signOut();
        reloadNuxtApp();
      }
    }],
  ]
  :
  [
    [{
      label: "Login",
      to: "/login"
    }],
    [{
      label: "Register",
      to: "/register"
    }],
  ]
</script>

<style>
.div_header {
  display: flex;
}
.nav {
  display: flex;
}
.menu {
  display: flex;
  align-items: center;
}
.nav_left {
  font-family: "Avenir", sans-serif;
  display: flex;
  margin-right: 20px;
  margin-top: 10px;
}
.nav_right {
  font-family: "Avenir", sans-serif;
  padding-left: 20px;
  margin-top: 10px;
}
button.login {
        background-color: #ffffff;
        color: #000000;
        padding: 12px 20px;
        margin-top: 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        margin-bottom: 5px;
}
button.login:hover {
        background-color: #b5b5b5;
}
.navbar {
  display: flex;
  justify-content: space-between;
}
.login {
  font-family: "Avenir", sans-serif;
  padding-left: 20px;
}
a {
  color: black;
  text-decoration: none;
}
.name {
    font-family: "Avenir", sans-serif;
    padding-left: 50px;
    margin-top: 10px;
    font-size: 20px;
}
.input-field {
  width: 300px;
  height: 44px;
  line-height: 44px;
  width: 75%;
}
input {
  border: 0;
  outline: 0;
  box-shadow: none;
  border-bottom: 2px solid black;
  width: 90%;
  font-size: 20px;
}
.searchbar {
  display: flex;
  align-items: center;
  width: 100%;
}
.search {
  width: 45px;
  height: 45px;
  padding: 35px;

}
.navsearch {
  display: flex;
}
.logo {
    width: 150px;
    height: 100px;

}
#match {
  border: 0px;
  color: black;
  width: 200px;
  height: 30px;
  font-size: 20px;
  border-bottom: 2px solid #e8e8e8;
  outline: 0;
}
.select {
  font-family: "Avenir", sans-serif;
}
#button {
    margin-top: 50px;
     background-color: #ffffff;
        color: #fff;
        padding: 12px 20px;
        margin-top: 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        margin-bottom: 5px;
}
</style>