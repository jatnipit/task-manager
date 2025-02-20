<script setup>
import { useRouter, RouterLink } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="fixed left-0 top-0 z-[999] w-full bg-base-100 shadow-lg">
    <div class="container navbar mx-auto">
      <div class="navbar-start">
        <div class="drawer">
          <input id="my-drawer" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
            <!-- Page content here -->
            <label
              for="my-drawer"
              class="btn btn-ghost btn-circle drawer-button"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
          <div class="drawer-side">
            <label
              for="my-drawer"
              aria-label="close sidebar"
              class="drawer-overlay"
            ></label>
            <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <!-- Sidebar content here -->
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="navbar-center">
        <!-- <a class="btn btn-ghost text-xl"></a> -->
        <RouterLink to="/" class="btn btn-ghost text-xl"
          >Task Manager</RouterLink
        >
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span class="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li>
              <RouterLink to="/login">Login</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
