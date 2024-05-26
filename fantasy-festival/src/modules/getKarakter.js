/* Det her er en database, der er designet til at blive brugt i en Vue.js-applikation, 
hvor den håndterer en liste af karakterer, hver med et unikt id, billede, alternativ tekst (alt), 
og titel. Når funktionen getKarakterItems kaldes, returnerer den den reaktive listen karakterItems, 
som kan bruges i komponenter til at vise karaktererne og deres billeder dynamisk.
Denne vue.js-applikation bruges til at vise karakterne fra questen på Questsiden.
Hvert ID er unikt og bruges til at identificere karakteren, når der klikkes på den.
Billederne af karaktererne er gemt i assets-mappen og importeres til databasen.
Hver karakter har et billede, en alternativ tekst (alt) og en titel, som bruges til at beskrive karakteren.
Karaktererne kan tilføjes eller fjernes fra listen, hvis det ønskes.
Vi har vlagt at benytte denne database til karakterne, da karakterne kommer til at blive ændret hvert år, 
og databasen gør det nemt at tilføje eller fjerne karakterene. Uden der skal tilpasses kode i komponenterne og laves om på css.
vi har valgt at give billederne den sammme størrelse, så de passer sammen i en grid.
Billed størrelsen er 2.100 pixel i højden og 1.500 pixel i bredden.
*/

import { ref } from 'vue'
/* Dette er en named import fra Vue.js-biblioteket.
ref er en funktion, der gør det muligt at oprette reaktive dataobjekter i en Vue 3-komponent.
Når du bruger ref, kan Vue automatisk spore ændringer i den refererede data og opdatere UI-komponenter, der afhænger af disse data. */

import image1 from '../assets/img/figurer/Arkivaren.png'
import image2 from '../assets/img/figurer/Gnist.png'
import image3 from '../assets/img/figurer/Gygaz.png'
import image4 from '../assets/img/figurer/Havfruedronning.png'
import image5 from '../assets/img/figurer/Malice.png'
import image6 from '../assets/img/figurer/Portal.png'
import image7 from '../assets/img/figurer/Vogterkæmper.png'
/* Import image, importerer billeder fra assets mappen ind i koden. 
Når man benytter import image, kan man gøre selve stien til billedet dynamisk,
hvilket gør det nemmere at tilføje eller fjerne billeder fra databasen. 
Billederne er gemt i assets-mappen og importeres til databasen. 
Billederne bruges til at vise karaktererne på Questsiden. 
*/


const getKarakterItems = () => {
    const karakterItems = ref([
        {
          id: 1,
          image: image1,
          alt: 'Arkivaren',
          title: 'Arkivaren',
        },
        {
          id: 2,
          image: image2,
          alt: 'Dragen Gnist',
          title: 'Dragen Gnist',
        },
        {
          id: 3,
          image: image3,
          alt: 'Troldmanden Gygaz',
          title: 'Troldmanden Gygaz',
        },
        {
          id: 4,
          image: image4,
          alt: 'Havfruedronningen',
          title: 'Havfruedronningen',
        },
        {
          id: 5,
          image: image5,
          alt: 'Troldkvinden Malice',
          title: 'Troldkvinden Malice',
        },
        {
          id: 6,
          image: image6,
          alt: 'Portalen til en anden verden',
          title: 'Portalen til en anden verden',
        },
        {
          id: 7,
          image: image7,
          alt: 'De fire vogterkæmpere',
          title: 'De fire vogterkæmpere',
        },
        
    ])
  
    return { karakterItems }
  }

  export default getKarakterItems
