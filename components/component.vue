<template><!-- <li v-for="item in items" :key="item.id" class="py-4"> -->
    <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <!-- component -->
        <div v-for="item in items" :key="item.id" class="py-4">
            <a href="">{{item.name}}</a>
        </div>
    </div>
</template>
  
<script setup lang="ts">
const items = [
    { id: 1, link: "", name: "/api/online" },
    { id: 2, link: "", name: "/api/user" },
    { id: 3, link: "", name: "/api/user/$id" },
    // More items...
]
</script>