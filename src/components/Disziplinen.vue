<template>
  <v-container class="disziplinen-container">
    <!-- Title Section -->
    <h1 class="text-h4 section-title mb-6 text-center font-weight-bold">
      Schützenstände & Disziplinen
    </h1>

    <p class="text-body-1 section-description text-center mb-8 font-italic">
      Entdecken Sie unsere hochmodernen Schützenstände und die Vielfalt an Disziplinen.
      Ob Präzisionsschießen oder sportliche Wettbewerbe – hier finden Sie alle relevanten Informationen
      zu unseren Disziplinen und Anlagen.
    </p>

    <v-divider class="mb-8"></v-divider>

    <!-- Allgemeine Informationen -->
    <v-card outlined class="mb-4">
      <v-card-title class="text-h5 font-weight-medium">Allgemeine Informationen</v-card-title>

      <!-- Mindestalter -->
      <v-card class="info-section mb-6" outlined>
        <v-card-title class="info-title font-weight-medium">Mindestalter</v-card-title>
        <v-card-text>
          <p class="text-body-1">Bei den Luftdruckwaffen gibt es eine Altersbeschränkung:</p>
          <ul class="info-list indented-list">
            <li><strong>Luftgewehr / Luftpistole:</strong> ab 12 Jahren (mit elterlichem Einverständnis).</li>
            <li><strong>Alle anderen Waffen & Disziplinen:</strong> Volljährigkeit erforderlich.</li>
          </ul>
        </v-card-text>
      </v-card>

      <!-- Schießbetrieb -->
      <v-card class="info-section mb-6" outlined>
        <v-card-title class="info-title font-weight-medium">Schießbetrieb</v-card-title>
        <v-card-text>
          <p class="text-body-1">Der Schützenverein Beispielname stellt für den Trainingsbetrieb Kurzwaffen zur Verfügung.</p>
          <ul class="info-list indented-list">
            <li><strong>Voraussetzung:</strong> Regelmäßige Teilnahme am Schießbetrieb.</li>
            <li><strong>Vorderlader:</strong> Erfordert den Pulverschein (§27 Sprengstoffgesetz).</li>
          </ul>
        </v-card-text>
      </v-card>

      <!-- Sportordnungen -->
      <v-card class="info-section" outlined>
        <v-card-title class="info-title font-weight-medium">Sportordnungen</v-card-title>
        <v-card-text>
          <p class="text-body-1">Ausschlaggebend bei den Disziplinen sind immer die dazugehörigen Sportordnungen:</p>
          <ul class="info-list indented-list">
            <li><strong>DSB:</strong> Deutscher Schützenbund</li>
            <li><strong>BDS:</strong> Bund Deutscher Sportschützen</li>
            <li><strong>BSSB:</strong> Bayerischer Sportschützenbund</li>
            <li>Weitere Wettkampfordnungen gemäß Verbandsregeln.</li>
          </ul>
        </v-card-text>
      </v-card>
    </v-card>

    <v-divider class="mb-8"></v-divider>

    <!-- Schießstände -->
    <h2 class="category-title text-center text-h5 mb-6">Unsere Schießstände</h2>
    <v-row class="tight-grid mb-8">
      <v-col cols="12" md="6" lg="4" class="tight-card">
        <v-card class="stand-card">
          <v-img src="/kurzwaffe25.png" class="stand-image" :lazy-src="'kurzwaffe25_small.png'">
            <template v-slot:placeholder>
              <v-skeleton-loader type="image" class="skeleton-image"></v-skeleton-loader>
            </template>
          </v-img>
          <v-card-title>10-Meter-Luftgewehrstand</v-card-title>
          <v-card-text>Ideal für Präzisionsschießen mit Luftdruckwaffen.</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="4" class="tight-card">
        <v-card class="stand-card">
          <v-img src="/10meterluftgewehr.png" class="stand-image" :lazy-src="'kurzwaffe50_small.png'">
            <template v-slot:placeholder>
              <v-skeleton-loader type="image" class="skeleton-image"></v-skeleton-loader>
            </template>
          </v-img>
          <v-card-title>50-Meter-Kleinkaliberstand</v-card-title>
          <v-card-text>Perfekt für Kleinkalibergewehre und das sportliche Training.</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="mb-8"></v-divider>

    <!-- Disziplinen: BSSB -->
    <h2 class="category-title text-center text-h5 mb-6">
      Unsere Disziplinen (BSSB)
    </h2>

    <v-row class="tight-grid mb-8">
      <v-col cols="12" sm="6" md="4" class="tight-card">
        <a href="https://www.bssb.de/sport/disziplinen/pistole" target="_blank" class="card-link">
          <v-card class="discipline-card" outlined hover>
            <v-img src="/scheiben/Disziplin-präzision.png" class="stand-image" :lazy-src="'disziplin_praezision_small.png'">
              <template v-slot:placeholder>
                <v-skeleton-loader type="image" class="skeleton-image"></v-skeleton-loader>
              </template>
            </v-img>
            <v-card-title>Präzision</v-card-title>
          </v-card>
        </a>
      </v-col>
    </v-row>

    <!-- PDF-Link zu allen Disziplinen -->
    <v-card outlined class="mb-4">
      <v-card-title class="text-h5">
        Vollständige Disziplinenliste
      </v-card-title>

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
  font-style: italic;
}

.skeleton-image {
  width: 100%;
  height: 250px;
  border-radius: 8px;
}

.stand-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
}

.indented-list {
  padding-left: 20px;
}

@media (max-width: 600px) {
  .skeleton-image {
    height: 180px;
  }
}
</style>
