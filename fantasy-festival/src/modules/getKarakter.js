import { ref } from 'vue'
import image1 from '../assets/img/figurer/Arkivaren.png'
import image2 from '../assets/img/figurer/Gnist.png'
import image3 from '../assets/img/figurer/Gygaz.png'
import image4 from '../assets/img/figurer/Havfruedronning.png'
import image5 from '../assets/img/figurer/Malice.png'
import image6 from '../assets/img/figurer/Portal.png'
import image7 from '../assets/img/figurer/Vogterkæmper.png'

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
