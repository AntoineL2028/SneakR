<template>
        <div id="login-form">
            <h2>Enter your email</h2>
            <label for="email">Email</label>
                <input v-model="email" id="email" type="text" placeholder="Email" />
                <button type="submit" class="submit" @click="send_mail()"> Confirm </button>
    </div>
</template>

<script setup lang="ts">
const email = ref("")
const supabase = useSupabaseClient()

async function send_mail() {
    try {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email.value, {
            redirectTo: 'http://localhost:3000/newpassword',
        });
    } catch (error) {
        console.log(error);
    }
}
</script>

<style>
#login-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    margin-top: 100px;
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

#error {
    margin-top: 20px;
}

.errorLogin {
    color: #e74c3c;
}
</style>
