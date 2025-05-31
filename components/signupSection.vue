<template>
  <!-- @ToDo: Translate the whole section -->
  <div data-layout="50-50" regular-order>
    <div>
      <div class="signup-group">
        <div class="signup-items">
          <div>
            <img class="idrc-logo" src="assets/idrc-logo.png" alt="IDRC Logo" />
          </div>
          <signup-form />
        </div>
      </div>
    </div>
    
  </div>
  
</template>

<script setup>
const { locale } = useI18n();


</script>

<style lang="scss" scoped>

.signup-group {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: var(--s-1);
  padding: 40px;
}

.signup-items {
  width: 100%;
  justify-content: space-between;
  color: var(--white-color);
  display: flex;
  align-items: center;

  @media screen and (max-width: 32em) {
    flex-direction: column;
    align-items: normal;
  }
}

.idrc-logo {
  width: 200px;
  height: auto;
}

</style>
