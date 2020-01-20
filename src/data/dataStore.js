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
