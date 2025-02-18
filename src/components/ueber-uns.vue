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
        <v-btn color="#355E3B" text href="https://amplify-d3lucdea93nvum-ma-staticfilesbucketffc2128-n2ixfkzqsd5z.s3.eu-central-1.amazonaws.com/Mitgliedsantrag_GlueckAuf.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAWU3D7RT4M42JNKJQ%2F20250218%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250218T211118Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aDGV1LWNlbnRyYWwtMSJHMEUCIQDPYNJ6g4zYa%2BsTerIbReJALKRTbqYhd4mP72Q81VYycgIgU1bQqXO%2BdSlr9B%2FdCWbl%2Bj6GJj%2BRwtdXZABEspovvr4q%2BAIIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARADGgw0NTcwODY4MzE4NjQiDNVbZrvavneNJ4TMcCrMApDofjvNQZKa%2BXf0uqhEWvjmQJ7Oj2HqlKUIWhcVuPJ43coZ78N1YAQxTnTTo4V7ehObHOeuuhVfCsLQrFIYdrgU14oYXMLviHXmYXYpyaD9slP4fi9joX%2FNYW2xAFWV0sFI%2BcuJ70g0sa9x%2F5pLXGOgR9mr0Hi4aOS%2FIAQub0AjQq%2FC0gETQwg7I4jIFRB%2BaxRpE2I4yHwH3S3lstoGbn4us9voMPBMOhDRiujiid6F2DuQpsiBPug7aARu5%2B65%2Fd1SnYKAREPj7jpNiMPXgp%2FUb8lt7Rtux1XLkKJSQzqfxdcgE1JMcGxTZ0JzSn7aVF3aWg9FqdGydCZ5PDpCQZ5uoWCzrTYum1oGpUxRd63Cf5vV7sO3g1B6cEPXDslv1In9uQ0IqbjPLt0lP7q8HARQgv1oazF9ocVydhPdERQ70WzbPpLnZhRHbOZ5MNyu070GOrMCk1IjkuSice78fdwzsQnLtrKRZV0a5XA73HSSlH5veLLGlsGYETqRugJNYAmPgPREcR5AmrmQmMltji7bA8T5o7AqVk2Y9aw6Cy2BBtO7vIudb90bfCvk5TSIWMQ07pD3NPUpxog9Be4UUi%2B72DfZfziwpurevL%2Brr2TYRXnLpZ6KQ3kXQQ8d9SIfkf%2BdqseLpb93LtttNCtmWUpZq7Rqy%2FxlKP%2BW77fcDCrUlboltLeXjrwCRoTsXOjlcD3IIa7sfGf%2FX%2B%2B64w5v5HpHpd3RH4QUxZuiAPxuhdERv8YYx4PxdeJnfQPIVeqAMxwXG8Vn7rBizxtI174pApm6J9jIbNJ7kzhAfuNQ4bO3tqzjs%2BtsVbwwD%2F5qyP0hudVC5THYPXkhJxBRr5xNl%2Fb%2BM%2BrHeqBWrw%3D%3D&X-Amz-Signature=5d6ce7c492548f19fbedebe4939014231268bbb21e88d3db481960627ab207a8&X-Amz-SignedHeaders=host&x-id=GetObject" download>
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

      headerImageLoaded.value = true;
    };

    const onProfileImageLoad = (index) => {
     
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
