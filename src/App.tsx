/* eslint-disable max-len */
import { type } from 'os';
import { title } from 'process';
import React from 'react';
import './App.scss';

type Shows = {
  id: number,
  title: string,
  description: string,
  year: number,
  isPopular: boolean,
  available: boolean,
  ratingDetails: {
    rating: boolean,
    count: boolean,
  },
  genres: string[],
  episodes: [
    {
      id: number,
      title: string,
      season: number,
      episode: number,
      released: number,
    },
    {
      id: number,
      title: string,
      season: number,
      episode: number,
      released: string,
    },
  ],
}

const App = () => {
  const shows: any = [
    {
      id: 1,
      title: 'Arrow',
      description: 'It is based on the DC Comics character Green Arrow, a costumed crime-fighter',
      year: 2012,
      isPopular: false,
      available: false,
      ratingDetails: {
        rating: 8.1137,
        count: 642,
      },
      genres: ['Drama', 'Action', 'Science-Fiction'],
      episodes: [
        {
          id: 1,
          title: 'Pilot',
          season: 1,
          episode: 1,
          released: '2012-10-11 00:00:00',
        },
        {
          id: 24,
          title: 'City of Heroes',
          season: 2,
          episode: 1,
          released: '2012-10-11 00:00:00',
        },
      ],
    },
    {
      id: 2,
      title: 'Bouncers',
      description: 'Series following the brave people who keep the peace at night.',
      year: 2019,
      isPopular: true,
      available: false,
      ratingDetails: {
        rating: 6.532,
        count: 583,
      },
      genres: ['Lifestyle', 'Drama'],
      episodes: [
        {
          id: 1,
          title: 'Episode 5',
          season: 1,
          episode: 5,
          released: '2019-08-28 23:00:00',
        },
        {
          id: 6,
          title: 'Episode 6',
          season: 1,
          episode: 6,
          released: '2019-08-28 23:00:00',
        },
      ],
    },
    {
      id: 3,
      title: 'Supernatural',
      description: 'Two brothers follow their father\'s footsteps as hunters, fighting evil supernatural beings',
      year: 2005,
      isPopular: true,
      available: false,
      ratingDetails: {
        rating: 9.995,
        count: 50,
      },
      genres: ['Fantasy', 'Drama'],
      episodes: [
        {
          id: 2,
          title: 'Wendigo',
          season: 1,
          episode: 2,
          released: '2005-09-20 23:00:00',
        },
      ],
    },
  ];
  // Get an array of all titles
  const allTitles = shows.map((element: any) => element.title);
  console.log('Get an array of all titles', allTitles);

  // Get an array of ids
  const allIds = shows.map((element: any) => element.id);
  console.log('Get an array of ids', allIds);

  // Get an array of ratings
  const allRatings = shows.map((element: any) => element.ratingDetails.rating);
  console.log('Get an array of ratings', allRatings);

  // Get an array of ratings rounded to 2 decimal places
  const allRatingsRounded = shows.map((element: any) => element.ratingDetails.rating.toFixed(2));
  console.log('Get an array of ratings rounded to 2 decimal places', allRatingsRounded);

  // Capitalise all genres
  const capitalizeGenres = shows.map((element: any) => ({ ...element, genres: element.genres.map((elements: any) => elements.toUpperCase()) }));
  console.log('Capitalise all genres', capitalizeGenres);

  // Double all ratingDetails.count
  const countDoubled = shows.map((element: any) => ({ ...element, ratingDetails: { ...element.ratingDetails, count: element.ratingDetails.count * 2 } }));
  console.log('Double all ratingDetails.count', countDoubled);

  // map() each object to only have id, title, description - šo es piemirsu, bet te vnk skip spread
  const onlyIdTitleDescription = shows.map((element: any) => (
    {
      id: element.id, title: element.title, description: element.description,
    }));
  console.log(' map() each object to only have id, title, description - šo es piemirsu, bet te vnk skip spread', onlyIdTitleDescription);

  // If id === 1, change rating to 9.9999
  const changeRatingFirst = shows.map((element: any) => (element.id === 1
    ? { ...element, ratingDetails: { ...element.ratingDetails, rating: 9.999 } }
    : element));
  console.log('If id === 1, change rating to 9.9999', changeRatingFirst);

  // If id === 2, change rating to 8 and add + 1 to rating count
  const changeRatingSecond = shows.map((element: any) => (element.id === 2
    ? { ...element, ratingDetails: { rating: 8, count: element.ratingDetails.count + 1 } }
    : element));
  console.log('If id === 2, change rating to 8 and add + 1 to rating count', changeRatingSecond);

  // If rating > 7, change isPopular value to true
  const changePopularToTrue = shows.map((element: any) => (element.ratingDetails.rating > 7
    ? { ...element, isPopular: true }
    : element));
  console.log('If rating > 7, change isPopular value to true', changePopularToTrue);

  // If isPopular === true, change rating to 10
  const ifPopularThenRatingIsTen = shows.map((element: any) => (element.isPopular === true
    ? { ...element, ratingDetails: { ...element.ratingDetails, rating: 10 } }
    : element));
  console.log('If isPopular === true, change rating to 10', ifPopularThenRatingIsTen);

  // If genres include 'Science-Fiction', change available to true
  const ifIncludeSciFiThenIsAvailable = shows.map((element: any) => (element.genres.includes('Science-Fiction')
    ? { ...element, available: true }
    : element));
  console.log('If genres include Science-Fiction, change available to true', ifIncludeSciFiThenIsAvailable);

  // If isPopular === true, map() episodes, to be an array of episode ids, else make episodes an empty []
  const popularShowEpisodeIds = shows.map((element: any) => (element.isPopular === true
    ? { ...element, episodes: element.episodes.map((episod: any) => episod.id) }
    : { ...element, episodes: [] }));
  console.log('If isPopular === true, map() episodes, to be an array of episode ids, else make episodes an empty []', popularShowEpisodeIds);

  // Get an array of all possible genres (not [['', ''], ['']] but ['', '', ''])
  const allGenres = shows.flatMap((element: any) => element.genres);
  const filteredGenres: any = [];
  allGenres.forEach((c: any) => {
    if (!filteredGenres.includes(c)) {
      filteredGenres.push(c);
    }
  });
  console.log('Get an array of all possible genres', filteredGenres);

  // If year > 2016 and isPopular === true, add 'Documentary' to genres
  const addDocumentaryToGenres = shows.map((element: any) => ((element.isPopular && element.year > 2016)
    ? { ...element, genres: element.genres.concat('Documentary') }
    : element));
  console.log('If year > 2016 and isPopular === true, add Documentary to genres', addDocumentaryToGenres);

  // If id === 1 and episode id === 24, change episode releaseDate to '2022-10-12 00:00:00'
  const changeReleaseDate = shows.map((element: any) => (element.id === 1
    ? {
      ...element,
      episodes: element.episodes.map((el: any) => (el.id === 24
        ? { ...el, released: '2022-10-12 00:00:00' } : el)),
    } : element));
  console.log('If id === 1 and episode id === 24, change episode releaseDate to 2022-10-12 00:00:00', changeReleaseDate);

  // Get all shows, where rating < 7
  const showsRatingLessThanSeven = shows.filter((element: any) => element.ratingDetails.rating < 7);
  console.log('Get all shows, where rating < 7', showsRatingLessThanSeven);

  // Get all shows, where description includes "DC"
  const descriptionIncludesDC = shows.filter((element: any) => element.description.includes('DC'));
  console.log('Get all shows, where description includes "DC"', descriptionIncludesDC);

  // Get all shows, where isPopular === true
  const popularShows = shows.filter((element: any) => element.isPopular);
  console.log('Get all shows, where isPopular === true', popularShows);

  // Get all shows, where genres include Drama
  const dramaShows = shows.filter((element: any) => element.genres.includes('Drama'));
  console.log('Get all shows, where genres include Drama', dramaShows);

  // Get all shows, where episode array length >= 2
  const showsWithAtLeastTwoEpisodes = shows.filter((element: any) => element.episodes.length >= 2);
  console.log('Get all shows, where episode array length >= 2', showsWithAtLeastTwoEpisodes);

  // Get all shows, where episode title is Wendigo
  const wendigoTitle = shows.filter((element: any) => element.episodes.every((el: any) => el.title === 'Wendigo'));
  console.log('Get all shows, where episode title is Wendigo', wendigoTitle);

  // Get all shows, where year is < 2019
  const Shows2019 = shows.filter((element: any) => element.year < 2019);
  console.log('Get all shows, where year is < 2019', Shows2019);

  // Get all shows, where title starts with Sup
  const titleStartsWithSup = shows.filter((element: any) => element.title.startsWith('Sup'));
  console.log('Get all shows, where title starts with Sup', titleStartsWithSup);

  // Get all shows, where id === 2
  const showId2 = shows.filter((element: any) => element.id === 2);
  console.log('Get all shows, where id === 2', showId2);

  // Get all shows, where id !== 2
  const showIdNot2 = shows.filter((element: any) => element.id !== 2);
  console.log('Get all shows, where id !== 2', showIdNot2);

  // Get all episodes, where genres include "Drama" and rating > 7
  const dramaWithGoodRating = shows.filter((element: any) => element.genres.includes('Drama') && element.ratingDetails.rating > 7);
  console.log('Get all episodes, where genres include "Drama" and rating > 7', dramaWithGoodRating);

  return (
    <div className="app">
      samsing
    </div>
  );
};

export default App;

// const movies:Movie[] = [
//   {
//     id: 1,
//     title: 'LOTR',
//     description: 'my Pr3Ci0uS',
//     type: MovieType.action,
//     available: true,
//   },
//   {
//     id: 2,
//     title: 'Pulp Fiction',
//     description: 'john trevolta meme',
//     type: MovieType.drama,
//     available: true,
//   },
//   {
//     id: 3,
//     title: 'SHREK',
//     description: 'SMASH MOUTH',
//     type: MovieType.comedy,
//     available: true,
//   },
// ];

// const moviesIDs = movies.map((element) => element.id);
// console.log(moviesIDs);

// const moviesWithUppercasedTitles = movies.map((element) => ({ ...element, title: element.title.toUpperCase() }));
// console.log(moviesWithUppercasedTitles);

//   type Movie = {
//   id:number,
//   title:string,
//   description:string,
//   type:MovieType
//   available: boolean
//   // IMBD: {
//   //   averageRating: number
//   //   count:number
//   // }
// }

// // eslint-disable-next-line no-shadow
// enum MovieType {
//   action = 'action',
//   drama = 'drama',
//   comedy = 'comedy'
// }
