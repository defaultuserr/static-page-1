import { getUrl } from 'aws-amplify/storage';
import { downloadData } from 'aws-amplify/storage';
export default {
    name: "TermineFormulare",
    data() {
      return {
        termine: [],
      };
    },
   async mounted() {
       let data = await  this.getDataForFile("files/schiessplan.json")
      // Termine aus JSON-Datei laden

        this.termine = JSON.parse(data)
         
 
    },
     methods: {
        async download(string) {
          // Execute your function logic
       
          let  pathFile = "files/" + string
         
          const linkToStorageFile = await this.getUrlForFile(pathFile)
          
          // Open the file in a new tab
         window.open(linkToStorageFile.url.toString(), "_blank");
        },
        async  getUrlForFile(string) {
           
            const linkToStorageFile = await getUrl({
                path: string,
          
              });

            return linkToStorageFile
        },
        async getDataForFile(string){
            try {
                const downloadResult = await downloadData({
                  path: string
                }).result;
                const text = await downloadResult.body.text();
                // Alternatively, you can use `downloadResult.body.blob()`
                // or `downloadResult.body.json()` get read body in Blob or JSON format.
             
                return text
              } catch (error) {
                console.log('Error : ', error);
              }
        }
    
    }
  };