<template>
  <v-container class="disziplinen-container">
    <h1 class="text-h4 section-title mb-6">Schützenstände & Disziplinen</h1>
    <p class="text-body-1 section-description">
      Entdecken Sie unsere hochmodernen Schützenstände und die Vielfalt an Disziplinen:
    </p>

    <!-- Kategorie: Luftdruckwaffenstände -->
    <h2 class="category-title">Luftdruckwaffenstände</h2>
    <v-row class="no-gap-grid">
      <!-- 10-Meter-Luftgewehrstand -->
      <v-col cols="6" md="3">
        <v-card class="aligned-card">
          <v-img
            src="/10meterluftgewehr.png"
            alt="10-Meter-Luftgewehrstand"
            height="200"
          ></v-img>
          <v-card-subtitle class="card-title">10-Meter-Luftgewehrstand</v-card-subtitle>
        </v-card>
      </v-col>
      <!-- 10-Meter-Luftpistolenstand -->
      <v-col cols="6" md="3">
        <v-card class="aligned-card">
          <v-img
            src="/10meterluftpistole.png"
            alt="10-Meter-Luftpistolenstand"
            height="200"
          ></v-img>
          <v-card-subtitle class="card-title">10-Meter-Luftpistolenstand</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <!-- Kategorie: Klein- / Großkaliber -->
    <h2 class="category-title">Klein- / Großkaliber</h2>
    <v-row class="no-gap-grid">
      <!-- 25-Meter-Kurzwaffenstand -->
      <v-col cols="6" md="3">
        <v-card class="aligned-card">
          <v-img
            src="/kurzwaffe25.png"
            alt="25-Meter-Kurzwaffenstand"
            height="200"
          ></v-img>
          <v-card-subtitle class="card-title">25-Meter-Kurzwaffenstand</v-card-subtitle>
        </v-card>
      </v-col>

      <!-- 50-Meter-Kleinkaliberstand -->
      <v-col cols="6" md="3">
        <v-card class="aligned-card">
          <v-img
            src="/kleinkaliber50.png"
            alt="50-Meter-Kleinkaliberstand"
            height="200"
          ></v-img>
          <v-card-subtitle class="card-title">50-Meter-Kleinkaliberstand</v-card-subtitle>
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

<style>
/* Container für die Disziplinen-Seite */
.disziplinen-container {
  max-width: 100%; /* Nutze die gesamte verfügbare Breite */
  margin: 0 auto; /* Zentriere den Container bei Bedarf */
  padding: 0 8px; /* Weniger Innenabstand */
}

/* Titel der Sektion */
.section-title {
  text-align: center; /* Zentriere die Überschrift */
}

/* Beschreibung der Sektion */
.section-description {
  text-align: center; /* Zentriere den Beschreibungstext */
  margin-bottom: 16px; /* Weniger Abstand zur nächsten Sektion */
}

/* Kategorien-Überschrift */
.category-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 16px; /* Weniger Abstand nach oben */
  margin-bottom: 8px; /* Weniger Abstand nach unten */
  color: #1976d2;
  text-align: left; /* Links ausgerichtet */
}

/* Karten mit Bildfokus */
.aligned-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: none;
  text-align: center;
  border: 1px solid #ddd; /* Leichter Rahmen */
  margin: 0; /* Kein Abstand innerhalb der Karte */
  padding: 0; /* Kein zusätzlicher Innenabstand */
}

/* Kartenbilder */
.aligned-card v-img {
  object-fit: cover;
  border-radius: 8px 8px 0 0; /* Runde Ecken oben */
}

/* Kartentitel */
.card-title {
  font-size: 0.85rem; /* Kleinere Schriftgröße */
  font-weight: bold;
  margin-top: 0; /* Kein zusätzlicher Abstand */
  text-align: center;
  padding: 4px;
  background-color: #f9f9f9; /* Heller Hintergrund für den Text */
  border-top: 1px solid #ddd; /* Trennlinie zum Bild */
}

/* Kein Abstand zwischen Karten im Grid */
.no-gap-grid {
  gap: 0 !important; /* Entfernt alle Abstände zwischen den Karten */
}
</style>
