import gql from 'graphql-tag'

export const FRONT_PAGE_QUERY = gql`
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
                  excerpt {
                    json
                  }
                  hero_imageConnection {
                    edges {
                      node {
                        title
                        url
                      }
                    }
                  }
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
                  excerpt {
                    json
                  }
                  hero_imageConnection {
                    edges {
                      node {
                        title
                        url
                      }
                    }
                  }
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