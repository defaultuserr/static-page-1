
import { ref, reactive } from "vue";
import headerImage from "@/assets/images/alterverein.jpg";
import profile1 from "@/assets/images/mann.jpg";
import profile2 from "@/assets/images/mann.jpg";
import profile3 from "@/assets/images/mann.jpg";
import { getUrl } from 'aws-amplify/storage';

export default {
  name: "SchuetzenInfo",
  setup() {
    const headerImageLoaded = ref(false);
    const profileImagesLoaded = reactive([false, false, false]);

    const onHeaderImageLoad = () => {

      headerImageLoaded.value = true;
    };

    const onProfileImageLoad = (index) => {
     
      profileImagesLoaded[index] = true;
    };

    const boardMembers = [
      { name: "Christian Name", title: "1. Schützenmeister", image: profile1 },
      { name: "Andreas Name", title: "2. Schützenmeister", image: profile2 },
      { name: "Thomas Name", title: "Schatzmeister", image: profile3 },
    ];

    return {
      headerImage,
      headerImageLoaded,
      profileImagesLoaded,
      onHeaderImageLoad,
      onProfileImageLoad,
      boardMembers,
    };
  },
  methods: {
    async downloadSatzung() {
      // Execute your function logic
      console.log("Opening file in a new tab!");
      const linkToStorageFile = await getUrl({
        path: "files/satzung.pdf",
  
      });

      console.log('signed URL: ', linkToStorageFile.url);
        console.log('URL expires at: ', linkToStorageFile.expiresAt);
      // Open the file in a new tab
     // window.open("https://ampli", "_blank");
    },

     
  }


};