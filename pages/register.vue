<template>
    <div>
        <article id="register-form">
            <h2>Register</h2>
            <label for="Name">First Name</label>
            <input id="name" type="text" placeholder="name" />
            <label for="Surname">Last Name</label>
            <input id="surname" type="text" placeholder="surname" />
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="email" v-model="email"/>
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="password" v-model="password"/>
            <button class="submit" @click="createUser()"> Create account </button>
        </article>
    </div>
</template>


<script setup lang="ts">
const email= ref("")
const password= ref("")
const supabase = useSupabaseClient()
async function createUser() {
    const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
    })
    console.log(data)
    console.error(error)
    return navigateTo("/")
}
</script>

<style lang="css" scoped>
#register-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    margin-top: 50px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

label {
    display: block;
    margin-bottom: 12px;
    font-weight: bold;
    padding-top: 30px;
    padding-right: 350px;
}

input {
    display: block;
    width: 100%;
    height: 40px;
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button.submit {
    background-color: #000;
    color: #fff;
    padding: 12px 20px;
    margin-top: 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 5px;
}

button.submit:hover {
    background-color: #333;
}

.createAccount a {
    color: #000000;
    text-decoration: none;
}

#error {
    margin-top: 20px;
}

.errorCreate {
    color: #e74c3c;
}
</style>