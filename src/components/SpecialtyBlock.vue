<template>
  <section class="specialty-block">
    <div class="container">
      <h2>Hi, I'm Sandra. Nice to meet you.</h2>
      <p class="specialty-block__introduction">Hi, I'm Sandra. Nice to meet you.Hi, I'm Sandra. Nice to meet you.Hi, I'm Sandra. Nice to meet you.Hi, I'm Sandra. Nice to meet you.Hi, I'm Sandra. Nice to meet you.</p>
    </div>
    <article class="specialty-wrapper row-maxwidth-1200">
        <div
          class="specialty-wrapper__card"
          v-for="card in specialtyCards"
          :key="card.bigHeading"
        >
          <img
            :src="card.icon"
            :alt="card.iconAlt"
            class="specialty-wrapper__img"
          />
          <h2>{{ card.bigHeading }}</h2>
          <p class="paragraph-h1">{{ card.paragraph }}</p>
          <h3>{{ card.headingSkill }}</h3>
          <p>
            <span
              class="specialty-wrapper-skills"
              v-for="skill in card.skills"
              :key="skill"
              >{{ skill }}</span
            >
          </p>
          <h3>{{ card.headingTool }}</h3>
          <p v-for="tool in card.tools" :key="tool">{{ tool }}</p>
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
          icon: "",
          iconAlt: "",
          bigHeading: "Design",
          paragraph: "Scratch to nature and finally you will enjoied my work.",
          headingSkill: "Makeing Beautiful things with:",
          skills: ["UX", "UI", "Web", "Mobile App"],
          headingTool: "Dev Tools:",
          tools: ["Figma", "Zeplin", "Visual Studio Code", "Cacoo"],
        },{
          icon: "",
          iconAlt: "",
          bigHeading: "Design",
          paragraph: "Scratch to nature and finally you will enjoied my work.",
          headingSkill: "Makeing Beautiful things with:",
          skills: ["UX", "UI", "Web", "Mobile App"],
          headingTool: "Dev Tools:",
          tools: ["Figma", "Zeplin", "Visual Studio Code", "Cacoo"],
        },{
          icon: "",
          iconAlt: "",
          bigHeading: "Design",
          paragraph: "Scratch to nature and finally you will enjoied my work.",
          headingSkill: "Makeing Beautiful things with:",
          skills: ["UX", "UI", "Web", "Mobile App"],
          headingTool: "Dev Tools:",
          tools: ["Figma", "Zeplin", "Visual Studio Code", "Cacoo"],
        }
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.specialty-block{
}
.container{
  background: var(--color-primary-light);
  padding-bottom: 25%;
}
.specialty-block__introduction{
  padding: 25px 15%;
  text-align: center;
}
.specialty-wrapper{
  display: flex;
  margin-top: -25%;
  border-radius:30px;
}
.specialty-wrapper__card{
  padding:50px 25px;
  border: 1px solid var(--color-gray-lightest);
  border-radius:30px;
  box-shadow: 1px 1px 3px var(--color-gray-lightest);
  background: var(--color-white);
  margin-bottom: 50px;
}
.specialty-wrapper__card:not(:last-child){
  margin-right: 25px;
}
.specialty-wrapper-skills:not(:last-child):after {
  content: ", ";
}
</style>
