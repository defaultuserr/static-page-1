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
        Diese Datenschutzerklärung erläutert, welche Daten wir erheben und wie wir sie nutzen.
        Sie gilt für unsere statische Website, die keine Cookies oder Tracking-Technologien verwendet.
      </p>

      <h2>2. Verantwortliche Stelle</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:
      </p>
      <p>
        <strong>Schützenverein "Zum Ziel" e.V.</strong><br />
        Schützenstraße 10<br />
        12345 Musterstadt<br />
        Telefon: +49 (0)123 456 7890<br />
        E-Mail: <a href="mailto:info@schuetzenverein-zumziel.de">info@schuetzenverein-zumziel.de</a>
      </p>

      <h2>3. Datenerfassung auf unserer Website</h2>
      <h3>3.1 Server-Log-Dateien</h3>
      <p>
        Unser Hosting-Provider erhebt automatisch Informationen über Zugriffe auf die Website
        und speichert diese in sogenannten **Server-Log-Dateien**. Diese Daten sind technisch erforderlich,
        um die Website bereitzustellen, und werden vom Browser automatisch übermittelt.
      </p>
      <ul>
        <li>Browsertyp und Browserversion</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse (anonymisiert, keine direkte Zuordnung möglich)</li>
      </ul>
      <p>
        Diese Daten dienen ausschließlich der technischen Überwachung und Fehleranalyse der Website.
        Sie werden nicht mit anderen Datenquellen zusammengeführt.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer fehlerfreien Bereitstellung der Website).
      </p>

      <h3>3.2 Kontaktaufnahme per E-Mail</h3>
      <p>
        Wenn Sie uns per E-Mail kontaktieren, speichern wir Ihre Angaben zur Bearbeitung der Anfrage
        und für den Fall von Anschlussfragen. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
      </p>
      <p>
        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)
        oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
      </p>

      <h2>4. Ihre Rechte</h2>
      <h3>4.1 Auskunft, Berichtigung, Löschung</h3>
      <p>
        Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten,
        deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Sie haben außerdem ein Recht auf
        Berichtigung, Sperrung oder Löschung dieser Daten, sofern keine gesetzliche Aufbewahrungspflicht besteht.
      </p>

      <h3>4.2 Widerruf Ihrer Einwilligung</h3>
      <p>
        Falls die Verarbeitung Ihrer Daten auf Grundlage Ihrer Einwilligung erfolgt, können Sie diese jederzeit formlos per E-Mail widerrufen.
        Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt unberührt.
      </p>

      <h3>4.3 Beschwerderecht bei der Aufsichtsbehörde</h3>
      <p>
        Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        Die zuständige Aufsichtsbehörde für Datenschutzfragen in Deutschland ist der Landesdatenschutzbeauftragte
        des Bundeslandes, in dem unser Verein seinen Sitz hat.
      </p>

      <h2>5. Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an rechtliche Änderungen oder neue technische Entwicklungen anzupassen.
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Datenschutz",
};
</script>

<style scoped>
.datenschutz-section {
  background-color: #f9f9f9;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
}

.content h2 {
  font-size: 1.5rem;
  margin-top: 24px;
  margin-bottom: 12px;
  color: #333;
}

.content h3 {
  font-size: 1.3rem;
  margin-top: 16px;
  margin-bottom: 8px;
  color: #555;
}

.content p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 16px;
  color: #444;
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
