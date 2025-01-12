<template>
  <v-container class="datenschutz-section" fluid>
    <h1 class="title">Datenschutzerklärung</h1>
    <v-divider></v-divider>
    <div class="content">
      <h2>1. Allgemeine Hinweise</h2>
      <p>
        Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln
        Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
        Datenschutzvorschriften sowie dieser Datenschutzerklärung.
      </p>
      <p>
        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten
        erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert
        werden können. Diese Datenschutzerklärung erläutert, welche Daten wir erheben und
        wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
      </p>

      <h2>2. Verantwortliche Stelle</h2>
      <p>
        Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
      </p>
      <p>
        Schützenverein "Zum Ziel" e.V.<br />
        Schützenstraße 10<br />
        12345 Musterstadt<br />
        Telefon: +49 (0)123 456 7890<br />
        E-Mail: <a href="mailto:info@schuetzenverein-zumziel.de">info@schuetzenverein-zumziel.de</a>
      </p>

      <h2>3. Datenerfassung auf unserer Website</h2>
      <h3>3.1 Server-Log-Dateien</h3>
      <p>
        Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
        Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
      </p>
      <ul>
        <li>Browsertyp und Browserversion</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
      </ul>
      <p>
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
        Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <h3>3.2 Cookies</h3>
      <p>
        Unsere Website verwendet Cookies. Cookies richten auf Ihrem Rechner keinen Schaden
        an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher,
        effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem
        Rechner abgelegt werden und die Ihr Browser speichert.
      </p>
      <p>
        Die meisten der von uns verwendeten Cookies sind sogenannte "Session-Cookies". Sie
        werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf
        Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns,
        Ihren Browser beim nächsten Besuch wiederzuerkennen.
      </p>

      <h2>4. Ihre Rechte</h2>
      <h3>4.1 Auskunft, Sperrung, Löschung</h3>
      <p>
        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
        unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
        Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
        Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen
        zum Thema personenbezogene Daten können Sie sich jederzeit unter der oben
        angegebenen Adresse an uns wenden.
      </p>
      <h3>4.2 Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
      <p>
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
        möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht
        eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf
        erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
      </p>

      <h2>5. Weitere Hinweise</h2>
      <p>
        Für weitere Fragen oder Informationen zur Datenverarbeitung stehen wir Ihnen gerne
        zur Verfügung.
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Datenschutz",
};
</script>

<style>
.datenschutz-section {
  background-color: #f9f9f9;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
}

.content h2 {
  font-size: 1.5rem;
  margin-top: 24px;
  margin-bottom: 12px;
}

.content h3 {
  font-size: 1.2rem;
  margin-top: 16px;
  margin-bottom: 8px;
}

.content p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 16px;
}

.content ul {
  margin-left: 20px;
  list-style-type: disc;
}

.content a {
  color: #1976d2;
  text-decoration: none;
}

.content a:hover {
  text-decoration: underline;
}
</style>
