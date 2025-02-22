<template>
  <v-container class="termine-container">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <h1 class="text-h4 section-title mb-6 text-center">Termine & Formulare</h1>
        <p class="text-body-1 section-description text-center mb-8">
          Alle wichtigen Termine und Formulare auf einen Blick.
        </p>

        <v-divider class="mb-6"></v-divider>

        <!-- Terminplan -->
        <v-card outlined class="mb-4">
          <v-card-title class="text-h5">Terminplan 2025</v-card-title>
          <v-card-text>
            <p>Hier finden Sie alle geplanten Veranstaltungen und Termine für das Jahr 2025:</p>
            <br>
            <v-btn color="#355E3B" text target="_blank" @click="download('termine.pdf')" download>Terminplan 2025 herunterladen</v-btn>
          </v-card-text>
        </v-card>

        <!-- Formulare -->
        <v-card outlined class="mb-4">
          <v-card-title class="text-h5">Formulare</v-card-title>
          <v-card-text>
            <ul class="form-list">
              <li>
                <p>Um Mitglied unseres Vereins zu werden, füllen Sie bitte den Mitgliedsantrag aus:</p>
                <br>
                <v-btn color="#355E3B" text target="_blank" @click="download('mitglied.pdf')" download>Mitgliedsantrag herunterladen</v-btn>
              </li>
            </ul>
          </v-card-text>
        </v-card>

        <!-- Schießtage -->
        <v-card outlined class="mb-4">
          <v-card-title class="text-h5">Schießtage 2025</v-card-title>
          <v-card-text>
            <p>Alle geplanten Schießtage für das Jahr 2025 können Sie hier einsehen:</p>
            <ul class="schedule-list">
           <li v-for="(item, index) in termine" :key="index" class="termin">
          <span class="date">{{ item.date }}</span>
          <ul class="description">
            <li v-for="(line, lineIndex) in item.description" :key="lineIndex">
              {{ line }}
            </li>
      </ul>
    </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import defineComponent from '../scripts/termine.js';

export default {
  ...defineComponent,
};

</script>

<style scoped>
.termine-container {

  margin: 0 auto;
  padding: 20px;
}

.section-title {
  font-weight: bold;
}

.section-description {
  color: #555;
}

.v-card {
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
}

.v-card-title {
  margin-bottom: 8px;
}

.form-list {
  padding-left: 16px;
  list-style-type: disc;
}

.schedule-list {
  padding-left: 16px;
  list-style-type: none;
  padding: 0;
  line-height: 1.8;
}

.schedule-list li {
  margin-bottom: 16px;
  border-bottom: 1px dashed #ccc;
  padding-bottom: 8px;
}

.date {
  font-weight: bold;
  color: #355E3B;
  margin-right: 8px;
}

.description span {
  display: block;
  color: #555;
  margin-left: 16px;
}
</style>
