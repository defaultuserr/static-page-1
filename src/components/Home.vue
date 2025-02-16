<template>
  <v-container class="home-container">
    <!-- Willkommensbanner -->
    <v-row justify="center">
      <v-col cols="12">
        <v-img
          src="schützenverein.jpg"
          alt="Schützenvereinigung Zum Eichenwald"
          class="banner-image mb-6"
          max-width="100%"
          height="auto"
          :lazy-src="'schuetzenverein_small.jpg'"
        >
          <template v-slot:placeholder>
            <v-skeleton-loader type="image" class="skeleton-banner"></v-skeleton-loader>
          </template>
        </v-img>
      </v-col>
    </v-row>

    <!-- Haupttext und Inhalte -->
    <v-row justify="center">
      <v-col cols="12" sm="12" md="12" lg="12">
        <v-card class="welcome-card">
          <v-card-title class="text-h4 text-center font-weight-bold mb-6">
            Willkommen bei der Schützenvereinigung "Zum Eichenwald"
          </v-card-title>
          <v-card-text>
            <p class="text-body-1 text-justify mb-6">
              Wir freuen uns, Euch auf unserer Website begrüßen zu dürfen! Hier könnt Ihr einen Einblick in unseren traditionsreichen Verein erhalten. Erfahrt mehr über unsere Angebote, Veranstaltungen und die Freude am Schießsport. Wir laden Euch herzlich ein, uns an Schießtagen zu besuchen oder uns über das Kontaktformular zu erreichen.
            </p>

            <div class="text-center mb-6">
              <v-btn color="primary" large href="/kontakt">Jetzt Kontakt aufnehmen</v-btn>
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

            <h2 class="text-h5 text-center font-weight-medium mb-4">Aktuelles</h2>
            <p class="text-body-1 text-justify mb-6">
              <strong>Weihnachtsfeier:</strong> Am 13.12.2024 fand unsere traditionelle Weihnachtsfeier im Vereinsheim statt. Neben einer besinnlichen Geschichte und musikalischer Begleitung wurden die Schützenkönige (LG und KK) sowie der Jugendschützenkönig (LG) geehrt. Ein wunderschöner Abend für alle Beteiligten!
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.welcome-card {
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  background-color: #f9f9f9;
}

.banner-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
}

.schuetzenheim-image-large {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 16px;
}

.skeleton-banner, .skeleton-image {
  width: 100%;
  height: 300px;
  border-radius: 16px;
}

@media (max-width: 600px) {
  .banner-image {
    height: 200px;
  }
  .skeleton-banner, .skeleton-image {
    height: 200px;
  }
  .welcome-card {
    padding: 16px;
  }
}
</style>
