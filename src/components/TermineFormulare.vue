<template>
  <v-container class="termine-container">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <h1 class="text-h4 section-title mb-6 text-center">Termine & Formulare</h1>
        <p class="text-body-1 section-description text-center mb-8">
          Alle wichtigen Termine und Formulare auf einen Blick.
        </p>

        <v-divider class="mb-6"></v-divider>

        <!-- Terminplan -->
        <v-card outlined class="mb-4">
          <v-card-title class="text-h5">Terminplan 2025</v-card-title>
          <v-card-text>
            <p>Hier finden Sie alle geplanten Veranstaltungen und Termine für das Jahr 2025:</p>
            <br>
            <v-btn color="#355E3B" text target="_blank" href="https://amplify-d3lucdea93nvum-ma-staticfilesbucketffc2128-n2ixfkzqsd5z.s3.eu-central-1.amazonaws.com/Mitgliedsantrag_GlueckAuf.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAWU3D7RT4M42JNKJQ%2F20250218%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250218T211118Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aDGV1LWNlbnRyYWwtMSJHMEUCIQDPYNJ6g4zYa%2BsTerIbReJALKRTbqYhd4mP72Q81VYycgIgU1bQqXO%2BdSlr9B%2FdCWbl%2Bj6GJj%2BRwtdXZABEspovvr4q%2BAIIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARADGgw0NTcwODY4MzE4NjQiDNVbZrvavneNJ4TMcCrMApDofjvNQZKa%2BXf0uqhEWvjmQJ7Oj2HqlKUIWhcVuPJ43coZ78N1YAQxTnTTo4V7ehObHOeuuhVfCsLQrFIYdrgU14oYXMLviHXmYXYpyaD9slP4fi9joX%2FNYW2xAFWV0sFI%2BcuJ70g0sa9x%2F5pLXGOgR9mr0Hi4aOS%2FIAQub0AjQq%2FC0gETQwg7I4jIFRB%2BaxRpE2I4yHwH3S3lstoGbn4us9voMPBMOhDRiujiid6F2DuQpsiBPug7aARu5%2B65%2Fd1SnYKAREPj7jpNiMPXgp%2FUb8lt7Rtux1XLkKJSQzqfxdcgE1JMcGxTZ0JzSn7aVF3aWg9FqdGydCZ5PDpCQZ5uoWCzrTYum1oGpUxRd63Cf5vV7sO3g1B6cEPXDslv1In9uQ0IqbjPLt0lP7q8HARQgv1oazF9ocVydhPdERQ70WzbPpLnZhRHbOZ5MNyu070GOrMCk1IjkuSice78fdwzsQnLtrKRZV0a5XA73HSSlH5veLLGlsGYETqRugJNYAmPgPREcR5AmrmQmMltji7bA8T5o7AqVk2Y9aw6Cy2BBtO7vIudb90bfCvk5TSIWMQ07pD3NPUpxog9Be4UUi%2B72DfZfziwpurevL%2Brr2TYRXnLpZ6KQ3kXQQ8d9SIfkf%2BdqseLpb93LtttNCtmWUpZq7Rqy%2FxlKP%2BW77fcDCrUlboltLeXjrwCRoTsXOjlcD3IIa7sfGf%2FX%2B%2B64w5v5HpHpd3RH4QUxZuiAPxuhdERv8YYx4PxdeJnfQPIVeqAMxwXG8Vn7rBizxtI174pApm6J9jIbNJ7kzhAfuNQ4bO3tqzjs%2BtsVbwwD%2F5qyP0hudVC5THYPXkhJxBRr5xNl%2Fb%2BM%2BrHeqBWrw%3D%3D&X-Amz-Signature=5d6ce7c492548f19fbedebe4939014231268bbb21e88d3db481960627ab207a8&X-Amz-SignedHeaders=host&x-id=GetObject" download>Terminplan 2025 herunterladen</v-btn>
          </v-card-text>
        </v-card>

        <!-- Formulare -->
        <v-card outlined class="mb-4">
          <v-card-title class="text-h5">Formulare</v-card-title>
          <v-card-text>
            <ul class="form-list">
              <li>
                <p>Um Mitglied unseres Vereins zu werden, füllen Sie bitte den Mitgliedsantrag aus:</p>
                <br>
                <v-btn color="#355E3B" text target="_blank" href="https://amplify-d3lucdea93nvum-ma-staticfilesbucketffc2128-n2ixfkzqsd5z.s3.eu-central-1.amazonaws.com/Mitgliedsantrag_GlueckAuf.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAWU3D7RT4M42JNKJQ%2F20250218%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250218T211118Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aDGV1LWNlbnRyYWwtMSJHMEUCIQDPYNJ6g4zYa%2BsTerIbReJALKRTbqYhd4mP72Q81VYycgIgU1bQqXO%2BdSlr9B%2FdCWbl%2Bj6GJj%2BRwtdXZABEspovvr4q%2BAIIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARADGgw0NTcwODY4MzE4NjQiDNVbZrvavneNJ4TMcCrMApDofjvNQZKa%2BXf0uqhEWvjmQJ7Oj2HqlKUIWhcVuPJ43coZ78N1YAQxTnTTo4V7ehObHOeuuhVfCsLQrFIYdrgU14oYXMLviHXmYXYpyaD9slP4fi9joX%2FNYW2xAFWV0sFI%2BcuJ70g0sa9x%2F5pLXGOgR9mr0Hi4aOS%2FIAQub0AjQq%2FC0gETQwg7I4jIFRB%2BaxRpE2I4yHwH3S3lstoGbn4us9voMPBMOhDRiujiid6F2DuQpsiBPug7aARu5%2B65%2Fd1SnYKAREPj7jpNiMPXgp%2FUb8lt7Rtux1XLkKJSQzqfxdcgE1JMcGxTZ0JzSn7aVF3aWg9FqdGydCZ5PDpCQZ5uoWCzrTYum1oGpUxRd63Cf5vV7sO3g1B6cEPXDslv1In9uQ0IqbjPLt0lP7q8HARQgv1oazF9ocVydhPdERQ70WzbPpLnZhRHbOZ5MNyu070GOrMCk1IjkuSice78fdwzsQnLtrKRZV0a5XA73HSSlH5veLLGlsGYETqRugJNYAmPgPREcR5AmrmQmMltji7bA8T5o7AqVk2Y9aw6Cy2BBtO7vIudb90bfCvk5TSIWMQ07pD3NPUpxog9Be4UUi%2B72DfZfziwpurevL%2Brr2TYRXnLpZ6KQ3kXQQ8d9SIfkf%2BdqseLpb93LtttNCtmWUpZq7Rqy%2FxlKP%2BW77fcDCrUlboltLeXjrwCRoTsXOjlcD3IIa7sfGf%2FX%2B%2B64w5v5HpHpd3RH4QUxZuiAPxuhdERv8YYx4PxdeJnfQPIVeqAMxwXG8Vn7rBizxtI174pApm6J9jIbNJ7kzhAfuNQ4bO3tqzjs%2BtsVbwwD%2F5qyP0hudVC5THYPXkhJxBRr5xNl%2Fb%2BM%2BrHeqBWrw%3D%3D&X-Amz-Signature=5d6ce7c492548f19fbedebe4939014231268bbb21e88d3db481960627ab207a8&X-Amz-SignedHeaders=host&x-id=GetObject" download>Mitgliedsantrag herunterladen</v-btn>
              </li>
            </ul>
          </v-card-text>
        </v-card>

        <!-- Schießtage -->
        <v-card outlined class="mb-4">
          <v-card-title class="text-h5">Schießtage 2025</v-card-title>
          <v-card-text>
            <p>Alle geplanten Schießtage für das Jahr 2025 können Sie hier einsehen:</p>
            <ul class="schedule-list">
              <li v-for="(item, index) in termine" :key="index">
                <span class="date">{{ item.date }}</span>
                <div class="description">
                  <span v-for="(line, lineIndex) in item.description" :key="lineIndex">{{ line }}</span>
                </div>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TermineFormulare",
  data() {
    return {
      termine: [],
    };
  },
  mounted() {
    // Termine aus JSON-Datei laden
    fetch('/termine.json')
      .then((response) => response.json())
      .then((data) => {
        this.termine = data;
      })
      .catch((error) => {
        console.error("Fehler beim Laden der Termine:", error);
      });
  },
 
};
</script>

<style scoped>
.termine-container {

  margin: 0 auto;
  padding: 20px;
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

.form-list {
  padding-left: 16px;
  list-style-type: disc;
}

.schedule-list {
  padding-left: 16px;
  list-style-type: none;
  padding: 0;
  line-height: 1.8;
}

.schedule-list li {
  margin-bottom: 16px;
  border-bottom: 1px dashed #ccc;
  padding-bottom: 8px;
}

.date {
  font-weight: bold;
  color: #355E3B;
  margin-right: 8px;
}

.description span {
  display: block;
  color: #555;
  margin-left: 16px;
}
</style>
