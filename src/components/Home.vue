<template>
  <v-container class="home-container">
    <!-- Willkommensbanner -->
    <v-row justify="center">
      <v-col cols="12">
        <div class="banner-wrapper">
          <!-- Real Image -->
          <v-img
            v-show="imageLoaded"
            :src="bannerImage"
            alt="Schützenvereinigung Zum Eichenwald"
            class="banner-image mb-6"
            max-width="100%"
            height="400px"
            contain
          >
            <template v-slot:default>
              <img :src="bannerImage" class="hidden-img" @load="onImageLoad" />
            </template>
          </v-img>

          <!-- Skeleton Loader -->
          <v-skeleton-loader v-show="!imageLoaded" class="skeleton-banner"></v-skeleton-loader>
        </div>
      </v-col>
    </v-row>

    <!-- Haupttext und Inhalte -->
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="welcome-card">
          <v-card-title class="text-h4 text-center font-weight-bold mb-6">
            Willkommen bei der Schützenvereinigung "Zum Eichenwald"
          </v-card-title>
          <v-card-text>
            <p class="text-body-1 text-justify mb-6">
              Wir freuen uns, Euch auf unserer Website begrüßen zu dürfen! Hier könnt Ihr einen Einblick in unseren traditionsreichen Verein erhalten.
              Erfahrt mehr über unsere Angebote, Veranstaltungen und die Freude am Schießsport. Wir laden Euch herzlich ein, uns an Schießtagen zu besuchen
              oder uns über das Kontaktformular zu erreichen.
            </p>

            <div class="text-center mb-6">
              <v-btn color="#355E3B" large href="/kontakt">Jetzt Kontakt aufnehmen</v-btn>
            </div>

            <p class="text-body-1 text-justify mb-6">
              Probiert es selbst und entdeckt die Begeisterung für den Schießsport! Informiert Euch über unser vielfältiges Angebot: von Luftpistolen und -gewehren bis hin zu Kleinkaliber- und großkalibrigen Handfeuerwaffen, Unterhebel-Repetiergewehren sowie Schwarzpulver-Vorderladerwaffen. Unsere moderne Schießanlage steht Euch für ein unverbindliches Probetraining zur Verfügung – inklusive Leihwaffen und Ausrüstung. Unsere erfahrenen Schützen stehen Euch mit Rat und Tat zur Seite.
            </p>

            <v-divider class="my-6"></v-divider>

            <h2 class="text-h5 text-center font-weight-medium mb-4">Schießtage</h2>
            <v-row align="center">
              <v-col cols="12" md="8">
                <p class="text-body-1 text-justify mb-6">
                  <strong>Freitags:</strong> Ab 19:00 Uhr ist das Schützenheim geöffnet. Wir freuen uns auf Euren Besuch!<br />
                  <strong>BDS Schießen:</strong> Immer dienstags von 18:30 Uhr bis 21:00 Uhr.
                </p>
              </v-col>
              <v-col cols="12" md="4">
                <v-img
                  src="schützenheim.jpg"
                  alt="Schützenheim Zum Eichenwald"
                  class="schuetzenheim-image-large rounded"
                  :lazy-src="'schuetzenheim_small.jpg'"
                >
                  <template v-slot:placeholder>
                    <v-skeleton-loader type="image" class="skeleton-image"></v-skeleton-loader>
                  </template>
                </v-img>
              </v-col>
            </v-row>

            <v-divider class="my-6"></v-divider>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "vue";
import bannerImage from "@/assets/images/schützenverein.jpg";

export default {
  name: "Home",
  setup() {
    const imageLoaded = ref(false);

    const onImageLoad = () => {
  
      imageLoaded.value = true;
    };

    return {
      bannerImage,
      imageLoaded,
      onImageLoad,
    };
  },
};
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Prevent text from jumping */
.banner-wrapper {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Real Image */
.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  transition: opacity 0.3s ease-in-out;
}

/* Skeleton Loader */
.skeleton-banner {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  position: absolute;
}

/* Hidden Image Trick (Triggers @load) */
.hidden-img {
  display: none;
}

/* Smooth shimmer effect */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Card Styling */
.welcome-card {
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  background-color: #f9f9f9;
}
</style>
