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
          title: 'Arkivaren',
        },
        {
          id: 2,
          image: image2,
          title: 'Dragen Gnist',
        },
        {
          id: 3,
          image: image3,
          title: 'Troldmanden Gygaz',
        },
        {
          id: 4,
          image: image4,
          title: 'Havfruedronningen',
        },
        {
          id: 5,
          image: image5,
          title: 'Troldkvinden Malice',
        },
        {
          id: 6,
          image: image6,
          title: 'Portalen til en anden verden',
        },
        {
          id: 7,
          image: image7,
          title: 'De fire vogterkæmpere',
        },

        
    ])
  
    return { karakterItems }
  }

  export default getKarakterItems
