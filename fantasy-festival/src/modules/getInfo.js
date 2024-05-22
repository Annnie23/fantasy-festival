import { ref } from 'vue';
import image1 from '../assets/img/dag.jpg';
import image2 from '../assets/img/slide5.jpg';
import image3 from '../assets/img/slide1.jpg';
import image4 from '../assets/img/slide7.jpg';
import image6 from '../assets/img/slide3.jpg';

const getSectionItems = () => {
    const sectionItems = ref([
        {
            id: 1,
            image: image1,
            title: 'En oplevelse for hele familien',
            description: `
            Familieudgaven af Fantasy Quest Esbjerg er et oplevelsesløb for
            hele familien, med tryk på oplevelse. For det er ikke et klassisk
            løb. Det handler om at leve sig ind i en anden verden, en magisk
            historie, hvor I sammen er på en ”quest” – en mission, en opgave,
            en jagt. Her møder I magiske væsner, der stiller jer nogle opgaver
            og udfordringer undervejs mod målet, som I skal løse sammen for at
            gennemføre Questen. Sværhedsgraden er sænket, så børnene kan være
            med til at løse opgaverne. Men tag ikke fejl, der er brug for alle
            gode kræfter og samarbejdsevner, hvis I skal være med til at redde
            Esbjerg. Som en ekstra bonus kan I møde YouTuberen Lakserytteren
            undervejs i Questen rundt i Esbjergs gader.
            `,
            link: 'https://www.universe.com/events/family-quest-dagquest-tickets-C6PYX3',
            linkText: 'Køb billet her',
        },
        {
            id: 2,
            image: image2,
            title: 'Til jer der er vilde med at løse mysterier',
            description: `Når tusmørket begynder at sænke sig over Esbjerg, skrues
                sværhedsgraden i AftenQuesten op. Nu skal der virkelig tænkes
                kreativt og løses opgaver, der kræver både mod, samarbejde og
                snilde for at I kan gennemføre questen og redde Esbjerg. Er du
                vild med at løse gåder og knække koder, så må du ikke snyde dig
                selv for denne ultimative oplevelse. Vi sender dig og vennerne ud
                på jeres ultimative eventyr i Esbjergs gader og stræder. Her vil I
                blive nødt til at samarbejde og udtænke nye løsninger for at
                gennemføre AftenQuesten.
                `,
            link: 'https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4',
            linkText: 'Køb billet her',
            h3: 'Esbjergs helt egen fantasyfortælling: Fantasy Quest Esbjerg', // Optional, remove if not needed
        },
        {
            id: 3,
            image: image3,
            title: 'I gamle dage sagde man...',
            description: `
            ... at det onde ville komme fra havet. Gennem generationer blev
            den fortælling givet videre. Man hørte den, da Esbjerg blev
            grundlagt i 1868. Man holdt altid øje med havet. Mod vest. Så i
            Esbjerg byggede man et værn mod ondskaben. Noget der skulle holde
            øje med havet, noget der skulle træde i karakter, hvis det gik
            galt. I 1995 blev det værn forstærket, da skulpturerne ”Mennesket
            ved havet” blev skabt. Mens kunstneren byggede om dagen, arbejdede
            troldmanden Gygaz den Vise om natten. Gygaz åbnede en portal til
            kæmpernes verden. Her fandt han frem til fire gode kæmper, der
            meldte sig frivilligt. De sagde farvel til deres familier og
            travede gennem portalen mod Esbjerg. Her mødtes de med Gygaz.
            Luften sitrede af magi, og da de sidste ord i en magtfuld formular
            forlod Gygaz’ læber, var de fire kæmper blevet ét med statuerne af
            de fire hvide mænd. På den måde kunne de til evig tid holde øje
            med havet... `,
            h3: 'AftenQuest: Udfordr vennerne!', // Optional, remove if not needed
        },
        
        {
            id: 4,
            image: image4,
            description: `
            ...Men så begyndte der at ske mystiske ting. Naturen blev syg. De
            gamle talte om ondskaben. Om vogterne. En dag trak skyerne sig
            sammen, over havet mod vest, og der blev unaturligt mørkt. Lyn
            flængede himlen. Man kunne se en stor, bevinget skabning på
            himlen. De fire statuer rejste sig op, vogterne var blevet vækket,
            de gjorde sig klar og råbte. Råbene kunne høres over hele landet,
            på tværs af portaler til andre verdener.
            <strong>”Der er brug for helte i Esbjerg!”</strong>
            , råbte de. Det er tid til, at heltene samles. Det er tid til, at
            ondskaben skal bekæmpes. Det er tid til, at portalerne lukkes.`,
            h3: 'Årene gik, og der var fred og ro...', // Optional, remove if not needed
            h6: ' Det er tid til Fantasy Quest Esbjerg. Er du klar?'
        },
        {
            id: 6,
            image: image6,
            title: 'Lakserytteren er med ombord',
            description: `
            Fantasy Quest Esbjerg er kommet for at blive en del af
                Fantasyfestivalen. 2023 var året, hvor questen blev testet af i
                mindre skala. 2024 har Fantasyfestival 10 års jubilæum og derfor
                bliver der også brygget videre på årets historie bag Questen, så
                vi kan blæse jer bagover i en fantastisk oplevelse. Det er ikke et
                hvilket som helst hold, der står bag Esbjergs helt egen
                fantasyfortælling. Questen er skrevet af et yderst kompetent hold,
                hvoraf den mest kendte nok er Rasmus Kolbe, der også er bedre
                kendt som Lakserytteren. Rasmus deltager også selv i Questen 2024,
                hvor alle deltagere har mulighed for at møde ham personligt
                undervejs. `,
            h3: 'Der brygges videre på Questen', // Optional, remove if not needed
            h6: '<strong> Det er tid til Fantasy Quest Esbjerg. Er du klar? </strong>'
        },
        
    ]);

    return { sectionItems };
};

export default getSectionItems;

