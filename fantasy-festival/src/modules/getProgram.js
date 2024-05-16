
import { ref } from 'vue'

import image1 from '../assets/img/Aften.jpg'
import image2 from '../assets/img/Dag.jpg'

const getProgramItems = () => {
    const programItems = ref([
        {
          id: 1,
          image: image2,
          title: 'Portfolio Item 1',
          description: 'This is the first portfolio item',
          date: 'web',
          hour: '10:00',
        },
        {
          id: 2,
          image: image2,
          title: 'Portfolio Item 1',
          description: 'This is the first portfolio item',
          date: 'web',
          hour: '10:00',
        },
        {
          id: 3,
          image: image1,
          title: 'Portfolio Item 1',
          description: 'This is the first portfolio item',
          date: 'web',
          hour: '10:00',
        },
        {
          id: 4,
          image: image1,
          title: 'Portfolio Item 1',
          description: 'This is the first portfolio item',
          date: 'web',
          hour: '10:00',
        },
        
    ])
  
    return { programItems }
  }

  export default getProgramItems
