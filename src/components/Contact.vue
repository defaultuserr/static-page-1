<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6"> 
        <v-card class="contact-card">
          <v-card-title class="text-h4">Kontakt</v-card-title>
          <v-card-text>
            <p class="text-body-1">
              <strong>Anschrift:</strong><br />
              SV GlückAuf<br />
              An Der Straße 15<br />
              99999 Beispielstadt<br /><br />

              <strong>Telefon:</strong><br />
              (2. Schützenmeister): 0113/3342342<br /><br />

              <strong>E-Mail:</strong><br />
              <a href="mailto:info@beispileemail.de">info@beispielemail.de</a>
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

<style scoped>
.contact-card {
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
