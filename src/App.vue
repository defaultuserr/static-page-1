<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar app color="primary" dense>
      <div class="navigation-wrapper">
        <v-btn text to="/" class="nav-link">Startseite</v-btn>
        <v-btn text to="/disziplinen" class="nav-link">Schießstände</v-btn>
        <v-btn text to="/kontakt" class="nav-link">Kontakte</v-btn>
        <v-btn text to="/ueber-uns" class="nav-link">Über uns</v-btn>
        <v-btn text to="/termine" class="nav-link">Termine und Formulare</v-btn>
      </div>
    </v-app-bar>

    <!-- Emblem Section -->
    <div class="emblem-container">
      <v-img
        src="/emblem.png"
        alt="Schützenverein Emblem"
        class="logo"
        max-width="150px"
        height="auto"
        contain
        :lazy-src="'/emblem_small.png'"
        :aspect-ratio="1"
      >
        <template v-slot:placeholder>
          <v-skeleton-loader type="image" class="skeleton-logo"></v-skeleton-loader>
        </template>
      </v-img>
    </div>

    <!-- Main Content -->
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer class="footer">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" class="text-center">
            <p>&copy; 2025 Schützenverein "Zum Ziel". Alle Rechte vorbehalten.</p>
          </v-col>
          <v-col cols="12" class="text-center footer-links">
            <router-link to="/impressum" class="footer-link">Impressum</router-link> |
            <router-link to="/datenschutz" class="footer-link">Datenschutzerklärung</router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
/* Navigation Bar */
.v-app-bar {
  background-color: #1976d2;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
}

.navigation-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
}

.nav-link {
  font-size: 1rem;
  font-weight: 500;
  color: white;
  text-transform: uppercase;
  padding: 0 8px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #90caf9;
}

/* Emblem Section */
.emblem-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 24px;
  margin-top: 64px;
  border-bottom: 2px solid #ddd;
}

.logo {
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 150px;
  height: auto;
}

.skeleton-logo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

/* Footer */
.footer {
  background: #333;
  color: white;
  padding: 20px 0;
}

.footer p {
  margin: 0;
  font-size: 0.9rem;
}

.footer-links {
  margin-top: 10px;
}

.footer-link {
  color: #90caf9;
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-link:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .navigation-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .nav-link {
    width: 100%;
    text-align: center;
  }
  .emblem-container {
    padding: 16px;
    margin-top: 32px;
  }
  .logo {
    max-width: 80px;
  }
  .skeleton-logo {
    width: 80px;
    height: 80px;
  }
}
</style>
