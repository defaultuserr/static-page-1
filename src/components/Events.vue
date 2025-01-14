<template>
  <v-container>
    <h1 class="text-h4 text-center">Veranstaltungen</h1>

    <v-divider class="my-6"></v-divider>

    <v-list>
      <v-list-item v-for="event in events" :key="event.id" class="mb-4">
        <v-card outlined>
          <v-card-title class="text-h6">{{ event.title }}</v-card-title>
          <v-card-subtitle class="text-body-2">{{ event.date }}</v-card-subtitle>
          <v-card-text>{{ event.description }}</v-card-text>
        </v-card>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "Events",
  data() {
    return {
      events: [
        {
          id: 1,
          title: "Jahreshauptversammlung",
          date: "15. März 2025",
          description: "Unsere jährliche Mitgliederversammlung mit Berichten und Wahlen."
        },
        {
          id: 2,
          title: "Schützenfest",
          date: "20. Juli 2025",
          description: "Feiern Sie mit uns das traditionelle Schützenfest mit Musik und guter Laune."
        },
        {
          id: 3,
          title: "Weihnachtsschießen",
          date: "10. Dezember 2025",
          description: "Ein gemütliches Beisammensein mit einem spannenden Schießwettbewerb."
        }
      ]
    };
  }
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.my-6 {
  margin: 24px 0;
}

.mb-4 {
  margin-bottom: 16px;
}

.v-card {
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
