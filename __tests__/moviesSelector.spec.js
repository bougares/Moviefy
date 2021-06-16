import moviesSelector from '../redux/selectors/moviesSelector';

describe('MoviesSelector', () => {
  jest.useFakeTimers();

  it('selects all movies when neither genre nor query is specified', async () => {
    const movies = [
      { title: 'Star Wars', genres: ['Action', 'Animation'] },
      { title: 'Star Trek', genres: ['Action', 'Comedy'] },
      { title: 'Lord of the Rings', genres: ['Fantasy', 'Comedy', 'Thriller'] },
      { title: 'Smurfs', genres: ['Horror', 'Comedy'] },
      { title: 'Forest Gump', genres: ['Drama'] },
      { title: 'Star Wreck', genres: [] }
    ];

    const selected = moviesSelector({ movies });
    expect(selected).toEqual(movies);
  });

  it('selects all movies when genre is set to All', async () => {
    const movies = [
      { title: 'Star Wars', genres: ['Action', 'Animation'] },
      { title: 'Star Trek', genres: ['Action', 'Comedy'] },
      { title: 'Lord of the Rings', genres: ['Fantasy', 'Comedy', 'Thriller'] },
      { title: 'Smurfs', genres: ['Horror', 'Comedy'] },
      { title: 'Forest Gump', genres: ['Drama'] },
      { title: 'Star Wreck', genres: [] }
    ];

    const selected = moviesSelector({ movies, filter: 'All' });
    expect(selected).toEqual(movies);
  });

  it('selects movies matching given genre', async () => {
    const movies = [
      { title: 'Star Wars', genres: ['Action', 'Animation'] },
      { title: 'Star Trek', genres: ['Action', 'Comedy'] },
      { title: 'Lord of the Rings', genres: ['Fantasy', 'Comedy', 'Thriller'] },
      { title: 'Smurfs', genres: ['Horror', 'Comedy'] },
      { title: 'Forest Gump', genres: ['Drama'] },
      { title: 'Star Wreck', genres: [] }
    ];

    const selected = moviesSelector({ movies, filter: 'Action' });
    expect(selected).toEqual([movies[0], movies[1]]);
  });

  it('selects movies matching query', async () => {
    const movies = [
      { title: 'Star Wars', genres: ['Action', 'Animation'] },
      { title: 'Star Trek', genres: ['Action', 'Comedy'] },
      { title: 'Lord of the Rings', genres: ['Fantasy', 'Comedy', 'Thriller'] },
      { title: 'Smurfs', genres: ['Horror', 'Comedy'] },
      { title: 'Forest Gump', genres: ['Drama'] },
      { title: 'Star Wreck', genres: [] }
    ];

    const selected = moviesSelector({ movies, query: 'Star' });
    expect(selected).toEqual([movies[0], movies[1], movies[5]]);
  });

  it('selects movies matching both genre and query', async () => {
    const movies = [
      { title: 'Star Wars', genres: ['Action', 'Animation'] },
      { title: 'Star Trek', genres: ['Action', 'Comedy'] },
      { title: 'Lord of the Rings', genres: ['Fantasy', 'Comedy', 'Thriller'] },
      { title: 'Smurfs', genres: ['Horror', 'Comedy'] },
      { title: 'Forest Gump', genres: ['Drama'] },
      { title: 'Star Wreck', genres: [] }
    ];

    const selected = moviesSelector({ movies, filter: 'Action', query: 'Star' });
    const anotherSelected = moviesSelector({ movies, filter: 'Action', query: 'Thisissparta' });
    const yetAnotherSelected = moviesSelector({ movies, filter: 'Żenre', query: 'Star' });

    expect(selected).toEqual([movies[0], movies[1]]);
    expect(anotherSelected).toEqual([]);
    expect(yetAnotherSelected).toEqual([]);
  });

  it('selects no movie for empty movie list', async () => {
    expect(moviesSelector({ movies: [] })).toEqual([]);
    expect(moviesSelector({ movies: [], genre: 'Action' })).toEqual([]);
    expect(moviesSelector({ movies: [], genre: 'Action', query: 'adsad' })).toEqual([]);
  });
});
