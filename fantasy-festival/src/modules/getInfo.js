import { ref } from 'vue';
import image1 from '../assets/img/slide5.jpg';

const getSectionItems = () => {
    const sectionItems = ref([
        {
            id: 1,
            image: image1,
            title: 'Family Quest - Dag Quest',
            description: 'En oplevelse for hele familien',
            link: 'https://www.universe.com/events/family-quest-dagquest-tickets-C6PYX3',
            linkText: 'Køb billet',
            h3: 'Special Event', // Optional, remove if not needed
            h6: 'Join us for a fun day!' // Optional, remove if not needed
        },
    ]);

    return { sectionItems };
};

export default getSectionItems;

