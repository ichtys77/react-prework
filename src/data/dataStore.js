export const settings = {
  columnCreatorText: 'Dodaj nową listę',
  cardCreatorText: 'Dodaj nowe zadanie',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'React apka',
  subtitle: 'Jedziemy z koksem',
};

export const listData = {
  title: 'JEST ROBOTAAAA! <sup>już wkrótce!</sup>',
  description: 'Pewnie się za nią wezmę jutro, pojutrze lub za rok!',
  imageSrc: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Nauka',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'Powtórzyć materiał z Reacta ;)',
        },
        {
          key: 1,
          title: 'Zrobić zadanie dla chętnych',
        },
      ],
    },
    {
      key: 1,
      title: 'Filmy',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Ogród Fauna',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Rozrywka',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'Pograć...',
        },
        {
          key: 1,
          title: 'i jeszcze raz pograć',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;