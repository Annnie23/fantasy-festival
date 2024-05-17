
import { ref } from 'vue'

import image1 from '../assets/img/slide5.jpg'
import image2 from '../assets/img/dag.jpg'

const getProgramItems = () => {
    const programItems = ref([
        {
          id: 1,
          image: image2,
          title: 'Family Quest - DagQuest',
          description: '',
          date: 'Lørdag d. 14 september',
          hour: '10:00-14:00',
        },
        {
          id: 3,
          image: image1,
          title: 'Fantasy Quest - AftenQuest',
          description: 'This is the first portfolio item',
          date: 'Lørdag d. 14 september',
          hour: '18:00-22:00',
        },
        
    ])
  
    return { programItems }
  }

  export default getProgramItems
