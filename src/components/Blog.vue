<script lang="ts">
import { defineComponent } from 'vue'

interface BlogArticle {
    title: string
    date: string
    description: string
    route: string
}

export default defineComponent({
    name: 'Blog',
    computed: {
        articles(): BlogArticle[] {
            return [
                {
                    title: this.$t('blog.articles.takuzu.title'),
                    date: this.$t('blog.articles.takuzu.date'),
                    description: this.$t('blog.articles.takuzu.description'),
                    route: '/blog/takuzu'
                }
                // Add more articles here as needed
            ]
        }
    },
    methods: {
        navigateToArticle(route: string) {
            this.$router.push(route)
        }
    }
})
</script>

<template>
    <div class="container-blog">
        <div class="container-blog-content">
            <!-- Header Section -->
            <div class="blog-header">
                <h1 class="blog-title">{{ $t('blog.title') }}</h1>
                <p class="blog-subtitle">{{ $t('blog.subtitle') }}</p>
            </div>

            <!-- Articles Timeline -->
            <div class="blog-articles-section">
                <div class="blog-timeline">
                    <div 
                        v-for="(article, index) in articles" 
                        :key="index"
                        class="blog-item"
                        @click="navigateToArticle(article.route)"
                    >
                        <div class="blog-date">{{ article.date }}</div>
                        <div class="blog-content-card">
                            <h3 class="blog-article-title">{{ article.title }}</h3>
                            <p class="blog-article-description">{{ article.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
