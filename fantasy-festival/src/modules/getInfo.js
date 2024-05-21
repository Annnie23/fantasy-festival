import { ref } from 'vue';
import image1 from '../assets/img/slide5.jpg';
import image2 from '../assets/img/slide6.jpg';

const getSections = () => {
  const sections = ref([
    {
        id: 1,
        type: 'Text',
        h1: 'Fantasy Quest Esbjerg',
        h3:'Er du klar til at træde ind i en verden fyldt med magi og eventyr?',
        h3:'Tag rollen som helten i din egen episke "quest" for at besejre de mørke kræfter og redde hele verden!',
        
    },
    {id: 2,
        type: 'text',
        content: ''
      },
     
    ]);
  

    return { sections };
};

export default getSections;


