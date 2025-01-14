<template>
  <v-container class="disziplinen-container">
    <h1 class="text-h4 section-title mb-6 text-center">Schützenstände & Disziplinen</h1>
    <p class="text-body-1 section-description text-center mb-8">
      Entdecken Sie unsere hochmodernen Schützenstände und die Vielfalt an Disziplinen.
    </p>

    <v-divider class="mb-6"></v-divider>

    <div class="information-section">
      <v-card outlined class="mb-6 info-card">
        <v-card-title class="info-title text-h5">Mindestalter</v-card-title>
        <v-card-text>
          Bei den Luftdruckwaffen gibt es eine Altersbeschränkung. Luftgewehr / Luftpistole erst ab 12 Jahren (mit elterlichen Einverständnis) alle anderen Waffen/Disziplinen erfordern Volljährigkeit.
        </v-card-text>
      </v-card>

      <v-card outlined class="mb-6 info-card">
        <v-card-title class="info-title text-h5">Schießbetrieb</v-card-title>
        <v-card-text>
          Der Schützenverein Beispielname stellt für den Trainingsbetrieb Kurzwaffen zur Verfügung. Die meisten Schusswaffen sind erlaubnispflichtig. Ein Bedürfnis dafür kann frühestens nach einem Jahr der Mitgliedschaft befürwortet werden. Voraussetzung ist eine regelmäßige Teilnahme am Schießbetrieb. Vorderlader Kurz oder Langwaffen erfordern den Pulverschein (§27 Sprengstoffgesetz).
        </v-card-text>
      </v-card>

      <v-card outlined class="mb-6 info-card">
        <v-card-title class="info-title text-h5">Kurzwaffen</v-card-title>
        <v-card-text>
          Schusswaffen mit einer Gesamtlänge bis 60 cm, früher als Faustfeuerwaffen bezeichnet. Hierzu gehören Pistolen und Revolver in den normalen Ausführungen. Die gesetzlichen Bestimmungen für Kurzwaffen sind im Allgemeinen strenger als für Langwaffen, weil Erstere eine größere Gefahr darstellen wegen der Möglichkeit sie verborgen zu tragen.
        </v-card-text>
      </v-card>

      <v-card outlined class="mb-6 info-card">
        <v-card-title class="info-title text-h5">Langwaffen</v-card-title>
        <v-card-text>
          Zur Klarstellung der Begriffe wurde im Bundeswaffengesetz festgelegt, dass Schusswaffen mit einer Länge von mehr als 60 cm als Langwaffen bezeichnet werden.
        </v-card-text>
      </v-card>

      <v-card outlined class="mb-6 info-card">
        <v-card-title class="info-title text-h5">Sportordnungen</v-card-title>
        <v-card-text>
          Ausschlaggebend bei den Disziplinen sind immer die dazugehörigen Sportordnungen DSB, BDS, BSSB und die jeweiligen Wettkampfordnungen.
        </v-card-text>
      </v-card>
    </div>

    <v-divider class="mb-6"></v-divider>

    <!-- Kategorie: Luftgewehrstände -->
    <h2 class="category-title text-center text-h5 mb-4">Luftgewehrstände</h2>
    <v-row class="tight-grid">
      <!-- 10-Meter-Luftgewehrstand -->
      <v-col cols="12" sm="6" md="3" class="tight-card">
        <v-card class="stand-card">
          <v-img src="/path/to/image1.jpg" class="stand-image" contain></v-img>
          <v-card-title>10-Meter-Luftgewehrstand</v-card-title>
          <v-card-text>
            Beschreibung des Schießstandes.
          </v-card-text>
        </v-card>
      </v-col>
      <!-- 50-Meter-Kleinkaliberstand -->
      <v-col cols="12" sm="6" md="3" class="tight-card">
        <v-card class="stand-card">
          <v-img src="/path/to/image3.jpg" class="stand-image" contain></v-img>
          <v-card-title>50-Meter-Kleinkaliberstand</v-card-title>
          <v-card-text>
            Beschreibung des Kleinkaliberstandes.
          </v-card-text>
        </v-card>
      </v-col>
      <!-- 300-Meter-Großkaliberstand -->
      <v-col cols="12" sm="6" md="3" class="tight-card">
        <v-card class="stand-card">
          <v-img src="/path/to/image4.jpg" class="stand-image" contain></v-img>
          <v-card-title>300-Meter-Großkaliberstand</v-card-title>
          <v-card-text>
            Beschreibung des Großkaliberstandes.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="mb-6"></v-divider>

    <!-- Kategorie: Kurzwaffenstände -->
    <h2 class="category-title text-center text-h5 mb-4">Kurzwaffenstände</h2>
    <v-row class="tight-grid">
      <!-- 25-Meter-Pistolenstand -->
      <v-col cols="12" sm="6" md="3" class="tight-card">
        <v-card class="stand-card">
          <v-img src="/path/to/image2.jpg" class="stand-image" contain></v-img>
          <v-card-title>25-Meter-Pistolenstand</v-card-title>
          <v-card-text>
            Beschreibung des Pistolenstandes.
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Kurzwaffenstand -->
      <v-col cols="12" sm="6" md="3" class="tight-card">
        <v-card class="stand-card">
          <v-img src="/path/to/image5.jpg" class="stand-image" contain></v-img>
          <v-card-title>Kurzwaffenstand</v-card-title>
          <v-card-text>
            Beschreibung des Kurzwaffenstandes.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="mb-6"></v-divider>

    <!-- Unsere Disziplinen -->
    <h2 class="category-title text-center text-h5 mb-4">Unsere Disziplinen BSSB</h2>
    <v-row class="tight-grid">
      <v-col cols="12" sm="6">
        <v-card outlined class="mb-4 discipline-card">
          <v-img src="/images/bssb_scheibenarten.jpg" class="stand-image"></v-img>
          <v-card-title>Scheibenarten</v-card-title>
          <v-card-text>Präzision</v-card-text>
          <v-btn text href="/docs/Uebersicht_BSSB.pdf" target="_blank">Übersicht BSSB.pdf</v-btn>


        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card outlined class="mb-4 discipline-card">
          <v-img src="/images/bssb_duell.jpg" class="stand-image"></v-img>
          <v-card-title>Duell</v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <h2 class="category-title text-center text-h5 mb-4">Unsere Disziplinen BDS</h2>
    <v-row class="tight-grid">
      <v-col cols="12" sm="6">
        <v-card outlined class="mb-4 discipline-card">
          <v-img src="/images/bds_uebersicht.jpg" class="stand-image"></v-img>
          <v-card-title>BDS Übersicht Disziplinen und Scheiben</v-card-title>
          <v-card-text>Präzision und Kombi</v-card-text>
          <v-btn text href="/docs/BDS_Disziplinen_und_Scheiben.pdf" target="_blank">BDS Übersicht Disziplinen.pdf</v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card outlined class="mb-4 discipline-card">
          <v-img src="/images/bds_fallscheiben.jpg" class="stand-image"></v-img>
          <v-card-title>BDS Disziplin Fallscheiben</v-card-title>
          <v-btn text href="/docs/BDS_Disziplin_Fallscheiben.pdf" target="_blank">BDS Disziplin Fallscheiben.pdf</v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card outlined class="mb-4 discipline-card">
          <v-img src="/images/bds_kurzwaffe_25m.jpg" class="stand-image"></v-img>
          <v-card-title>BDS Disziplin Kurzwaffe 25m</v-card-title>
          <v-btn text href="/docs/BDS_Disziplin_Kurzwaffe_25m.pdf" target="_blank">BDS Disziplin Kurzwaffe 25m.pdf</v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card outlined class="mb-4 discipline-card">
          <v-img src="/images/bds_speed.jpg" class="stand-image"></v-img>
          <v-card-title>BDS Disziplin Speed-Schießen</v-card-title>
          <v-btn text href="/docs/BDS_Disziplin_Speed_Schiessen.pdf" target="_blank">BDS Disziplin Speed-Schießen.pdf</v-btn>
        </v-card>
      </v-col>
    </v-row>
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

.info-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-title {
  color: #333;
}

.tight-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.tight-card {
  display: flex;
  justify-content: center;
}

.stand-card {
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
  aspect-ratio: 16 / 9; /* Bildseitenverhältnis einstellen */
  object-fit: cover; /* Sicherstellen, dass das Bild passt */
  border-bottom: 1px solid #ddd;
}

.category-title {
  font-weight: bold;
  color: #333;
}

/* Responsives Verhalten bei großen Bildschirmen */
@media (min-width: 1200px) {
  .stand-card {
    max-width: 300px;
  }
}
</style>
