import Home from "../components/Home.vue";
import Gallery from "../components/Gallery.vue";
import Contact from "../components/Contact.vue";
import Impressum  from "../components/Impressum.vue"
import Disziplinen from "../components/Disziplinen.vue";
import Datenschutz from '@/components/Datenschutz.vue';
import TermineFormulare from '@/components/TermineFormulare.vue';


export default [
  { path: "/", name: "Home", component: Home },
  { path: "/galerie", name: "Gallery", component: Gallery },
  { path: "/disziplinen", name: "Disziplinen", component: Disziplinen },
  { path: "/kontakt", name: "Contact", component: Contact },
  { path: "/impressum", name: "Impressum", component: Impressum },
  { path: '/datenschutz', component: Datenschutz },
  { path: '/termine', component: TermineFormulare },

];
