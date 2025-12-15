<script lang="ts">
import { defineComponent } from 'vue'
import openMPLogo from '@/assets/images/OpenMP_logo.png'
import openMPILogo from '@/assets/images/Open_MPI_logo.png'

// Déclaration des photos des projets

// TAKUZU 2077
import Takuzu1 from '@/assets/images/takuzu1.png'
import Takuzu2 from '@/assets/images/Takuzu2.png'
import Takuzu3 from '@/assets/images/Takuzu3.png'


// Web App Images
import Pdl1 from '@/assets/images/pdl1.png'

// Scrabble
import Scrabble1 from '@/assets/images/scrabble1.png'
import Scrabble2 from '@/assets/images/scrabble2.png'

interface Project {
    title: string
    period: string
    description: string
    images: string[]
    technologies: string[]
    githubUrl: string
    blogRoute?: string
}

export default defineComponent({
    data() {
        return {
            selectedImageIndex: {} as Record<number, number>,
            technologies: [
                // Langages
                { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', url: 'https://en.cppreference.com/w/c' },
                { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', url: 'https://isocpp.org/' },
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', url: 'https://www.python.org/' },
                { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org/' },
                { name: 'SDL2', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sdl/sdl-original.svg', url: 'https://www.libsdl.org/' },
                { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', url: 'https://www.java.com/' },
                
                // HPC Libraries & Frameworks
                { name: 'OpenMP', icon: openMPLogo, url: 'https://www.openmp.org/' },
                { name: 'OpenCL', icon: 'https://cdn.simpleicons.org/khronosgroup/CC3333', url: 'https://www.khronos.org/opencl/' },
                { name: 'MPI', icon: openMPILogo, url: 'https://www.mpi-forum.org/' },
                { name: 'CUDA', icon: 'https://cdn.simpleicons.org/nvidia/76B900', url: 'https://developer.nvidia.com/cuda-toolkit' },
                { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', url: 'https://vuejs.org/' },
                { name: 'Maven', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg', url: 'https://maven.apache.org/' },
                { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', url: 'https://pytorch.org/' },
                { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', url: 'https://www.tensorflow.org/' },
                { name: 'JavaFX', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', url: 'https://openjfx.io/' },
                // Tools & Others
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', url: 'https://git-scm.com/' },
                { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', url: 'https://www.docker.com/' },
                { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', url: 'https://www.linux.org/' },
                { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', url: 'https://www.gnu.org/software/bash/' },
            ]
        }
    },
    computed: {
        projects(): Project[] {
            return [
                {
                    title: this.$t('work.projets.takuzu2077.title'),
                    period: this.$t('work.projets.takuzu2077.date'),
                    description: this.$t('work.projets.takuzu2077.description'),
                    images: [
                        Takuzu1,
                        Takuzu2,
                        Takuzu3
                    ],
                    technologies: ['C', 'SDL2', 'Linux'],
                    githubUrl: 'https://github.com/AlexLoup33/Takuzu_2077',
                    blogRoute: 'blog/Takuzu'
                },
                {
                    title: this.$t('work.projets.webAppImage.title'),
                    period: this.$t('work.projets.webAppImage.date'),
                    description: this.$t('work.projets.webAppImage.description'),
                    images: [
                        Pdl1,
                    ],
                    technologies: ['Vue.js', 'TypeScript', 'Java', 'Maven', 'Git', 'Docker'],
                    githubUrl: 'https://github.com/AlexLoup33/example-project-2'
                },
                {
                    title: this.$t('work.projets.scrabble.title'),
                    period: this.$t('work.projets.scrabble.date'),
                    description: this.$t('work.projets.scrabble.description'),
                    images: [
                        Scrabble1,
                        Scrabble2
                    ],
                    technologies: ['Java', 'Maven', 'JavaFX', 'Linux', 'Git'],
                    githubUrl: 'https://github.com/AlexLoup33/example-project-3',
                }
            ]
        }
    },
    methods: {
        getTechIcon(techName: string): string {
            const tech = this.technologies.find(t => t.name === techName)
            return tech ? tech.icon : ''
        },
        selectImage(projectIndex: number, imageIndex: number) {
            this.selectedImageIndex[projectIndex] = imageIndex
        },
        getSelectedImage(projectIndex: number): number {
            return this.selectedImageIndex[projectIndex] ?? 0
        },
        navigateToBlog(route: string) {
            this.$router.push(route)
        }
    },
    mounted() {
        // Initialize selected image index for each project
        this.projects.forEach((_, index) => {
            this.selectedImageIndex[index] = 0
        })
    }
})
</script>

<template>
    <div class="container-work">
        <div class="container-work-content">
            <!-- Header Section -->
            <div class="work-header">
                <h1 class="work-title">{{ $t('work.title') }}</h1>
                <p class="work-subtitle">
                    {{ $t('work.subtitle') }}
                    <a href="https://www.github.com/AlexLoup33" target="_blank" rel="noopener noreferrer" class="github-link">
                        {{ $t('work.githubLink') }}
                    </a>
                </p>
            </div>

            <!-- Projects Grid -->
            <div class="projects-grid">
                <div 
                    v-for="(project, projectIndex) in projects" 
                    :key="projectIndex"
                    class="project-card"
                >
                    <!-- Project Header -->
                    <div class="project-header">
                        <h2 class="project-title">{{ project.title }}</h2>
                        <span class="project-period">{{ project.period }}</span>
                    </div>

                    <!-- Project Description -->
                    <p class="project-description">{{ project.description }}</p>

                    <!-- Image Carousel -->
                    <div class="project-carousel" v-if="project.images && project.images.length > 0">
                        <!-- Thumbnails -->
                        <div class="carousel-thumbnails">
                            <button
                                v-for="(image, imageIndex) in project.images"
                                :key="imageIndex"
                                @click="selectImage(projectIndex, imageIndex)"
                                :class="['thumbnail-button', { active: getSelectedImage(projectIndex) === imageIndex }]"
                                :aria-label="`Select image ${imageIndex + 1}`"
                            >
                                <img 
                                    :src="image" 
                                    :alt="`${project.title} - Image ${imageIndex + 1}`"
                                    class="thumbnail-image"
                                />
                            </button>
                        </div>

                        <!-- Main Image -->
                        <div class="carousel-main">
                            <img 
                                :src="project.images[getSelectedImage(projectIndex)]" 
                                :alt="`${project.title} - Main view`"
                                class="main-image"
                            />
                        </div>
                    </div>

                    <!-- Technologies -->
                    <div class="project-tech-icons" v-if="project.technologies && project.technologies.length > 0">
                        <img
                            v-for="(tech, techIndex) in project.technologies"
                            :key="techIndex"
                            :src="getTechIcon(tech)"
                            :alt="tech"
                            :title="tech"
                            class="tech-icon-small"
                        />
                    </div>

                    <!-- Project Links -->
                    <div class="project-links">
                        <a 
                            :href="project.githubUrl" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="github-button"
                        >
                            {{ $t('work.viewOnGithub') }}
                        </a>
                        <button 
                            v-if="project.blogRoute"
                            @click="navigateToBlog(project.blogRoute)"
                            class="blog-button"
                        >
                            {{ $t('work.readBlog') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
