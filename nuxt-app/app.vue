<template>
  <div>
    <h1>
      {{ global[0].title }}
    </h1>
    <img :src="$mediumImgURL(global[0].previewImage?.asset._ref)" class='test-border'/>
      <div class="grid grid-cols-3">
           <div v-for="project in projects" class="card">
          <h2>
            {{ project.title }}
          </h2>
          <img :src="$smallImgURL(project.mainImage)"/>
          <div v-html="$portableTextToHTML(project.description)"> </div> 
          </div>
      </div>
 <Header/>
  </div>
</template>

<script setup>

import { globalSettingsQuery, projectQuery } from '@/lib/api.js'




const { data:global } = await useSanityQuery(globalSettingsQuery);
const { data:projects } = await useSanityQuery(projectQuery);

</script>

<style scoped> 
h1{font-weight: 800;}

</style>