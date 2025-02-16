<template>
  <v-container class="schuetzen-container">
    <!-- Zentrales Bild mit Skeleton Loader -->
    <v-img
      src="/alterverein.jpg"
      alt="Schützenverein Emblem"
      class="header-image"
      contain
    >
      <template v-slot:placeholder>
        <v-skeleton-loader type="image" class="skeleton-image"></v-skeleton-loader>
      </template>
    </v-img>

    <h1 class="text-h4 section-title mb-6 text-center font-weight-bold">
      Schützenverein Unterfranking
    </h1>
    <p class="text-body-1 section-description text-center mb-8 font-italic">
      Der größte Verein im ältesten Markt Bayern
    </p>

    <v-divider class="mb-6"></v-divider>

    <!-- Über den Verein -->
    <v-card outlined class="mb-4">
      <v-card-title class="text-h5 font-weight-medium">Über uns</v-card-title>
      <v-card-text class="text-container">
        <p>
          Der Beispielschützenverein <strong>"Eichenlaub 1880"</strong> ist ein traditionsreicher Verein mit einer langen Geschichte und tief verwurzelter Gemeinschaft. Gegründet im Jahr 1880, widmet sich der Verein sowohl dem sportlichen Schießen als auch der Förderung von Kameradschaft und Geselligkeit.
        </p>
        <p>
          Mit über 150 aktiven Mitgliedern bietet <strong>"Eichenlaub 1880"</strong> ein breites Spektrum an Disziplinen, von Luftgewehr- und Bogenschießen bis hin zu modernem Pistolensport. Die Mitglieder treffen sich regelmäßig zu Turnieren, Trainingsabenden und geselligen Veranstaltungen wie Sommerfesten und Schützenbällen.
        </p>
      </v-card-text>
    </v-card>

    <!-- Vorstandschaft -->
    <v-card outlined class="mb-4">
      <v-card-title class="text-h5 font-weight-medium">Vorstandschaft</v-card-title>
      <v-card-text>
        <ul class="board-list">
          <li>
            <div class="profile-image">
              <v-img src="/mann.jpg" alt="1. Schützenmeister - Christian Name">
                <template v-slot:placeholder>
                  <v-skeleton-loader type="image" class="skeleton-image"></v-skeleton-loader>
                </template>
              </v-img>
            </div>
            <strong>1. Schützenmeister: </strong> Christian Name
          </li>
          <li>
            <div class="profile-image">
              <v-img src="/mann.jpg" alt="2. Schützenmeister - Andreas Name">
                <template v-slot:placeholder>
                  <v-skeleton-loader type="image" class="skeleton-image"></v-skeleton-loader>
                </template>
              </v-img>
            </div>
            <strong>2. Schützenmeister: </strong> Andreas Name
          </li>
          <li>
            <div class="profile-image">
              <v-img src="/mann.jpg" alt="Schatzmeister - Thomas Name">
                <template v-slot:placeholder>
                  <v-skeleton-loader type="image" class="skeleton-image"></v-skeleton-loader>
                </template>
              </v-img>
            </div>
            <strong>Schatzmeister: </strong> Thomas Name
          </li>
        </ul>
      </v-card-text>
    </v-card>

    <!-- Satzung -->
    <v-card outlined class="mb-4">
      <v-card-title class="text-h5 font-weight-medium">Satzung</v-card-title>
      <v-card-text>
        <p>Unsere aktuelle Satzung steht Ihnen als PDF-Dokument zur Verfügung:</p>
        <br>
        <v-btn color="primary" text href="/pdf/test.pdf" target="_blank">
          Satzung herunterladen
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "SchuetzenInfo",
};
</script>

<style scoped>
.schuetzen-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header-image {
  max-width: 300px;
  margin: 0 auto 20px;
  display: block;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.skeleton-image {
  width: 100%;
  height: 250px;
  border-radius: 8px;
}

.section-title {
  font-weight: bold;
}

.section-description {
  color: #555;
  font-style: italic;
}

.board-list {
  padding-left: 0;
  list-style-type: none;
}

.board-list li {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.profile-image {
  width: 64px;
  height: 64px;
  margin-right: 16px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.text-container {
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.6;
  text-align: justify;
}
</style>
