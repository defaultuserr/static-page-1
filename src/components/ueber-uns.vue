<template>
  <v-container class="schuetzen-container">
    <!-- Zentrales Bild mit Skeleton Loader -->
    <div class="image-wrapper">
      <v-img v-show="headerImageLoaded" :src="headerImage" alt="Schützenverein Emblem" class="header-image">
        <template v-slot:default>
          <img :src="headerImage" class="hidden-img" @load="onHeaderImageLoad" />
        </template>
      </v-img>
      <v-skeleton-loader v-show="!headerImageLoaded" class="skeleton-image"></v-skeleton-loader>
    </div>

    <h1 class="text-h4 section-title mb-6 text-center font-weight-bold">
      Schützenverein Unterfranking
    </h1>
    <p class="text-body-1 section-description text-center mb-8 font-italic">
      Der größte Verein im ältesten Markt Bayern
    </p>

    <v-divider class="mb-6"></v-divider>

    <!-- Über den Verein -->
    <v-card outlined class="mb-4">
      <v-card-title class="text-h5 font-weight-medium">Über uns</v-card-title>
      <v-card-text class="text-container">
        <p>
          Der Beispielschützenverein <strong>"Eichenlaub 1880"</strong> ist ein traditionsreicher Verein mit einer langen Geschichte und tief verwurzelter Gemeinschaft. Gegründet im Jahr 1880, widmet sich der Verein sowohl dem sportlichen Schießen als auch der Förderung von Kameradschaft und Geselligkeit.
        </p>
        <p>
          Mit über 150 aktiven Mitgliedern bietet <strong>"Eichenlaub 1880"</strong> ein breites Spektrum an Disziplinen, von Luftgewehr- und Bogenschießen bis hin zu modernem Pistolensport. Die Mitglieder treffen sich regelmäßig zu Turnieren, Trainingsabenden und geselligen Veranstaltungen wie Sommerfesten und Schützenbällen.
        </p>
      </v-card-text>
    </v-card>

    <!-- Vorstandschaft -->
    <v-card outlined class="mb-4">
      <v-card-title class="text-h5 font-weight-medium">Vorstandschaft</v-card-title>
      <v-card-text>
        <ul class="board-list">
          <li v-for="(member, index) in boardMembers" :key="index">
            <div class="profile-image">
              <v-img v-show="profileImagesLoaded[index]" :src="member.image" :alt="member.name">
                <template v-slot:default>
                  <img :src="member.image" class="hidden-img" @load="() => onProfileImageLoad(index)" />
                </template>
              </v-img>
              <v-skeleton-loader v-show="!profileImagesLoaded[index]" class="skeleton-profile"></v-skeleton-loader>
            </div>
            <strong>{{ member.title }}: </strong> {{ member.name }}
          </li>
        </ul>
      </v-card-text>
    </v-card>

    <!-- Satzung -->
    <v-card outlined class="mb-4">
      <v-card-title class="text-h5 font-weight-medium">Satzung</v-card-title>
      <v-card-text>
        <p>Unsere aktuelle Satzung steht Ihnen als PDF-Dokument zur Verfügung:</p>
        <br>
        <v-btn color="#355E3B" text @click="downloadPDF" download>
          Satzung herunterladen
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { ref, reactive } from "vue";
import headerImage from "@/assets/images/alterverein.jpg";
import profile1 from "@/assets/images/mann.jpg";
import profile2 from "@/assets/images/mann.jpg";
import profile3 from "@/assets/images/mann.jpg";

export default {
  name: "SchuetzenInfo",
  setup() {
    const headerImageLoaded = ref(false);
    const profileImagesLoaded = reactive([false, false, false]);

    const onHeaderImageLoad = () => {
      console.log("✅ Header image loaded!");
      headerImageLoaded.value = true;
    };

    const onProfileImageLoad = (index) => {
      console.log(`✅ Profile image ${index + 1} loaded!`);
      profileImagesLoaded[index] = true;
    };

    const boardMembers = [
      { name: "Christian Name", title: "1. Schützenmeister", image: profile1 },
      { name: "Andreas Name", title: "2. Schützenmeister", image: profile2 },
      { name: "Thomas Name", title: "Schatzmeister", image: profile3 },
    ];

    return {
      headerImage,
      headerImageLoaded,
      profileImagesLoaded,
      onHeaderImageLoad,
      onProfileImageLoad,
      boardMembers,
    };
  },
  methods:  {
  downloadPDF() {
      const link = document.createElement("a");
      link.href = "sample.pdf"; // Adjust path if needed
      link.download = "sample.pdf"; // Name of the downloaded file
      link.click();
    } }
};
</script>

<style scoped>
.schuetzen-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Image Wrapper */
.image-wrapper {
  width: 300px;
  height: 250px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.header-image {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* Skeleton Loader */
.skeleton-image {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: absolute;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
}

/* Board List */
.board-list {
  padding-left: 0;
  list-style-type: none;
}

.board-list li {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

/* Profile Image */
.profile-image {
  width: 64px;
  height: 64px;
  margin-right: 16px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.skeleton-profile {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  position: absolute;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
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

/* Hidden Image Trick */
.hidden-img {
  display: none;
}

/* Text Styling */
.text-container {
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.6;
  text-align: justify;
}

.section-title {
  font-weight: bold;
}

.section-description {
  color: #555;
  font-style: italic;
}
</style>
