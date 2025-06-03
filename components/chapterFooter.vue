<template>
    <footer class="footer">
      <img class="logo" src="/images/logo-footer.svg" alt="Breaking Barriers Building Bridges" />
      <p class="footer__tagline">A Southern-led research network to advance gender equality in STEM</p>
      <chapterList /> 
      <p class="footer__text">The projects have worked to identify context-specific barriers and pilot both known and innovative interventions. These have included pedagogical practices, policies, institutionalized data gathering, and gender-responsive methodologies applied in some higher education institutions and STEM fields. Project leaders have seen success, with initiatives such as co-developing sexual harassment and gender equity policies alongside national ministries and replicating efforts across local institutions. For instance, in Zimbabwe, a project team is assisting the Ministry of Higher Education and Science and Technology in setting an agenda and developing policies on sexual harassment and addressing broader gender equity issues. However, there is a need to explore how these interventions can be scaled up by involving policymakers and other key STI ecosystem stakeholders from the start.</p>
    </footer>
  </template>
  
  <script setup>
  
  </script>
  
  <style lang="scss" scoped>

.footer {
  display: grid;
  gap: var(--space-l-xl);
}

@media screen and (min-width: 800px) {
  .footer { grid-template-columns: 1fr 1fr; }
}


.logo {
  margin-inline: auto;
  @media screen and (min-width: 800px) { margin-inline: auto 0; }
}

.footer {
  background-color: var(--primary-color);
  padding: var(--space-l-xl) var(--space-s-m);
  color: var(--secondary-color);
}

.footer__tagline {
  font-family: var(--font-decorative);
  font-size: var(--size-1);
  text-wrap: balance;
}
</style>