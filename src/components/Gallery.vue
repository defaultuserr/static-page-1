<template>
  <v-container>
    <h1 class="text-h4 text-center">Galerie</h1>
    <v-row justify="center" class="mt-6">
      <v-col cols="12" md="4" v-for="image in galleryImages" :key="image.id">
        <v-card>
          <v-img :src="image.src" :alt="image.alt" height="200px"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      galleryImages: [
        { id: 1, src: "https://via.placeholder.com/400", alt: "Bild 1" },
        { id: 2, src: "https://via.placeholder.com/400", alt: "Bild 2" },
        { id: 3, src: "https://via.placeholder.com/400", alt: "Bild 3" },
      ],
    };
  },
};
</script>
