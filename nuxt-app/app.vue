<template>
  <div>
    <h1>
      {{ global[0].title }}
    </h1>
    <img :src="$mediumImgURL(global[0].previewImage?.asset._ref)" />
      
 
  </div>
</template>

<script setup>

import { globalSettingsQuery, projectQuery } from '@/lib/api.js'




const { data:global } = await useSanityQuery(globalSettingsQuery);
const { data:projects } = await useSanityQuery(projectQuery);

</script>