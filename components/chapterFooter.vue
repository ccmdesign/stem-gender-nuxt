<template>
    <footer class="footer">
        <div class="footer__content">
            <div class="footer__column">
                <div class="logo">
                    <p class="logo__brow">Breaking barriers</p>
                    <p class="logo__title">building bridges</p>
                </div>
            </div>
            <div class="footer__column align-self-center">
                <p class="footer__tagline">A Southern-led research network to advance gender equality in STEM</p>
            </div>
            <div class="footer__column">
                <chapterList /> 
            </div>
            <div class="footer__column">
                <p class="footer__text">The projects have worked to identify context-specific barriers and pilot both known and innovative interventions. These have included pedagogical practices, policies, institutionalized data gathering, and gender-responsive methodologies applied in some higher education institutions and STEM fields. Project leaders have seen success, with initiatives such as co-developing sexual harassment and gender equity policies alongside national ministries and replicating efforts across local institutions. For instance, in Zimbabwe, a project team is assisting the Ministry of Higher Education and Science and Technology in setting an agenda and developing policies on sexual harassment and addressing broader gender equity issues. However, there is a need to explore how these interventions can be scaled up by involving policymakers and other key STI ecosystem stakeholders from the start. Recognizing the critical need for ongoing efforts across the educational spectrum, it is essential that initiatives for greater gender equity and inclusion (GEI) align with national science and technology priorities and the evolving needs of industry. The systemic barriers that exist highlight the importance of a coordinated, multi-faceted approach that integrates national and regional educational, science, and technology priorities, with clear commitments to advancing equitable development.</p>
            </div>
        </div>
    </footer>
  </template>
  
  <script setup>
  
  </script>
  
  <style lang="scss" scoped>
  .logo {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      gap: var(--space-3xs);
  }

      .logo__brow {
          font-family: var(--font-display);
          text-transform: uppercase;
          color: var(--secondary-color-30-alpha);
          letter-spacing: 0.2em;
          font-weight: 700;
          font-size: 0.625em;
          
      }

      .logo__title {
          font-family: var(--font-title);
          text-transform: uppercase;
          color: var(--secondary-color);
          font-weight: 300;
          font-size: 2.55em;
      }

.footer {
    background-color: var(--primary-color);
    padding-block: var(--space-xl);
}

    .footer__content {
        max-width: 1200px;
        margin-inline: auto;
        padding-inline: var(--space-m-l);
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-xl);
        color: var(--secondary-color);
        @media screen and (max-width: 800px) {
            grid-template-columns: 1fr;
        }
    }

    .footer__tagline {
        max-width: 240px;
        font-family: var(--font-decorative);
        font-size: 0.875em;
        @media screen and (max-width: 800px) {
            width: 100%;
            max-width: none;
            text-align: center;
        }
}

    .footer__text {
        font-size: 0.75em;
        font-weight: 200;
    }

    .align-self-center {
        align-self: center;
    }

  .chapter-hero {
    background-color: var(--primary-color);
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    @media screen and (max-width: 800px) {
        flex-direction: column-reverse;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 50vh;
            background: linear-gradient(0deg, var(--primary-color) 0%, var(--primary-color-30-alpha) 50%, transparent 100%);
        }
    }
  }

    .chapter-hero__info {
        padding: var(--space-xl);
        width: 50%;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-end;
        gap: var(--space-l);
        @media screen and (max-width: 800px) {
            width: 100%;
        }
    }

    .chapter-hero__header {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-end;
        gap: var(--space-m);
        @media screen and (max-width: 800px) {
            position: absolute;
            top: 50vh;
            transform: translateY(-100%);
        }
    }


    .chapter-hero__brow {
        font-family: var(--font-display);
        text-transform: uppercase;
        letter-spacing: 0.2em;
        font-weight: 700;
        color: var(--secondary-color);
        opacity: 0.3;
        width: 100%;
        @media screen and (max-width: 800px) {
            opacity: 1;
        }
    }

    .chapter-hero__title {
        font-family: var(--font-title);
        text-transform: uppercase;
        text-align: right;
        font-weight: 300;
        color: var(--tertiary-color);
        width: 100%;
        font-size: 9vw;
        padding-bottom: var(--space-m);
    }

    .chapter-hero__tagline {
        font-family: var(--font-decorative);
        text-align: right;
        font-weight: 300;
        color: var(--tertiary-color);
        width: 80%;
        font-size: 1.5em;
    }

    .chapter-hero__back {
        text-transform: uppercase;
        color: var(--secondary-color);
        text-decoration: none;
        font-size: 1.125em;
        font-weight: 500;
        @media screen and (max-width: 800px) {
            position: absolute;
            top: var(--space-l);
            left: var(--space-m);
        }
    }
    
    .chapter-hero__image {
        width: 50%;
        background-size: cover;
        background-position: center;
        @media screen and (max-width: 800px) {
            width: 100%;
            height: 50vh;
        }
    }
  </style>