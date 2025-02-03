<template>
  <v-container class="schuetzen-container">
    <!-- Zentrales Bild -->
    <v-img
      src="/alterverein.jpg"
      alt="Schützenverein Emblem"
      class="header-image"
      contain
    ></v-img>

    <h1 class="text-h4 section-title mb-6 text-center">
      Schützenverein Unterfranking
    </h1>
    <p class="text-body-1 section-description text-center mb-8">
      Der größte Verein im ältesten Markt Bayern
    </p>

    <v-divider class="mb-6"></v-divider>

    <!-- Über den Verein -->
    <v-card outlined class="mb-4">
      <v-card-title class="text-h5">Über uns</v-card-title>
      <v-card-text class="text-container">
        <p>
          Der Beispielschützenverein <strong>"Eichenlaub 1880"</strong> ist ein
          traditionsreicher Verein mit einer langen Geschichte und tief
          verwurzelter Gemeinschaft. Gegründet im Jahr 1880, widmet sich der
          Verein sowohl dem sportlichen Schießen als auch der Förderung von
          Kameradschaft und Geselligkeit.
        </p>
        <p>
          Mit über 150 aktiven Mitgliedern bietet
          <strong>"Eichenlaub 1880"</strong> ein breites Spektrum an
          Disziplinen, von Luftgewehr- und Bogenschießen bis hin zu modernem
          Pistolensport. Die Mitglieder treffen sich regelmäßig zu Turnieren,
          Trainingsabenden und geselligen Veranstaltungen wie Sommerfesten und
          Schützenbällen.
        </p>
        <p>
          Besonders stolz ist der Verein auf seine erfolgreiche Jugendabteilung,
          die junge Talente gezielt fördert und mit großem Erfolg an regionalen
          und überregionalen Wettkämpfen teilnimmt. Dadurch wird nicht nur der
          Schießsport, sondern auch der Gemeinschaftsgeist unter jungen
          Menschen gestärkt.
        </p>
        <p>
          Neben dem sportlichen Aspekt legt der Verein großen Wert auf die
          Pflege von Traditionen. Zu den Höhepunkten des Vereinslebens gehören
          das jährliche Königsschießen sowie die Teilnahme an traditionellen
          Umzügen und Festen in der Region.
        </p>
        <p>
          Mit einer modernen Schießanlage, einem engagierten Vorstandsteam und
          zahlreichen Aktivitäten ist der Verein ein lebendiger Treffpunkt für
          Sportbegeisterte und Traditionsfreunde gleichermaßen.
        </p>
      </v-card-text>
    </v-card>

    <!-- Vorstandschaft -->
    <v-card outlined class="mb-4">
      <v-card-title class="text-h5">Vorstandschaft</v-card-title>
      <v-card-text>
        <ul class="board-list">
          <li>
            <div class="profile-image">
              <img
                src="/mann.jpg"
                alt="1. Schützenmeister - Christian Name"
              />
            </div>
            <strong>1. Schützenmeister: </strong> Christian Name
          </li>
          <li>
            <div class="profile-image">
              <img
                src="/mann.jpg"
                alt="2. Schützenmeister - Andreas Art"
              />
            </div>
            <strong>2. Schützenmeister: </strong> Andreas Name
          </li>
          <li>
            <div class="profile-image">
              <img
                src="/mann.jpg"
                alt="Schatzmeister - Thomas Name"
              />
            </div>
            <strong>Schatzmeister: </strong> Thomas Name
          </li>
        </ul>
      </v-card-text>
    </v-card>

    <!-- Satzung -->
    <v-card outlined class="mb-4">
      <v-card-title class="text-h5">Satzung</v-card-title>
      <v-card-text>
        <p>Unsere aktuelle Satzung steht Ihnen als PDF-Dokument zur Verfügung:</p>
        <br>
        <v-btn
          color="primary"
          text
          href="/pdf/test.pdf"
          target="_blank"
        >
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
  max-width: 1200px; /* Begrenzung der gesamten Seitenbreite */
  margin: 0 auto; /* Zentrierung */
  padding: 20px;
}

.header-image {
  max-width: 300px; /* Breite des Bildes */
  margin: 0 auto 20px; /* Zentrierung und Abstand nach unten */
  display: block;
  border-radius: 8px; /* Abgerundete Ecken */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Schatteneffekt */
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
  border: 2px solid #ccc;
  border-radius: 8px; /* Rechteckige Darstellung */
  overflow: hidden; /* Überschüssige Bildteile ausblenden */
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Bild vollständig darstellen */
}

.text-container {
  max-width: 900px; /* Maximale Breite für den Text */
  margin: 0 auto; /* Zentriert den Text */
  line-height: 1.6; /* Angenehmer Zeilenabstand */
  text-align: justify; /* Optional: Text ausrichten */
}

.text-container p {
  margin-bottom: 16px; /* Abstand zwischen Absätzen */
}
</style>
