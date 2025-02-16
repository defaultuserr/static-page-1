<template>
  <v-container class="impressum-section" fluid>
    <h1 class="title">Impressum</h1>
    <v-divider></v-divider>
    
    <div class="content">
      <h2>Angaben gemäß § 5 TMG:</h2>
      <p>
        Schützenverein "Zum Ziel" e.V.<br />
        Schützenstraße 10<br />
        12345 Musterstadt
      </p>

      <h2>Vertreten durch:</h2>
      <p>
        Max Mustermann (1. Vorsitzender)<br />
        Anna Beispiel (2. Vorsitzende)
      </p>

      <h2>Kontakt:</h2>
      <p>
        Telefon: +49 (0)123 456 7890<br />
        E-Mail: <a href="mailto:info@schuetzenverein-zumziel.de">info@schuetzenverein-zumziel.de</a>
      </p>

      <h2>Registereintrag:</h2>
      <p>
        Eingetragen im Vereinsregister beim <strong>Amtsgericht Musterstadt</strong><br />
        Registernummer: <strong>VR 123456</strong>
      </p>

      <h2>Umsatzsteuer-ID:</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
        <strong>DE123456789</strong>
      </p>

      <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
      <p>
        Max Mustermann<br />
        Schützenstraße 10<br />
        12345 Musterstadt
      </p>

      <h2>Haftungsausschluss:</h2>

      <h3>Haftung für Inhalte</h3>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
        Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
        oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
        Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h3>Haftung für Links</h3>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
        Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>
      <p>
        Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
        Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. 
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. 
        Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>

      <h2>Urheberrecht:</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen 
        der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
        Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
      </p>
      <p>
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
        Insbesondere werden Inhalte Dritter als solche gekennzeichnet. 
        Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. 
        Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Impressum",
};
</script>

<style scoped>
.impressum-section {
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

.content a {
  color: #1976d2;
  text-decoration: none;
}

.content a:hover {
  text-decoration: underline;
}
</style>
