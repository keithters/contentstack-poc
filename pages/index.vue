<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl">Hello!</h1>
    <div v-if="!$apollo.loading" class="content">
      <h1>{{ front_page }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
// import Vue, { ComponentOptions } from "vue";
import gql from 'graphql-tag'

// const BASIC_GQL_QUERY = gql`
//   query getPage {
//     all_front_page {
//       items {
//         title
//       }
//     }
//   }
//   `

const FRONT_PAGE_QUERY = gql`
query MyQuery {
  front_page(uid: "bltf52dc8a3a61ce1e7") {
    front_page_blocks {
      ... on FrontPageFrontPageBlocksLeadArticle {
        __typename
        lead_article {
          referenceConnection {
            edges {
              node {
                ... on Article {
                  title
                }
              }
            }
          }
        }
      }
      ... on FrontPageFrontPageBlocksExternalArticle {
        __typename
        external_article {
          referenceConnection {
            edges {
              node {
                ... on ExternalArticle {
                  title
                  link
                }
              }
            }
          }
        }
      }
      ... on FrontPageFrontPageBlocksPullQuote {
        __typename
        pull_quote {
          byline
          quote_text
        }
      }
    }
    title
    hero_imageConnection {
      edges {
        node {
          url
          title
        }
      }
    }
    global_field {
      keywords
      meta_description
    }
    system {
      created_at
      updated_at
      created_by
      updated_by
      uid
      version
      content_type_uid
      locale
    }
  }
}
`

export default {
  apollo: {
    $loadingKey: 'loading',
    front_page: FRONT_PAGE_QUERY
  },
}

// export default Vue.extend({

</script>
