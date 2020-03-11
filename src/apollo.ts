import ApolloClient, { Operation } from 'apollo-boost';
import { GET_MY_LIST } from './routes/MyList/MyListQueries';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  request: (opertaion: Operation) => {
    opertaion.setContext({
      headers: {
        'X-JWT': localStorage.getItem('jwt') || '',
      },
    });
  },
  clientState: {
    defaults: {
      auth: {
        __typename: 'Auth',
        isLoggedIn: Boolean(localStorage.getItem('jwt')),
      },
    },
    resolvers: {
      Book: {
        isAdded: () => false,
      },

      Mutation: {
        UserSignIn: (_, { token }, { cache }) => {
          localStorage.setItem('jwt', token);
          cache.writeData({
            data: {
              auth: {
                __typename: 'Auth',
                isLoggedIn: true,
              },
            },
          });
          return null;
        },
        UserSignOut: (_, __, { cache }) => {
          localStorage.setItem('jwt', '');

          cache.writeData({
            data: {
              auth: {
                __typename: 'Auth',
                isLoggedIn: false,
              },
            },
          });
          return null;
        },
        addList: (_, args, { cache }) => {
          const d = cache.readQuery({
            query: GET_MY_LIST,
            variables: {
              type: 'MY',
            },
          });

          cache.writeQuery({
            query: GET_MY_LIST,
            variables: {
              type: 'MY',
            },
            data: {
              GetLists: {
                ok: true,
                error: null,
                lists: [
                  ...d.GetLists.lists,
                  { id: args.id, title: args.title, __typename: 'List' },
                ],
                __typename: 'GetListsResponse',
              },
            },
          });
          return null;
        },
        ToggleFav: (_, { bookId, isFav }, { cache }) => {
          cache.writeData({
            id: `Book:${bookId}`,
            data: {
              isFav: !isFav,
            },
          });
          return null;
        },
        ToggleAdded: (_, { bookId, isAdded }, { cache }) => {
          console.log(bookId);
          cache.writeData({
            id: `Book:${bookId}`,
            data: {
              isAdded: !isAdded,
            },
          });
          return null;
        },
      },
    },
  },
});

export default client;
