<template>
  <v-container class="disziplinen-container">
    <!-- Title Section -->
    <h1 class="text-h4 section-title mb-6 text-center">Schützenstände & Disziplinen</h1>
    <p class="text-body-1 section-description text-center mb-8">
      Entdecken Sie unsere hochmodernen Schützenstände und die Vielfalt an Disziplinen.
    </p>

    <v-divider class="mb-8"></v-divider>

    <!-- Information Section as Plain Text -->
    <div class="information-section mb-8">
      <h2 class="text-h5 font-weight-bold mb-4">Mindestalter</h2>
      <p class="text-body-1 mb-8">
        Bei den Luftdruckwaffen gibt es eine Altersbeschränkung. Luftgewehr / Luftpistole erst ab 12 Jahren (mit elterlichem Einverständnis), alle anderen Waffen/Disziplinen erfordern Volljährigkeit.
      </p>

      <h2 class="text-h5 font-weight-bold mb-4">Schießbetrieb</h2>
      <p class="text-body-1 mb-8">
        Der Schützenverein Beispielname stellt für den Trainingsbetrieb Kurzwaffen zur Verfügung. Die meisten Schusswaffen sind erlaubnispflichtig. Ein Bedürfnis dafür kann frühestens nach einem Jahr der Mitgliedschaft befürwortet werden. Voraussetzung ist eine regelmäßige Teilnahme am Schießbetrieb. Vorderlader Kurz oder Langwaffen erfordern den Pulverschein (§27 Sprengstoffgesetz).
      </p>

      <h2 class="text-h5 font-weight-bold mb-4">Kurzwaffen</h2>
      <p class="text-body-1 mb-8">
        Schusswaffen mit einer Gesamtlänge bis 60 cm, früher als Faustfeuerwaffen bezeichnet. Hierzu gehören Pistolen und Revolver in den normalen Ausführungen. Die gesetzlichen Bestimmungen für Kurzwaffen sind im Allgemeinen strenger als für Langwaffen, weil Erstere eine größere Gefahr darstellen wegen der Möglichkeit, sie verborgen zu tragen.
      </p>

      <h2 class="text-h5 font-weight-bold mb-4">Langwaffen</h2>
      <p class="text-body-1 mb-8">
        Zur Klarstellung der Begriffe wurde im Bundeswaffengesetz festgelegt, dass Schusswaffen mit einer Länge von mehr als 60 cm als Langwaffen bezeichnet werden.
      </p>

      <h2 class="text-h5 font-weight-bold mb-4">Sportordnungen</h2>
      <p class="text-body-1 mb-8">
        Ausschlaggebend bei den Disziplinen sind immer die dazugehörigen Sportordnungen DSB, BDS, BSSB und die jeweiligen Wettkampfordnungen.
      </p>
    </div>

    <v-divider class="mb-8"></v-divider>

    <!-- Schießstände: Luftgewehr -->
    <h2 class="category-title text-center text-h5 mb-6">Luftgewehrstände</h2>
    <v-row class="tight-grid mb-8">
      <v-col cols="12" sm="6" md="4" class="tight-card">
        <v-card class="stand-card">
          <v-img src="/kurzwaffe25.png" class="stand-image" contain></v-img>
          <v-card-title>10-Meter-Luftgewehrstand</v-card-title>
          <v-card-text>Beschreibung des Schießstandes.</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="tight-card">
        <v-card class="stand-card">
          <v-img src="/kurzwaffe25.png" class="stand-image" contain></v-img>
          <v-card-title>50-Meter-Kleinkaliberstand</v-card-title>
          <v-card-text>Beschreibung des Kleinkaliberstandes.</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="tight-card">
        <v-card class="stand-card">
          <v-img src="/kurzwaffe25.png" class="stand-image" contain></v-img>
          <v-card-title>300-Meter-Großkaliberstand</v-card-title>
          <v-card-text>Beschreibung des Großkaliberstandes.</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="mb-8"></v-divider>

    <!-- Schießstände: Kurzwaffen -->
    <h2 class="category-title text-center text-h5 mb-6">Kurzwaffenstände</h2>
    <v-row class="tight-grid mb-8">
      <v-col cols="12" sm="6" md="4" class="tight-card">
        <v-card class="stand-card">
          <v-img src="/path/to/image2.jpg" class="stand-image" contain></v-img>
          <v-card-title>25-Meter-Pistolenstand</v-card-title>
          <v-card-text>Beschreibung des Pistolenstandes.</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="tight-card">
        <v-card class="stand-card">
          <v-img src="/path/to/image5.jpg" class="stand-image" contain></v-img>
          <v-card-title>Kurzwaffenstand</v-card-title>
          <v-card-text>Beschreibung des Kurzwaffenstandes.</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="mb-8"></v-divider>

    <!-- Disziplinen: BSSB -->
    <h2 class="category-title text-center text-h5 mb-6">Unsere Disziplinen BSSB</h2>
    <v-row class="tight-grid mb-8">
      <v-col cols="12" sm="6" md="4" class="tight-card">
        <v-card class="discipline-card">
          <v-img src="/images/bssb_duell.jpg" class="stand-image"></v-img>
          <v-card-title>Präzision</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="tight-card">
        <v-card class="discipline-card">
          <v-img src="/images/bssb_duell.jpg" class="stand-image"></v-img>
          <v-card-title>Duell</v-card-title>
        </v-card>
      </v-col>
    </v-row>

 <div class="text-center mb-8">
      <p class="text-body-1 mb-4">
        Eine vollständige Übersicht aller Disziplinen des BSSB finden Sie im folgenden PDF-Dokument:
      </p>
      <v-btn color="primary" text href="/pdf/bssb_disziplinen.pdf" target="_blank">
        Disziplinen BSSB herunterladen
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Disziplinen",
};
</script>

<style scoped>
.disziplinen-container {
  padding: 20px;
}

.section-title {
  font-weight: bold;
}

.section-description {
  color: #555;
}

.tight-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.tight-card {
  display: flex;
  justify-content: center;
}

.stand-card,
.discipline-card {
  width: 100%;
  max-width: 400px;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.stand-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
}

.category-title {
  font-weight: bold;
  color: #333;
}

/* Responsive layout adjustments */
@media (min-width: 1200px) {
  .stand-card,
  .discipline-card {
    max-width: 300px;
  }
}
</style>
