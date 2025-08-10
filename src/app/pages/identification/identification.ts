import { Component } from '@angular/core';

@Component({
  selector: 'app-identification',
  standalone: false,
  templateUrl: './identification.html',
  styleUrl: './identification.css'
})
export class Identification {
  expectedObject = {
    "suggestions": [
      {
          "id": "3da17e0095995adb",
          "name": "Helianthus annuus",
          "probability": 0.9398,
          "similar_images": [
              {
                  "id": "ce5b502c591ee5fbb06c0f15e845c16971bfc87b",
                  "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/5/ce5/b502c591ee5fbb06c0f15e845c16971bfc87b.jpeg",
                  "license_name": "CC BY 4.0",
                  "license_url": "https://creativecommons.org/licenses/by/4.0/",
                  "citation": "Alex Hammond",
                  "similarity": 0.692,
                  "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/5/ce5/b502c591ee5fbb06c0f15e845c16971bfc87b.small.jpeg"
              },
              {
                  "id": "a551929fbaa017302aaa51e81305426e55eaa290",
                  "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/5/a55/1929fbaa017302aaa51e81305426e55eaa290.jpg",
                  "license_name": "CC BY 4.0",
                  "license_url": "https://creativecommons.org/licenses/by/4.0/",
                  "citation": "Adriana Nelly Correa Sandoval",
                  "similarity": 0.667,
                  "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/5/a55/1929fbaa017302aaa51e81305426e55eaa290.small.jpg"
              }
          ],
          "details": {
              "common_names": [
                  "Girasol",
                  "Acahual"
              ],
              "description": {
                  "value": "Helianthus annuus, también llamado comúnmente girasol, mirasol, maravilla, maíz de teja, acahual[3]​ (del náhuatl atl, 'agua', y cahualli, 'dejado', abandonado') es una planta herbácea anual de la familia de las asteráceas originaria de Centro y Norteamérica y cultivada como alimenticia, oleaginosa y ornamental en todo el mundo.",
                  "citation": "https://es.wikipedia.org/wiki/Helianthus_annuus",
                  "license_name": "CC BY-SA 3.0",
                  "license_url": "https://creativecommons.org/licenses/by-sa/3.0/"
              },
              "language": "es",
              "entity_id": "3da17e0095995adb"
          }
      },
      {
          "id": "829cda7c6181a368",
          "name": "Helianthus petiolaris",
          "probability": 0.0181,
          "similar_images": [
              {
                  "id": "7d90e2b2b4a17609d3cb39f4d52ef40cb95de459",
                  "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/5/7d9/0e2b2b4a17609d3cb39f4d52ef40cb95de459.jpeg",
                  "license_name": "CC BY-SA 4.0",
                  "license_url": "https://creativecommons.org/licenses/by-sa/4.0/",
                  "citation": "sawa vitor",
                  "similarity": 0.61,
                  "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/5/7d9/0e2b2b4a17609d3cb39f4d52ef40cb95de459.small.jpeg"
              },
              {
                  "id": "53bf52dbc0c882efd83692fba58dd094d74c83ac",
                  "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/5/53b/f52dbc0c882efd83692fba58dd094d74c83ac.jpg",
                  "license_name": "CC BY 4.0",
                  "license_url": "https://creativecommons.org/licenses/by/4.0/",
                  "citation": "Sam Kieschnick",
                  "similarity": 0.602,
                  "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/5/53b/f52dbc0c882efd83692fba58dd094d74c83ac.small.jpg"
              }
          ],
          "details": {
              "common_names": [
                  "Girasol de pradera"
              ],
              "description": null,
              "language": "es",
              "entity_id": "829cda7c6181a368"
          }
      },
      {
          "id": "87fd40027c8b885f",
          "name": "Rudbeckia fulgida",
          "probability": 0.0161,
          "similar_images": [
              {
                  "id": "9a90f107f68e2315749246af7fa211805f19172e",
                  "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/5/9a9/0f107f68e2315749246af7fa211805f19172e.jpeg",
                  "license_name": "CC BY 4.0",
                  "license_url": "https://creativecommons.org/licenses/by/4.0/",
                  "citation": "jacques MARCEL",
                  "similarity": 0.608,
                  "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/5/9a9/0f107f68e2315749246af7fa211805f19172e.small.jpeg"
              },
              {
                  "id": "fc40c2a9e667fca562fcb9534e1dba1dec078451",
                  "url": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/5/fc4/0c2a9e667fca562fcb9534e1dba1dec078451.jpeg",
                  "license_name": "CC BY 4.0",
                  "license_url": "https://creativecommons.org/licenses/by/4.0/",
                  "citation": "Jean-François Hamonet",
                  "similarity": 0.606,
                  "url_small": "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/5/fc4/0c2a9e667fca562fcb9534e1dba1dec078451.small.jpeg"
              }
          ],
          "details": {
              "common_names": null,
              "description": null,
              "language": "es",
              "entity_id": "87fd40027c8b885f"
          }
      }
  ]
  }

  imgSrc : string | ArrayBuffer | null = null;

  onFileSelected(event : any){
    const file : File = event.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = ()=>{
        this.imgSrc = reader.result;
      }
    }
  }
}
