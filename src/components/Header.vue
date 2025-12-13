<script lang="ts">
import router from '../router';
</script>

<template>
    <Header>
        <div class="header">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/work">Work</router-link>
                </li>
                <li>
                    <router-link to="/blog">Blog</router-link>
                </li>
            </ul>
        </div>
    </Header>
</template>