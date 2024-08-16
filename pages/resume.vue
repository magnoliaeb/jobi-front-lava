<template>
  <div class="py-10">
    <ResumeFileUploader />
    <ResumeOverview />
    <EducationHistoryForm />
    <SkillsExperienceForm />
    <PortfolioGalleryManager />
  </div>
</template>

<script setup>
import EducationHistoryForm from "~/components/EducationHistoryForm.vue";
import PortfolioGalleryManager from "~/components/PortfolioGalleryManager.vue";
import ResumeFileUploader from "~/components/ResumeFileUploader.vue";
import ResumeOverview from "~/components/ResumeOverview.vue";
import SkillsExperienceForm from "~/components/SkillsExperienceForm.vue";
</script>

<style lang="scss" scoped></style>
