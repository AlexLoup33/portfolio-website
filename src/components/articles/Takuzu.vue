<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TakuzuArticle',
    computed: {
        wordCount(): number {
            const content = this.articleContent
            return content.split(/\s+/).filter(word => word.length > 0).length
        },
        articleContent(): string {
            return `
                Takuzu 2077 est un projet que j'ai développé lors de ma deuxième année de licence, dans le cadre du cours "Projet Technologique". 
                L'objectif était de créer une implémentation complète du jeu Takuzu en langage C, avec plusieurs fonctionnalités avancées.
                
                Le Takuzu est un puzzle logique similaire au Sudoku, mais avec des règles différentes. Le but est de remplir une grille avec des 0 et des 1, 
                en respectant trois contraintes principales : chaque ligne et colonne doit contenir autant de 0 que de 1, il ne peut pas y avoir plus de deux 
                chiffres identiques consécutifs, et chaque ligne et colonne doit être unique.
                
                Pour ce projet, j'ai implémenté plusieurs composants essentiels. Tout d'abord, le moteur de jeu principal qui gère la logique du Takuzu, 
                incluant la validation des règles et la détection des erreurs. J'ai également développé un solver automatique capable de résoudre les grilles 
                de manière récursive en utilisant un algorithme de backtracking.
                
                L'interface graphique a été réalisée avec SDL2, permettant une visualisation claire et interactive du jeu. Les joueurs peuvent cliquer sur 
                les cases pour les modifier, et le système vérifie en temps réel si les règles sont respectées. Un système d'historique permet également de 
                revenir en arrière sur les coups précédents.
                
                Une des parties les plus intéressantes du projet a été le portage Web3. J'ai adapté le code C pour qu'il puisse fonctionner dans un 
                environnement web, ce qui a nécessité une refactorisation importante de l'architecture pour séparer la logique métier de l'interface utilisateur.
                
                Ce projet m'a permis de renforcer mes compétences en programmation C, en algorithmique, et en développement d'interfaces graphiques. 
                Il m'a également initié aux défis du portage de code natif vers des plateformes web.
            `.trim()
        }
    }
})
</script>

<template>
    <div class="article-container">
        <!-- Contenu principal -->
        <article class="article-content">
            <!-- En-tête -->
            <header class="article-header">
                <div class="article-header-left">
                    <h1 class="article-title">Takuzu 2077 - Développement et Architecture</h1>
                    <div class="article-meta">
                        <span class="article-author">Par Alexandre LP</span>
                        <span class="article-separator">•</span>
                        <span class="article-date">Mars 2023</span>
                    </div>
                </div>
                <div class="article-header-right">
                    <span class="article-word-count">{{ wordCount }} mots</span>
                </div>
            </header>

            <!-- Corps de l'article -->
            <div class="article-body">
                <section id="introduction">
                    <h2>Introduction</h2>
                    <p>
                        Takuzu 2077 est un projet que j'ai développé lors de ma deuxième année de licence, dans le cadre du cours "Projet Technologique". 
                        L'objectif était de créer une implémentation complète du jeu Takuzu en langage C, avec plusieurs fonctionnalités avancées.
                    </p>
                </section>

                <section id="regles">
                    <h2>Les règles du Takuzu</h2>
                    <p>
                        Le Takuzu est un puzzle logique similaire au Sudoku, mais avec des règles différentes. Le but est de remplir une grille avec des 0 et des 1, 
                        en respectant trois contraintes principales : chaque ligne et colonne doit contenir autant de 0 que de 1, il ne peut pas y avoir plus de deux 
                        chiffres identiques consécutifs, et chaque ligne et colonne doit être unique.
                    </p>
                </section>

                <section id="implementation">
                    <h2>Implémentation</h2>
                    <p>
                        Pour ce projet, j'ai implémenté plusieurs composants essentiels. Tout d'abord, le moteur de jeu principal qui gère la logique du Takuzu, 
                        incluant la validation des règles et la détection des erreurs. J'ai également développé un solver automatique capable de résoudre les grilles 
                        de manière récursive en utilisant un algorithme de backtracking.
                    </p>
                </section>

                <section id="interface">
                    <h2>Interface graphique</h2>
                    <p>
                        L'interface graphique a été réalisée avec SDL2, permettant une visualisation claire et interactive du jeu. Les joueurs peuvent cliquer sur 
                        les cases pour les modifier, et le système vérifie en temps réel si les règles sont respectées. Un système d'historique permet également de 
                        revenir en arrière sur les coups précédents.
                    </p>
                </section>

                <section id="web3">
                    <h2>Portage Web3</h2>
                    <p>
                        Une des parties les plus intéressantes du projet a été le portage Web3. J'ai adapté le code C pour qu'il puisse fonctionner dans un 
                        environnement web, ce qui a nécessité une refactorisation importante de l'architecture pour séparer la logique métier de l'interface utilisateur.
                    </p>
                </section>

                <section id="conclusion">
                    <h2>Conclusion</h2>
                    <p>
                        Ce projet m'a permis de renforcer mes compétences en programmation C, en algorithmique, et en développement d'interfaces graphiques. 
                        Il m'a également initié aux défis du portage de code natif vers des plateformes web.
                    </p>
                </section>
            </div>
        </article>

        <!-- Sommaire (en haut à droite) -->
        <div class="article-table-of-contents">
            <h3>Sommaire</h3>
            <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#regles">Les règles du Takuzu</a></li>
                <li><a href="#implementation">Implémentation</a></li>
                <li><a href="#interface">Interface graphique</a></li>
                <li><a href="#web3">Portage Web3</a></li>
                <li><a href="#conclusion">Conclusion</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
</style>
