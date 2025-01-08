<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar app color="green darken-2" dark>
      <v-toolbar-title>Schützenverein "Zum Ziel"</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>Home</v-btn>
      <v-btn text>Events</v-btn>
      <v-btn text>Gallery</v-btn>
      <v-btn text>Contact</v-btn>
    </v-app-bar>

    <!-- Hero Section -->
    <v-container class="hero" fluid>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card color="green darken-3" dark class="pa-6">
            <h1 class="text-h3 mb-3">Welcome to Schützenverein "Zum Ziel"</h1>
            <p class="text-h6">
              Fostering tradition, community, and precision in shooting sports.
              Join us and experience camaraderie at its finest.
            </p>
            <v-btn color="yellow darken-3" large class="mt-4">
              Learn More
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- About Section -->
    <v-container fluid class="about-section py-12">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h4">About Us</h2>
          <p class="text-body-1">
            Schützenverein "Zum Ziel" has been a pillar of our community for
            decades, offering top-tier facilities for shooting sports and
            welcoming enthusiasts of all skill levels.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Events Section -->
    <v-container fluid class="py-12">
      <h2 class="text-h4 text-center">Upcoming Events</h2>
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

    <!-- Gallery Section -->
    <v-container fluid class="gallery-section py-12">
      <h2 class="text-h4 text-center">Photo Gallery</h2>
      <v-row justify="center" class="mt-6">
        <v-col cols="12" md="4" v-for="image in galleryImages" :key="image.id">
          <v-card>
            <v-img :src="image.src" :alt="image.alt" height="200px"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Contact Section -->
    <v-container fluid class="contact-section py-12">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card color="green lighten-5" class="pa-6">
            <h2 class="text-h4 text-center">Contact Us</h2>
            <p class="text-body-1 text-center">
              <strong>Email:</strong> info@schuetzenverein-zumziel.de <br />
              <strong>Phone:</strong> +49 123 456 7890 <br />
              <strong>Address:</strong> Schützenstraße 10, 12345 Musterstadt
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Footer -->
    <v-footer padless color="green darken-2" dark>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" class="text-center">
            <p>&copy; 2025 Schützenverein "Zum Ziel". All rights reserved.</p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      events: [
        {
          id: 1,
          title: "Annual Tournament",
          date: "January 20, 2025",
          description: "Join us for our prestigious annual shooting tournament.",
        },
        {
          id: 2,
          title: "Practice Session",
          date: "Every Wednesday, 6:00 PM",
          description:
            "Hone your skills and enjoy a friendly practice session with members.",
        },
        {
          id: 3,
          title: "Summer Fest",
          date: "July 15, 2025",
          description:
            "Celebrate summer with our Schützenverein community at the annual fest.",
        },
      ],
      galleryImages: [
        { id: 1, src: "https://via.placeholder.com/400", alt: "Event 1" },
        { id: 2, src: "https://via.placeholder.com/400", alt: "Event 2" },
        { id: 3, src: "https://via.placeholder.com/400", alt: "Event 3" },
      ],
    };
  },
};
</script>

<style>
.hero {
  background-image: url("https://via.placeholder.com/1920x600");
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 0;
}
.about-section {
  background-color: #f4f4f4;
}
.gallery-section {
  background-color: #f9f9f9;
}
.contact-section {
  background-color: #ffffff;
}
</style>
