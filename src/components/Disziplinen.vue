<template>
  <v-container>
    <h1 class="text-h4 text-center mb-6">Schützenstände & Disziplinen</h1>
    <p class="text-body-1 text-center">
      Entdecken Sie unsere hochmodernen Schützenstände und die Vielfalt an Disziplinen:
    </p>
    <v-row justify="center" class="mt-6">
      <!-- Schützenstand 1 -->
      <v-col cols="12" md="6">
        <v-card outlined class="modern-card">
          <v-card-title class="card-title">10-Meter-Luftgewehrstand</v-card-title>
          <v-card-text>
            Elektronische Zielscheiben für höchste Präzision.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Schützenstand 2 -->
      <v-col cols="12" md="6">
        <v-card outlined class="modern-card">
          <v-card-title class="card-title">25-Meter-Kurzwaffenstand</v-card-title>
          <v-card-text>
            Ideal für Pistolen- und Revolver-Disziplinen.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Schützenstand 3 -->
      <v-col cols="12" md="6">
        <v-card outlined class="modern-card">
          <v-card-title class="card-title">50-Meter-Kleinkaliberstand</v-card-title>
          <v-card-text>
            Perfekt für Kleinkaliber-Präzisionsschießen.
          </v-card-text>
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
.modern-card {
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.modern-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-weight: bold;
  font-size: 1.2rem;
  color: #212121;
}
</style>
