import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import schema from './schema.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: schema.data
})

const cache = new InMemoryCache({ fragmentMatcher })

export default function() {
    return {
        httpEndpoint: "https://graphql.contentstack.com/stacks/bltc05b09e9a5388e25?environment=local",
        httpLinkOptions: {
          headers: {
            'access_token': process.env.CONTENTSTACK_API_KEY || "cs5757cf4f75ce7a929fd667fe",
          },
        },
        cache
    }
}