import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { useAccessStore } from '@vben/stores'; // Ajusta la ruta según sea necesario
import { API_URL } from '../config'; // Ajusta la ruta según sea necesario

const httpLink = createHttpLink({
  
  uri: API_URL,
});

const authLink = setContext((_, { headers }) => {
  const accessStore = useAccessStore();
  const token = accessStore.accessToken;

  return {
    headers: {
      ...headers,
      Authorization: token ? `${token}`: '',
    }
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const apolloClient = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
});

export default apolloClient;