<template>
  <v-container>
    <h1 class="text-h4 text-center">Veranstaltungen</h1>
    <v-row justify="center" class="mt-6">
      <v-col cols="12" md="6" v-for="event in events" :key="event.id">
        <v-card class="mb-4" outlined>
          <v-card-title>{{ event.title }}</v-card-title>
          <v-card-subtitle>{{ event.date }}</v-card-subtitle>
          <v-card-text>{{ event.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Events",
  data() {
    return {
      events: [
        { id: 1, title: "Jahresturnier", date: "20. Januar 2025", description: "Zeigen Sie Ihr Können!" },
        { id: 2, title: "Trainingsabend", date: "Jeden Mittwoch, 18:00 Uhr", description: "Gemeinsam trainieren." },
        { id: 3, title: "Sommerfest", date: "15. Juli 2025", description: "Feiern Sie den Sommer!" },
      ],
    };
  },
};
</script>
