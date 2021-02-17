import { v4 as uuid } from 'uuid';

const jumbotron = [
  {
    id: uuid(),
    title: 'Enjoy on your TV.',
    subtitle: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    image: 'https://github.com/karlhadwen/netflix/blob/master/public/images/misc/home-imac.jpg?raw=true',
    direction: 'row-reverse'
  },
  {
    id: uuid(),
    title: 'Download your shows to watch offline.',
    subtitle: 'Save your favorites easily and always have something to watch.',
    image: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
    direction: 'row'
  },
  {
    id: uuid(),
    title: 'Watch everywhere.',
    subtitle: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
    image: 'https://github.com/karlhadwen/netflix/blob/master/public/images/misc/home-tv.jpg?raw=true',
    direction: 'row-reverse'
  },
]

export default jumbotron