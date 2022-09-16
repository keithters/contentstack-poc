<template>
  <div class="container mx-auto px-4 my-10">
    <div v-if="!$apollo.loading" class="content">
      <header>
        <!-- Background image -->
        <div class="relative overflow-hidden bg-no-repeat bg-cover my-4" style="
          background-position: 50%;
          background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp');
          height: 350px;
        ">
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style="background-color: rgba(0, 0, 0, 0.75)">
            <div class="flex justify-center items-center h-full">
              <div class="text-center text-white px-6 md:px-12">
                <h1 class="text-5xl font-bold mt-0 mb-6">{{ front_page.title }}</h1>
                <h3 class="text-3xl font-regular mb-8">{{ front_page.global_field.meta_description }}</h3>
              </div>
            </div>
          </div>
        </div>
        <!-- Background image -->
      </header>
      <ul class="grid md:grid-cols-3 sm:grid-cols-1 gap-4 flex">
        <li v-for="block in front_page.front_page_blocks">
          <div v-if="block.__typename == 'FrontPageFrontPageBlocksLeadArticle'" class="max-w-sm rounded overflow-hidden shadow-lg h-full">
              <!-- <img class="w-full" :src="front_page.hero_imageConnection.edges[0].node.url" alt=""> -->
              <img class="w-full" :src="block.lead_article.referenceConnection.edges[0].node.hero_imageConnection.edges[0].node.url" alt="">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{ block.lead_article.referenceConnection.edges[0].node.title }}</div>
                <div class="text-gray-700 text-base">
                  <div v-html="convertJson(block.lead_article.referenceConnection.edges[0].node.excerpt.json)"></div>
                </div>
            </div>
            <div class="px-6 pt-4 pb-2 align-bottom">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">lorem</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ipsum</span>
              </div>
          </div>
          <div v-if="block.__typename == 'FrontPageFrontPageBlocksExternalArticle'" class="max-w-sm rounded overflow-hidden shadow-lg h-full">
              <img class="w-full" :src="block.external_article.referenceConnection.edges[0].node.hero_imageConnection.edges[0].node.url" alt="">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{ block.external_article.referenceConnection.edges[0].node.title }}</div>
                <div class="text-gray-700 text-base">
                  <div v-html="convertJson(block.external_article.referenceConnection.edges[0].node.excerpt.json)"></div>
                </div>
              </div>
          </div>
          <div v-if="block.__typename == 'FrontPageFrontPageBlocksPullQuote'" class="max-w-sm rounded overflow-hidden shadow-lg flex h-full bg-blue-100">
              <div class="px-6 py-6 m-auto">
                <div class="h-full align-middle">
                  <p class="text-gray-700 font-bold text-base">
                    "{{ block.pull_quote.quote_text }}"
                  </p>
                  <p class="italic">– {{ block.pull_quote.byline}}</p>
                </div>
              </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
// import Vue, { ComponentOptions } from "vue";
import gql from 'graphql-tag'
import { jsonToHtml } from "@contentstack/json-rte-serializer"
import { FRONT_PAGE_QUERY } from "./query"

export default {
  apollo: {
    $loadingKey: 'loading',
    front_page: FRONT_PAGE_QUERY
  },
  methods: {
    convertJson(jsonStr: Object) {
      const htmlValue = jsonToHtml( jsonStr )
      return htmlValue
    }
  }
}

// export default Vue.extend({

</script>
