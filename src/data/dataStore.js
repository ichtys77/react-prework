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

  search: {
    defaultText: 'Search...',
    icon: 'search',
  },

  navbar: {
    toHome: '/',
    toInfo: '/info',
    toFAQ: '/faq',
    icon: 'clipboard-list',
    classNameActive: 'active',
  },

  home: {
    title: 'Things to do <sup>soon!</sup>',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },

  info: {
    title: 'INFO',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    containerTitle: 'Info',
    containerText: 'Lorem dżipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },

  FAQ: {
    title: 'FAQ',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    question1: 'Question 1',
    answer1: 'Honorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    question2: 'Question 1',
    answer2: 'Maiorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },

};

export const pageContents = {
  title: 'React apka',
  subtitle: 'Jedziemy z koksem',
};

export const listData = {
  title: 'JEST ROBOTAAAA! <sup>już wkrótce!</sup>',
  description: 'Pewnie się za nią wezmę jutro, pojutrze lub za rok!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
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
    index: 0,
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
    index: 1,
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
    index: 0,
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
    index: 1,
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
    index: 0,
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
    index: 1,
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;