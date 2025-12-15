<script lang="ts">
import { defineComponent } from 'vue'

import backgroundImage from '@/assets/images/background-top.jpg' // Remplacez par le nom de votre image
import labelILogo from '@/assets/images/label-i.png' // Logo LABEL[i]
import ambiguLogo from '@/assets/images/ambigu.png' // Logo AMBIGU
import openMPLogo from '@/assets/images/OpenMP_logo.png' // Logo OpenMP
import openMPILogo from '@/assets/images/Open_MPI_logo.png' // Logo Open MPI

import cvPdf from '@/assets/CV_AlexandreLP.pdf'

import global from '@/assets/images/world.png'
import navette from '@/assets/images/navette.png'
import paper from '@/assets/images/paper.png'

export default defineComponent({
    computed: {
        associations() {
            return [
                {
                    year: this.$t('associations.labeli.date'),
                    name: 'LABEL[i]',
                    role: this.$t('associations.labeli.role'),
                    description: this.$t('associations.labeli.description'),
                    logo: labelILogo
                },
                {
                    year: this.$t('associations.ambigu.date'),
                    name: 'AMBiGU',
                    role: this.$t('associations.ambigu.role'),
                    description: this.$t('associations.ambigu.description'),
                    logo: ambiguLogo
                }
            ]
        }
    },
    data() {
        return {
            backgroundImage: backgroundImage,
            global: global,
            navette: navette,
            paper: paper,
            formData: {
                name: '',
                email: '',
                message: ''
            },
            technologies: [
                // Langages
                { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', url: 'https://en.cppreference.com/w/c' },
                { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', url: 'https://isocpp.org/' },
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', url: 'https://www.python.org/' },
                { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org/' },
                
                // HPC Libraries & Frameworks
                { name: 'OpenMP', icon: openMPLogo, url: 'https://www.openmp.org/' },
                { name: 'OpenCL', icon: 'https://cdn.simpleicons.org/khronosgroup/CC3333', url: 'https://www.khronos.org/opencl/' },
                { name: 'MPI', icon: openMPILogo, url: 'https://www.mpi-forum.org/' },
                { name: 'CUDA', icon: 'https://cdn.simpleicons.org/nvidia/76B900', url: 'https://developer.nvidia.com/cuda-toolkit' },
                { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', url: 'https://vuejs.org/' },
                
                // Tools & Others
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', url: 'https://git-scm.com/' },
                { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', url: 'https://www.docker.com/' },
                { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', url: 'https://www.linux.org/' },
                { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', url: 'https://www.gnu.org/software/bash/' },
            ]
        }
    },
    methods: {
        downloadCV() {
            const link = document.createElement('a')
            link.href = cvPdf
            link.download = "CV_AlexandreLP.pdf"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        },
        handleSubmit() {
            // Créer le lien mailto avec les données du formulaire
            const subject = encodeURIComponent(`${this.$t('home.contact.name')}: ${this.formData.name}`)
            const body = encodeURIComponent(
                `${this.$t('home.contact.name')}: ${this.formData.name}\n` +
                `${this.$t('home.contact.email')}: ${this.formData.email}\n\n` +
                `${this.$t('home.contact.message')}:\n${this.formData.message}`
            )
            const mailtoLink = `mailto:alexloup.dev@gmail.com?subject=${subject}&body=${body}`
            
            // Ouvrir le client email
            window.location.href = mailtoLink
            
            // Réinitialiser le formulaire après un court délai
            setTimeout(() => {
                this.formData = {
                    name: '',
                    email: '',
                    message: ''
                }
            }, 500)
        },
        handleImageError(event: Event) {
            console.error('Erreur de chargement de l\'image:', event)
            const img = event.target as HTMLImageElement
            img.src = labelILogo
        }
    }
})
</script>

<template>
    <div class="container-home">
        <div class="container-home-content">
            <div class="home-content-item">
                <div 
                    class="home-content-top"
                    :style="{ backgroundImage: `url(${backgroundImage})` }"
                >
                    <!-- ABOUT ME -->
                    <div class="card-section-item">
                            <img :src="global" alt="world-about-me" class="world-img"/>
                            <h3>{{ $t('home.aboutMe') }}</h3>
                    </div>

                    <!-- HEY Title -->
                    <div class="card-section-item">
                            <h2>{{ $t('home.heyTitle') }}</h2>
                            <p>{{ $t('home.heySubtitle') }}</p>
                    </div>

                    <!-- MY MISSION -->
                    <div class="card-section-item">
                            <div class="about-section-item-white-blur">
                                <span>
                                    <img :src="navette" alt="target-mission"/>
                                    <h3>{{ $t('home.myMission') }}</h3>
                                </span>
            
                                <p>{{ $t('home.myMissionText') }}</p>
                            </div>
                    </div>
                </div>
            </div>
                
            <div class="home-content-items">
                <div class="about-section-item">
                    <h2>{{ $t('home.aboutMe') }}</h2>
                    <p>{{ $t('home.aboutMe1') }}</p>
                    <p>{{ $t('home.aboutMe2') }}</p>
                    <p>{{ $t('home.aboutMe3') }}</p>
                </div>
                
                <div class="cv-section-item">
                    <span>
                        <img :src="paper" alt="paper-cv">
                        <h2>CV</h2>
                    </span>
                    
                    <button @click="downloadCV">{{ $t('home.downloadCV') }}</button>
                </div>
            </div>
        
            <!-- PROFESSIONAL BACKGROUND -->
            <div class="home-content-item professional-section">
                <h2 class="section-title">{{ $t('home.professionalBackground') }}</h2>
                <div class="professional-timeline">
                    <div class="professional-item">
                        <div class="professional-year">{{ $t('professional.internship2026.date') }}</div>
                        <div class="professional-content">
                            <h3>{{ $t('professional.internship2026.title') }}</h3>
                            <p class="professional-company">{{ $t('professional.internship2026.company') }}</p>
                            <p class="professional-description" v-html="$t('professional.internship2026.description')"></p>
                        </div>
                    </div>
                    
                    <div class="professional-item">
                        <div class="professional-year">{{ $t('professional.payroll2023.date') }}</div>
                        <div class="professional-content">
                            <h3>{{ $t('professional.payroll2023.title') }}</h3>
                            <p class="professional-company">{{ $t('professional.payroll2023.company') }}</p>
                            <p class="professional-description">{{ $t('professional.payroll2023.description') }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ACADEMICAL PARCOURS -->
            <div class="home-content-item academic-section">
                <h2 class="section-title">{{ $t('home.academicBackground') }}</h2>
                <div class="academic-timeline">
                    <div class="academic-item">
                        <div class="academic-year">{{  $t('academic.master2024.date') }}</div>
                        <div class="academic-content">
                            <h3>{{ $t('academic.master2024.title') }}</h3>
                            <p class="academic-institution">{{ $t('academic.master2024.institution') }}</p>
                            <p class="academic-description">{{ $t('academic.master2024.description') }}</p>
                        </div>
                    </div>
                    
                    <div class="academic-item">
                        <div class="academic-year">{{ $t('academic.bachelor2021.date') }}</div>
                        <div class="academic-content">
                            <h3>{{ $t('academic.bachelor2021.title') }}</h3>
                            <p class="academic-institution">{{ $t('academic.bachelor2021.institution') }}</p>
                            <p class="academic-description">{{ $t('academic.bachelor2021.description') }}</p>
                        </div>
                    </div>

                    <div class="academic-item">
                        <div class="academic-year">{{ $t('academic.bac2018.date') }}</div>
                        <div class="academic-content">
                            <h3>{{ $t('academic.bac2018.title') }}</h3>
                            <p class="academic-institution">{{ $t('academic.bac2018.institution') }}</p>
                            <p class="academic-description">{{ $t('academic.bac2018.description') }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ASSOCIATIONS SECTION -->
            <div class="home-content-item associations-section">
                <h2 class="section-title">{{ $t('home.associations') }}</h2>
                <div class="associations-timeline">
                    <div 
                        v-for="(association, index) in associations" 
                        :key="index"
                        class="association-item"
                    >
                        <div class="association-year">{{ association.year }}</div>
                        <div class="association-content">
                            <div class="association-header">
                                <img 
                                    :src="association.logo || '@/assets/images/label-i.png'" 
                                    :alt="association.name + ' logo'"
                                    class="association-logo"
                                    @error="handleImageError"
                                />
                                <div class="association-text">
                                    <h3>{{ association.name }}</h3>
                                    <p class="association-role">{{ association.role }}</p>
                                </div>
                            </div>
                            <p class="association-description">{{ association.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- TECHNOLOGIES SECTION -->
            <div class="home-content-item technologies-section">
                <h2 class="section-title">{{ $t('home.technologies.title') }}</h2>
                <p class="technologies-subtitle">
                    {{ $t('home.technologies.subtitle') }}
                </p>
                
                <div class="technologies-grid">
                    <a 
                        v-for="tech in technologies" 
                        :key="tech.name"
                        :href="tech.url" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="tech-item"
                    >
                        <div class="tech-icon-wrapper">
                            <img :src="tech.icon" :alt="tech.name" class="tech-icon" />
                        </div>
                        <span class="tech-name">{{ tech.name }}</span>
                    </a>
                </div>
                
                <p class="tech-more">{{ $t('home.technologies.more') }}</p>
            </div>

            <!-- CONTACT FORM -->
            <div class="home-content-item contact-section">
                <h2 class="section-title">{{ $t('home.contact.title') }}</h2>
                <p class="contact-subtitle">
                    {{ $t('home.contact.subtitle') }}
                </p>
                
                <div class="contact-form-box">
                    <form @submit.prevent="handleSubmit" class="contact-form">
                        <div class="form-group">
                            <label for="name">{{ $t('home.contact.name') }}</label>
                            <input 
                                type="text" 
                                id="name" 
                                v-model="formData.name" 
                                required 
                                class="form-input"
                                :placeholder="$t('home.contact.namePlaceholder')"
                            />
                        </div>
                        
                        <div class="form-group">
                            <label for="email">{{ $t('home.contact.email') }}</label>
                            <input 
                                type="email" 
                                id="email" 
                                v-model="formData.email" 
                                required 
                                class="form-input"
                                :placeholder="$t('home.contact.emailPlaceholder')"
                            />
                        </div>
                        
                        <div class="form-group">
                            <label for="message">{{ $t('home.contact.message') }}</label>
                            <textarea 
                                id="message" 
                                v-model="formData.message" 
                                required 
                                maxlength="500"
                                class="form-textarea"
                                :placeholder="$t('home.contact.messagePlaceholder')"
                            ></textarea>
                            <span class="char-count">{{ formData.message.length }}/500 {{ $t('home.contact.charCount') }}</span>
                        </div>
                        
                        <button type="submit" class="btn-submit">{{ $t('home.contact.send') }}</button>
                    </form>
                </div>
                
                <div class="contact-links">
                    <p class="contact-or">{{ $t('home.contact.orContact') }}</p>
                    <div class="social-links">
                        <a href="mailto:alexloup-dev@gmail.com" class="social-link">Email</a>
                        <a href="https://www.linkedin.com/in/alexandre-lp/" class="social-link">LinkedIn</a>
                        <a href="https://www.github.com/AlexLoup33" class="social-link">GitHub</a>
                        <a href="https://x.com/AlexLoup_dev" class="social-link">X</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
