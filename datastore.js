// `STORE` is responsible for storing the underlying data
// that the app needs to keep track of in order to work.
// STORE is an array of objects representing each question
//-answer element

const STORE = [
    {
      question:'Which country did the Bhagwan and his disciples originate from?',
      answers: [
        'The United States',
        'India',
        'Peru',
        'Australia'
        ],
        correctAnswer: 'India',
        image: 'https://i.imgur.com/vc6rjFI.jpg',
        alt: 'Photo of disciples at the Rajneesh temple gate',
        imageDescription: 'The Rajneesh temple gate in India'
    },
    {
      question:'A main principle from the teachings of the Bhagwan are:',
      answers: [
        'The force of power never wins against the power of love',
        'The path to enlightenment can be found through enjoying physical pleasure so regularly that it becomes meaningless',
        'People are immortal alien beings who have forgotten their true nature and are trapped on Earth in a human body',
        'One can ultimately achieve dharma through estatic dancing'
        ],
        correctAnswer: 'The path to enlightenment can be found through enjoying physical pleasure so regularly that it becomes meaningless',
        image: 'https://i.imgur.com/1Rv3eBB.jpg',
        alt: 'Photo of the guru in adorned robes',
        imageDescription: 'The guru Bhagwan approves of lavish amounts of physical pleasure and matieral items'
        
    },
    {
      question:'What was the name of the small Oregon town near the ranch where the commune was built?',
      answers: [
        'Buffalo',
        'Gazelle',
        'Bighorn',
        'Antelope'
        ],
        correctAnswer: 'Antelope',
        image: 'https://i.imgur.com/0A09ABf.jpg',
        alt: 'Photo of Antelope town welcome sign',
        imageDescription: 'Welcome to Antelope! The townspeople are not happy about this.'
    },
    {
      question: 'Which did the commune not have on its vast campus?',
      answers: [
        'An airport',
        'A shopping mall',
        'A police force',
        'A ferris wheel'
        ],
        correctAnswer: 'A ferris wheel',
        image: 'https://i.imgur.com/NpkMHKA.jpg',
        alt: 'Photo of Bhagwan getting into one of the Rajneesh airplanes',
        imageDescription: 'That\'s right. The cult had their very own airport'
    },
    {
      question: 'What group of people did the Rajneeshees target to increase their population and therefore increase their voting power?',
      answers: [
        'Teenagers',
        'Homeless people',
        'Addicts and alcoholics',
        'Single mothers'
        ],
        correctAnswer: 'Homeless people',
        image: 'https://i.imgur.com/7jCUUFP.jpg',
        alt: 'Homeless people boarding a bus to Rajneeshpuram',
        imageDescription: 'Thousands of homelss people were bussed into Rajneeshpuram in hopes they could help the cult take control of the entire county'
    },
    {
      question: 'When the aforementioned group of people began to get out of hand, how did the Rajneeshees initially handle the situation?',
      answers: [
        'Taking them deep into the desert and leaving them there',
        'Introducing them to Catholicism and sending to convents',
        'Drugging their beer',
        'Chaining them to trees'
        ],
        correctAnswer: 'Drugging their beer',
        image: 'http://www.satrakshita.com/images/WorldTour125small.jpg',
        alt: 'Bhagwan enjoying a glass of wine',
        imageDescription: 'Bhagwan enjoying some fine wine while the troublemakers get sedated. Cheers!'
    },
    {
      question: 'All of the following did jail time after the commune fell except for:',
      answers: [
        'Bhagwan Shree Rajneesh (the guru)',
        'Ma Anand Sheela (Bhagwan\'s personal secretary)',
        'Jane Stork (top aide to Sheela)',
        'David Berry Knapp (mayor of Rajneeshpuramn)'
        ],
        correctAnswer: 'Bhagwan Shree Rajneesh (the guru)',
        image: 'https://i.imgur.com/dAnqEkQ.jpg',
        alt: 'Ma Anand Sheela looking cheerful in handcuffs',
        imageDescription: 'The guru got lucky - he got kicked out the the states but experienced no jail time'
    },
    {
      question: 'As the cult gained attention in the media, they attracted a crowd of wealthy supporters who wooed the guru Bhagwan with expensive luxury items. This group was nicknamed:',
      answers: [
        'The Glamor Crowd',
        'The Hollywood Crowd',
        'The Fame Players',
        'The Celebrity Players'
        ],
        correctAnswer: 'The Hollywood Crowd',
        image: 'https://i.imgur.com/gDeSCwy.jpg',
        alt: 'The guru looking glam. Bhagwan has a taste for the finer things',
        imageDescription: 'The Hollywood crowd knew how to sway the Bhagwan with sparkly things'
    },
    {
      question: 'In an (unsuccessful) attempt to win the election and gain control of Wasco county, the Rajneeshees did what to distract the citizens of the Dalles, Oregon?',
      answers: [
        'Poisoned them with salmonella that they cultivated in their lab',
        'Intimidated them with guns so they were afraid to leave the house',
        'Staged a series of orgies on the other side of town from the voting booth',
        'Poisoned their livestock'
        ],
        correctAnswer: 'Poisoned them with salmonella that they grew in their lab',
        image: 'https://i.imgur.com/qlAIG2G.jpg',
        alt: 'One of many salad bars poisoned by the Rajneeshees',
        imageDescription: 'This salad bar at the Taco Time was one of many eateries the cult poisoned with salmonella '
    },
    {
      question: 'These days, the land where commune stood is now:',
      answers: [
        'A wind farm',
        'A private glamping resort with yurts and hot springs',
        'A summer camp for Christian highschoolers',
        'Once again being used as ranchland' 
        ],
        correctAnswer: 'A summer camp for Christian highschoolers',
        image: 'https://i.imgur.com/ZK1rMqA.jpg',
        alt: 'Highschoolers having a pool party on the former cult grounds',
        imageDescription: 'Highschoolers having a different kind of fun on the former cult grounds'
    }
];