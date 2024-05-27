/*  
Dette er en snyde database
En database er en samling af data, som er organiseret på en sådan måde, at det er nemt at hente og opdatere data.
Dette gør at man kun skal opdatere data ét sted, og så vil det blive opdateret alle steder, hvor dataen bliver brugt.
Denne database, der er designet til at blive brugt i en Vue.js-applikation, 
hvor den håndterer en liste af programItems, hver med et unikt id, billede, titel, beskrivelse, dato, tidspunkt, link og linktekst.

*/


import { ref } from 'vue'

import image1 from '../assets/img/aften.jpg'
import image2 from '../assets/img/slide1.jpg'
import image3 from '../assets/img/lakse.png'

const getProgramItems = () => {
    const programItems = ref([
        {
          id: 1,
          image: image2,
          title: 'Family Quest - Dag Quest',
          description: 'En oplevelse for hele familien',
          date: 'Lørdag d. 14 september',
          hour: '10:00-14:00',
          link: 'https://www.universe.com/events/family-quest-dagquest-tickets-C6PYX3',
          linkText: 'Køb billet'
        },
        {
          id: 2,
          image: image1,
          title: 'Fantasy Quest - Aften Quest',
          description: 'Til jer der er vilde med at løse mysterier',
          date: 'Lørdag d. 14 september',
          hour: '18:00-22:00',
          link: 'https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4',
          linkText: 'Køb billet'
        },
        {
          id: 3,
          image: image3,
          title: 'Kom og mød Lakserytteren',
          description: 'Rasmus deltager selv i Questen 2024, hvor deltagerne kan møde ham personligt.',
          date: 'Lørdag d. 14 september',
          hour: '',
          link: 'https://fantasyfestival.dk/fantasy-quest-esbjerg#:~:text=videre%20p%C3%A5%20Questen-,Lakserytteren,-er%20med%20ombord',
          linkText: 'Læs mere'
        },
        
    ])
  
    return { programItems }
  }

  export default getProgramItems
