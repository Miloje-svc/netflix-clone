import { v4 as uuid } from 'uuid'

export const banner = [
  {
    id: uuid(),
    image: 'https://reporter.rit.edu:8443/sites/pubDir/slideShow/02-20/1521-2464-158882019.png',
    title: 'Joker',
    description: `Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.`,
  },
  {
    id: uuid(),
    image: 'https://github.com/karlhadwen/netflix/blob/master/public/images/films/thriller/black-swan/large.jpg?raw=true',
    title: 'Black Swan',
    description: `Nina (Natalie Portman) is a ballerina whose passion for the dance rules every facet of her life. When the company's artistic director decides to replace his prima ballerina for their opening production of "Swan Lake," Nina is his first choice. She has competition in newcomer Lily (Mila Kunis) however. While Nina is perfect for the role of the White Swan, Lily personifies the Black Swan. As rivalry between the two dancers transforms into a twisted friendship, Nina's dark side begins to emerge.`,
  },
  {
    id: uuid(),
    image: 'https://github.com/karlhadwen/netflix/blob/master/public/images/films/romance/titanic/large.jpg?raw=true',
    title: 'Titanic',
    description: `James Cameron's "Titanic" is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built.`,
  },
]