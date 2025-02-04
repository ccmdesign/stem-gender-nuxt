<template>
  <div class="resource-card | map-grid__content | stack">
    <div class="repel">
      <h5 class="resource-card__country">Guatemala | Mexico</h5>
      <h5 class="resource-card__status">Completed</h5>
    </div>
    <h3 class="resource-card__title">Supporting indigenous women in science, technology, engineering and mathematics careers in Mexico and Central America</h3>
    <p class="resource-card__description">Over the last 15 years there have been a number of efforts by government, civil society, private sector, and international organizations to address challenges faced by indigenous people, and in some cases women in particular, in Mexico’s higher education system. This includes the creation of 12 intercultural universities in locations with a high concentration of indigenous people, and several scholarship programs that support students up to the PhD level. These programs, partly funded by Mexico’s Consejo Nacional de Ciencia y Tecnologia (CONACYT) (National council of science and technology), have considerably improved the participation of...</p>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.resource-card {
  padding: var(--space-m);
  border: 1px solid var(--base-color);
  background-color: var(--white-color);
}

.resource-card__country,
.resource-card__status {
  font-size: var(--size--2);
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: .4px;
  color: var(--base-color);
}

.resource-card__title {
  font-size: var(--size--1);
}

.resource-card__description {
  font-size: var(--size--2);
}

</style>