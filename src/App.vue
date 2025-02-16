<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar app color="#355E3B" dense>
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
        :src="emblem"

        alt="Schützenverein Emblem"
        class="logo"
        max-width="150px"
        height="auto"
        contain
        :aspect-ratio="1"
      >
        <template v-slot:placeholder>
          <div class="custom-skeleton"></div>
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
import emblem from "@/assets/images/emblem.png";


export default {
  name: "App",
  data() {
    return {
      emblem,
   
    };
  },
};
</script>

<style scoped>
/* Navigation Bar */
.v-app-bar {
  background-color:rgb(31, 119, 44);
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
  color:rgb(144, 249, 184);
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

.custom-skeleton {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
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
  color:rgb(144, 249, 195);
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-link:hover {
  text-decoration: underline;
}

/* Responsive Anpassungen */
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
  .custom-skeleton {
    width: 80px;
    height: 80px;
  }
}
/* Navigation Bar */
.v-app-bar {
  background-color: #355E3B; /* Hunter Green */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
}

/* Navigation Links */
.nav-link {
  font-size: 1rem;
  font-weight: 500;
  color: white;
  text-transform: uppercase;
  padding: 0 8px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #4A7C59; /* Slightly lighter Hunter Green */
}

/* Footer */
.footer {
  background: #355E3B; /* Hunter Green */
  color: white;
  padding: 20px 0;
}

.footer-link {
  color: #90CAF9;
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-link:hover {
  text-decoration: underline;
}

/* Buttons */
.v-btn {
  background-color: #355E3B !important; /* Hunter Green */
  color: white !important;
  transition: background-color 0.3s ease;
}

.v-btn:hover {
  background-color: #4A7C59 !important; /* Lighter Hunter Green */
}

/* Header Image Background */
.schuetzen-container {
  background-color:hsl(0, 0.00%, 96.10%); /* Light Gray Background for contrast */
}

</style>
