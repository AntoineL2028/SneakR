<template>
    <div>
        <div id="login-form">
            <h2>Change your password</h2>
            <label for="password">Password</label>
            <input v-model="newPassword" id="password" type="password" placeholder="New password" />
            <label for="new_password">Confirm</label>
            <input v-model="confirm" id="new_password" type="password" placeholder="New password" />
            <button class="submit" @click="change_password()"> Change </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()
const supabase = useSupabaseClient()
const newPassword = ref("");
const confirm = ref("");
async function change_password() {
    if (newPassword.value == confirm.value) {
        const { data, error } = await supabase.auth.updateUser({
            password: newPassword.value
        })
        if (error) {
            console.log(error);
            
            return;
        }
        router.push("/")
    } else {
        alert("Passwords are different")
    }
}
</script>

<style lang="css" scoped>
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