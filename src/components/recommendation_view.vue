<script setup>

</script>

<template>
  <div class="container">
    <h1>Welcome To Alkonost!</h1>
    <p><em>Here are your recommendations. Go to preferences in the upper corner to make them more accurate.</em></p>

    <div class="recRow">
      <RecommendationCard
        v-for="rec in recs"
        :key="rec.title"
        :title="rec.title"
        :artist="rec.artist"
        @feedback="handleFeedback"
      />
    </div>
  </div>
</template>