<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="contact-card">
          <v-card-title class="text-h4">Kontakt</v-card-title>
          <v-card-text>
            <p class="text-body-1">
              <strong>E-Mail:</strong> info@schuetzenverein-zumziel.de <br />
              <strong>Telefon:</strong> +49 123 456 7890 <br />
              <strong>Adresse:</strong> Schützenstraße 10, 12345 Musterstadt
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style>
.contact-card {
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
