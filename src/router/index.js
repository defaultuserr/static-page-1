import Home from "../components/Home.vue";
import Events from "../components/Events.vue";
import Gallery from "../components/Gallery.vue";
import Contact from "../components/Contact.vue";
import Disziplinen from "../components/Disziplinen.vue";

export default [
  { path: "/", name: "Home", component: Home },
  { path: "/veranstaltungen", name: "Events", component: Events },
  { path: "/galerie", name: "Gallery", component: Gallery },
  { path: "/disziplinen", name: "Disziplinen", component: Disziplinen },
  { path: "/kontakt", name: "Contact", component: Contact },
];
