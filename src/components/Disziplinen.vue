<template>
  <v-container class="disziplinen-container">
    <!-- Title Section -->
    <h1 class="text-h4 section-title mb-6 text-center">Schützenstände & Disziplinen</h1>
    <p class="text-body-1 section-description text-center mb-8">
      Entdecken Sie unsere hochmodernen Schützenstände und die Vielfalt an Disziplinen.
    </p>

    <v-divider class="mb-8"></v-divider>

    <!-- Allgemeine Informationen -->
    <v-card outlined class="mb-4">
      <v-card-title class="text-h5">
        <v-icon class="mr-2" color="primary">mdi-information-outline</v-icon>
        Allgemeine Informationen
      </v-card-title>
      <v-card-text class="text-container">
        
      <!-- Mindestalter -->
    <v-card class="info-section mb-6" outlined>
      <v-card-title class="info-title">
        <v-icon class="mr-3" color="blue" size="30">mdi-account-child</v-icon>
        Mindestalter
      </v-card-title>
      <v-card-text>
        <p>Bei den Luftdruckwaffen gibt es eine Altersbeschränkung:</p>
        <ul class="info-list">
          <li><strong>Luftgewehr / Luftpistole:</strong> ab 12 Jahren (mit elterlichem Einverständnis).</li>
          <li><strong>Alle anderen Waffen & Disziplinen:</strong> Volljährigkeit erforderlich.</li>
        </ul>
      </v-card-text>
    </v-card>

    <!-- Schießbetrieb -->
    <v-card class="info-section mb-6" outlined>
      <v-card-title class="info-title">
        <v-icon class="mr-3" color="green" size="30">mdi-target</v-icon>
        Schießbetrieb
      </v-card-title>
      <v-card-text>
        <p>
          Der Schützenverein Beispielname stellt für den Trainingsbetrieb Kurzwaffen zur Verfügung. 
          Die meisten Schusswaffen sind erlaubnispflichtig. Ein Bedürfnis dafür kann frühestens 
          nach einem Jahr der Mitgliedschaft befürwortet werden.
        </p>
        <ul class="info-list">
          <li><strong>Voraussetzung:</strong> Regelmäßige Teilnahme am Schießbetrieb.</li>
          <li><strong>Vorderlader:</strong> Erfordert den Pulverschein (§27 Sprengstoffgesetz).</li>
        </ul>
      </v-card-text>
    </v-card>

     <!-- Sportordnungen -->
    <v-card class="info-section" outlined>
      <v-card-title class="info-title">
        <v-icon class="mr-3" color="orange" size="30">mdi-book-open-page-variant</v-icon>
        Sportordnungen
      </v-card-title>
      <v-card-text>
        <p>Ausschlaggebend bei den Disziplinen sind immer die dazugehörigen Sportordnungen:</p>
        <ul class="info-list">
          <li><strong>DSB:</strong> Deutscher Schützenbund</li>
          <li><strong>BDS:</strong> Bund Deutscher Sportschützen</li>
          <li><strong>BSSB:</strong> Bayerischer Sportschützenbund</li>
          <li>Weitere Wettkampfordnungen gemäß Verbandsregeln.</li>
        </ul>
      </v-card-text>
    </v-card>

  </v-card-text>
</v-card>

    <v-divider class="mb-8"></v-divider>

    <!-- Schießstände -->
    <h2 class="category-title text-center text-h5 mb-6">Unsere Schießstände</h2>
    <v-row class="tight-grid mb-8">
      <v-col cols="12" sm="6" md="4" class="tight-card">
        <v-card class="stand-card">
          <v-img src="/kurzwaffe25.png" class="stand-image" contain></v-img>
          <v-card-title>10-Meter-Luftgewehrstand</v-card-title>
          <v-card-text>Ideal für Präzisionsschießen mit Luftdruckwaffen.</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="tight-card">
        <v-card class="stand-card">
          <v-img src="/kurzwaffe25.png" class="stand-image" contain></v-img>
          <v-card-title>50-Meter-Kleinkaliberstand</v-card-title>
          <v-card-text>Perfekt für Kleinkalibergewehre und das sportliche Training.</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="mb-8"></v-divider>

    <!-- Disziplinen: BSSB -->
    <h2 class="category-title text-center text-h5 mb-6">Unsere Disziplinen (BSSB)</h2>
<v-row class="tight-grid mb-8">
  <v-col cols="12" sm="6" md="4" class="tight-card">
    <a href="https://www.bssb.de/sport/disziplinen/pistole" target="_blank" class="card-link">
      <v-card class="discipline-card" outlined hover>
        <v-img src="/scheiben/Disziplin-präzision.png" class="stand-image"></v-img>
        <v-card-title>Präzision</v-card-title>
      </v-card>
    </a>
  </v-col>
</v-row>

    <!-- PDF-Link zu allen Disziplinen -->
    <v-card outlined class="mb-4">
      <v-card-title class="text-h5">Vollständige Disziplinenliste</v-card-title>
      <v-card-text class="text-container">
        <p>Eine vollständige Übersicht aller Disziplinen des BSSB finden Sie im folgenden PDF-Dokument:</p>
        <br>
        <v-btn color="primary" text href="https://www.bssb.de/fileadmin/Service/Regelwerke/Liste_B_2021_22-04_-_BY.pdf" target="_blank">
          Disziplinen BSSB
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Disziplinen",
};
</script>

<style scoped>
.disziplinen-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.section-title {
  font-weight: bold;
}

.section-description {
  color: #555;
}

.text-container {
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.6;
  text-align: justify;
}

.text-container p {
  margin-bottom: 16px;
}

.tight-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
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

.card-link {
  text-decoration: none;
}

</style>
