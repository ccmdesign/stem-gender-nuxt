<template>
  <client-only>
    <footer class="footer-section">
      <div class="repel">
        <div class="menu-1 | cluster">
          <a href="https://idrc-crdi.ca/en/about-idrc/careers"
            target="_blank">{{ $t('footer.careers') }}</a>
          <a href="https://idrc-crdi.ca/en/contact-us"
            target="_blank">{{ $t('footer.contact') }}</a>
          <a href="https://idl-bnc-idrc.dspacedirect.org/home"
            target="_blank">{{ $t('footer.digitalLibrary') }}</a>
          <a href="https://idrc-crdi.ca/en/news-and-events/media"
            target="_blank"
            aria-label="Media">{{ $t('footer.media') }}</a>
        </div>
        <div class="social-media | cluster">
          <a target="_blank"
            href="https://x.com/Idrc_crdi"
            aria-label="X (formerly Twitter)"><social-media platform="x" /></a>
          <a target="_blank"
            href="https://www.facebook.com/IDRC.CRDI"
            aria-label="Facebook"><social-media platform="facebook" /></a>
          <a target="_blank"
            href="https://www.linkedin.com/company/idrc/"
            aria-label="LinkedIn"><social-media platform="linkedin" /></a>
          <a target="_blank"
            href="https://www.youtube.com/user/IDRCCRDI"
            aria-label="YouTube"><social-media platform="youtube" /></a>
          <a target="_blank"
            href="https://idrc-crdi.ca/en/rss-feeds"
            aria-label="RSS Feed"><social-media platform="rss" /></a>
        </div>
      </div>
      <div class="repel">
        <div class="menu-3 | cluster">
          <a target="_blank"
            href="https://idrc-crdi.ca/en/accessibility"
            aria-label="Accessibility">{{ $t('footer.accessibility') }}</a>
          <a target="_blank"
            href="https://idrc-crdi.ca/en/about-idrc/equality-statement"
            aria-label="Equity Standard">{{ $t('footer.equityStandard') }}</a>
          <a target="_blank"
            href="https://idrc-crdi.ca/en/open-access-policy-idrc-funded-project-outputs"
            aria-label="Open Access Policy">{{ $t('footer.openAccessPolicy') }}</a>
          <a target="_blank"
            href="https://idrc-crdi.ca/en/privacy-notice"
            aria-label="Privacy Notice">{{ $t('footer.privacyNotice') }}</a>
          <a target="_blank"
            href="https://idrc-crdi.ca/en/idrcs-advisory-committee-research-ethics"
            aria-label="Research Ethics">{{ $t('footer.researchEthics') }}</a>
          <a target="_blank"
            href="https://idrc-crdi.ca/en/terms-use"
            aria-label="Terms of Use">{{ $t('footer.termsOfUse') }}</a>
          <a target="_blank"
            href="https://idrc-crdi.ca/en/about-idrc/transparency"
            aria-label="Transparency">{{ $t('footer.transparency') }}</a>
        </div>
        <p class="copyright">{{ copyrightText }}</p>
      </div>
    </footer>
  </client-only>
</template>

<script setup>
const { t } = useI18n()
const currentYear = computed(() => new Date().getFullYear())
const copyrightText = computed(() => {
  return t('footer.copyright').replace('currentYear', currentYear.value)
})
</script>

<style lang="scss" scoped>
.footer-section {
  padding: var(--space-m-l);
  background-color: var(--black-color);
  display: flex;
  flex-direction: column;
  gap: var(--space-xl-2xl);
  background-image: url('@/assets/idrc-logo.svg');
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 600px;

  @media screen and (max-width: 768px) {
    background-size: 90%;
  }
}

.repel {
  width: stretch;
}

.cluster {
  --_cluster-space: var(--space-xs);
}

.social-media {
  @media screen and (max-width: 768px) {
    margin-bottom: var(--space-l-xl);
  }
}

.footer-section a,
.footer-section p {
  font-size: var(--size--2);
  color: var(--white-color);
  font-weight: 200;
  color: var(--white-color-70-alpha);
}


.repel {
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.menu-1,
.menu-3 {
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.copyright {
  @media screen and (min-width: 768px) {
    text-align: right;
    order: -1;
  }
}
</style>