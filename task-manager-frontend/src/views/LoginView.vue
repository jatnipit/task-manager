<script setup>
import { RouterLink, useRouter } from "vue-router";
import { reactive } from "vue";
import { POSITION, useToast } from "vue-toastification";
import { login, register } from "../api/auth";

const router = useRouter();
const toast = useToast();

const formData = reactive({
  username: "",
  password: "",
});

const handleLogin = async () => {
  try {
    await login(formData);
    toast.success("Login successful", {
      position: POSITION.TOP_RIGHT,
      timeout: 3000,
      // backgroundColor: "#2ecc71",
      // color: "#fff",
    });
    router.push("/");
  } catch (e) {
    toast.error("Invalid username or password", {
      position: POSITION.TOP_RIGHT,
      timeout: 3000,
      // backgroundColor: "#f8312f",
      // color: "#fff",
    });
    console.error(e);
  }
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-base-200">
    <div class="w-full max-w-sm p-8 space-y-4 bg-white shadow-lg rounded-lg">
      <h2 class="text-2xl font-bold text-center">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-control">
          <label class="label" for="email">
            <span class="label-text">Email or Username</span>
          </label>
          <input
            id="email"
            type="text"
            v-model="formData.username"
            placeholder="Enter your email or username"
            class="input input-bordered w-full"
            required
          />
        </div>
        <div class="form-control">
          <label class="label" for="password">
            <span class="label-text">Password</span>
          </label>
          <input
            id="password"
            type="password"
            v-model="formData.password"
            placeholder="Enter your password"
            class="input input-bordered w-full"
            required
          />
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary w-full" type="submit">Login</button>
        </div>
      </form>
      <p class="text-center">
        Don't have an account?
        <RouterLink to="/register" class="text-primary">Sign up</RouterLink>
      </p>
    </div>
  </div>
</template>
