import { ref } from 'vue'



const getKarakterItems = () => {
    const karakterItems = ref([
        {
          id: 1,
          image: image1,
          title: 'Family Quest - Dag Quest',
        },
        {
          id: 2,
          image: image2,
          title: 'Fantasy Quest - Aften Quest',
        },
        {
          id: 3,
          image: image3,
          title: 'Kom og mød Lakserytteren',
        },
        {
          id: 4,
          image: image3,
          title: 'Kom og mød Lakserytteren',
        },
        {
          id: 5,
          image: image3,
          title: 'Kom og mød Lakserytteren',
        },
        {
          id: 6,
          image: image3,
          title: 'Kom og mød Lakserytteren',
        },
        {
          id: 7,
          image: image3,
          title: 'Kom og mød Lakserytteren',
        },

        
    ])
  
    return { karakterItems }
  }

  export default getKarakterItems
