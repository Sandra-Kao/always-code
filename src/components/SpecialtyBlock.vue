<template>
  <section class="specialty-block">
    <div class="container">
      <h2>Hi, I'm Sandra. Nice to meet you.</h2>
      <p class="specialty-block__introduction">
        I'm good at designing great interactive system structures and good user
        experience websites. I don't mind to do it over and over again. Let's
        the reason I AM CRAZY about Front-end Programing.
      </p>
    </div>
    <article class="specialty-wrapper row-maxwidth-1200">
      <div
        class="specialty-wrapper__card"
        v-for="card in specialtyCards"
        :key="card.bigHeading"
      >
        <i :class="card.icon"></i>
        <h2>{{ card.bigHeading }}</h2>
        <p class="specialty-wrapper__card-paragraph">{{ card.paragraph }}</p>
        <div class="specialty-wrapper__card-body">
          <h3>{{ card.headingSkill }}</h3>
          <p class="specialty-wrapper__card-paragraph">
            <span
              class="specialty-wrapper-skills"
              v-for="skill in card.skills"
              :key="skill"
              >{{ skill }}</span
            >
          </p>
        </div>
        <div class="specialty-wrapper__card-body">
          <h3>{{ card.headingTool }}</h3>
          <p v-for="tool in card.tools" :key="tool">{{ tool }}</p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "SpecialtyBlock",
  data() {
    return {
      specialtyCards: [
        {
          icon: "fas fa-splotch",
          bigHeading: "Designer",
          paragraph:
            "Scratch from nature to live. In the end, you will enjoyed my work.",
          headingSkill: "Makeing Beautiful Things With:",
          skills: ["UX", "UI", "Web", "HTML", "CSS", "SASS", "Mobile App"],
          headingTool: "Dev Tools:",
          tools: [
            "Figma",
            "Zeplin",
            "Visual Studio Code",
            "Cacoo",
            "Font Awesome",
            "FileZilla",
            "Hostinger International",
          ],
        },
        {
          icon: "fas fa-code",
          bigHeading: "Front-end Developer",
          paragraph: "Punch the keyboard makes time flies and kill the pian.",
          headingSkill: "Languages I Code:",
          skills: ["JavaScript", "Vue.js", "DevOps", "Azure CI/CD"],
          headingTool: "Dev Tools:",
          tools: [
            "Visual Studio",
            "Visual Studio Code",
            "Microsoft Azure",
            "TFS",
            "GitFlow",
            "GitHub",
            "Codepen",
          ],
        },
        {
          icon: "fas fa-couch",
          bigHeading: "Free time Sandra",
          paragraph: "I enjoy bringing ideas from lige into the website.",
          headingSkill: "Just be me. Keep learning:",
          skills: ["Riding bike", "Board games"],
          headingTool: "Dev Tools:",
          tools: ["Medium", "Udemy", "Books", "Movies"],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.specialty-block {
  padding-bottom: 50px;

  border-bottom: 2px solid var(--color-primary-base-15);
}
.specialty-block h2{
  line-height: 1.3;
}
.container {
  background: var(--color-primary-light);
  padding-bottom: 25%;
}
.specialty-block__introduction {
  padding: 25px 20%;
  text-align: center;
  font-size: 22px;
  line-height: 1.5;
}
.specialty-wrapper {
  display: flex;
  padding: 0 25px;
  margin-top: -25%;
  border-radius: 30px;
}
.specialty-wrapper__card {
  width: calc(100% / 3);
  padding: 50px 25px;
  border: 1px solid var(--color-gray-lightest);
  border-radius: 30px;
  box-shadow: 1px 10px 10px var(--color-gray-lightest);
  background: var(--color-white);
  margin-bottom: 50px;
}
.specialty-wrapper__card:not(:last-child) {
  margin-right: 25px;
}
.specialty-wrapper__card-paragraph {
  padding: 8px 25px;
  line-height: 1.5;
}
.specialty-wrapper__card-body {
  padding: 8px 25px;
  margin-bottom: 10px;
}
i[class*="fa"],
svg[class*="fa-"] {
  margin-bottom: 32px;
  font-size: 66px;
}
.specialty-wrapper .specialty-wrapper__card:nth-child(2) svg[class*="fa-"] {
  color: var(--color-primary-base);
}

.specialty-wrapper-skills:not(:last-child):after {
  content: ", ";
}

@media screen and (max-width: 768px) {
  p,
  h3 ,span{
    font-size: 19px;
  }
  .specialty-wrapper {
    flex-wrap: wrap;
    justify-content: center;
  }
  .specialty-wrapper__card {
    width: 70%;
  }
  .specialty-wrapper__card:not(:last-child) {
    margin-right: 0px;
  }
}
@media screen and (max-width: 500px) {
  h2{
    line-height: 1.3;
  }
  .specialty-block__introduction {
    padding: 25px 0;
  }
  .specialty-wrapper {
    padding: 0;
  }
  .specialty-wrapper__card {
    width: 90%;
    padding: 50px 0px;
  }
}
</style>
