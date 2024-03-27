<template>
    <div
      class="navbar bg-gradient-to-r from-neutral-700 to-neutral-600 text-white"
    >
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            <label
              class="input border-white input-bordered flex items-center gap-2"
            >
              <input
                type="text"
                class="grow border-transparent"
                placeholder="Search"
                @change="(e) => {selectedSubreddit = e.target.value; console.log(selectedSubreddit)}"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4 opacity-70"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
            <li class="m-1.5">
              <a>Sort</a>
              <ul class="p-2 text-black">
                <li>
                  <div class="dropdown dropdown-right">
                    <div tabindex="0" role="a" class="a">Top</div>
                    <ul
                      tabindex="0"
                      class="bg-white dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li @click="handleSort('all')" value="alltime"><a>All Time</a></li>
                      <li @click="handleSort('year')" value="thisyear"><a>This Year</a></li>
                      <li @click="handleSort('month')" value="thismonth"><a>This Month</a></li>
                      <li @click="handleSort('week')" value="thisweek"><a>This Week</a></li>
                      <li @click="handleSort('day')" value="today"><a>Today</a></li>
                    </ul>
                  </div>
                </li>
                <li @click="handleSort('hot')" value="hot"><a>Hot</a></li>
                <li @click="handleSort('new')" value="new"><a>New</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost text-xl">Reddit - Wall</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <label
            class="bg-transparent border-white input input-bordered flex items-center gap-2"
          >
            <input
              type="text"
              class="grow border-transparent"
              placeholder="Search"
              @change="(e) => {selectedSubreddit = e.target.value; console.log(selectedSubreddit)}"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </label>
          <li class="m-1.5">
            <details>
              <summary>{{ sortValue === '' ? 'Sort' : sortValue}}</summary>
              <ul class="p-2 text-black">
                <li>
                  <div class="dropdown dropdown-right">
                    <div tabindex="0" role="btn" class="a">Top</div>
                    <ul
                      tabindex="0"
                      class="bg-white dropdown-content z-[1] menu p-2 shadow rounded-box w-52"
                    >
                      <li @click="handleSort('all')" value="alltime"><a>All Time</a></li>
                      <li @click="handleSort('year')" value="thisyear"><a>This Year</a></li>
                      <li @click="handleSort('month')" value="thismonth"><a>This Month</a></li>
                      <li @click="handleSort('week')" value="thisweek"><a>This Week</a></li>
                      <li @click="handleSort('day')" value="today"><a>Today</a></li>
                    </ul>
                  </div>
                </li>
                <li @click="handleSort('hot')" value="hot"><a>Hot</a></li>
                <li @click="handleSort('new')" value="new"><a>New</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <SettingsComp />
      </div>
    </div>
  </template>
  
<script>
import SettingsComp from './SettingsComp.vue';
import { ref, provide } from 'vue';

export default {
  setup() {
    const selectedSubreddit = ref(''); // Define as ref
    const sortValue = ref('');

    const handleSort = (value) => {
      sortValue.value = value;
      console.log(sortValue.value);
    };

    provide('sortValue', sortValue);
    provide('selectedSubreddit', selectedSubreddit);

    return {
      selectedSubreddit,
      sortValue,
      handleSort
    };
  }
};

</script>

  
<style></style>
  