<template>
  <section class="my-work row-maxwidth-1200">
    <h2>My Work</h2>
    <div
      class="my-work__blobk"
      v-for="type in workProjects"
      :key="type.project"
    >
      <p>{{ type.project }}</p>
      <article class="my-work__wrapper">
        <a
          class="my-work__link"
          :href="work.link"
          v-for="work in type.works"
          :key="work.name"
        >
          <img :src="getImgUrl(work.imgFileName)" :alt="work.imgFileName" />
          <h3>{{ work.name }}</h3>
          <p>{{ work.description }}</p>
        </a>
        <div class="my-work__card"></div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyWorkBlock",
  methods: {
    getImgUrl(pet) {
      const images = require.context("./assets/", false, /\.png$/);
      return images("./" + pet + ".png");
    },
    getFilePath(fileName) {
      return "./assets/" + fileName;
    },
  },
  data() {
    return {
      publickPath: process.env.BASE_URL,
      workProjects: [
        {
          project: "Side projects on my own",
          works: [
            {
              name: "My Coding Blog",
              link: "https://alwayscode.live/views/Index.html",
              imgFileName: "640-website-blog-post-vuejs",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
            {
              name: "About Me",
              link: "/",
              imgFileName: "640-who-am-i",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
            {
              name: "Monster Slayer",
              link: "https://codepen.io/K-SY/full/QWGzGeY",
              imgFileName: "640-codepen-monster-slayer-vuejs",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
          ],
        },
        {
          project: "Work With Company",
          works: [
            {
              name: "IoT Academy",
              link: "https://academy.advantech.com/en-us/courses",
              imgFileName: "640-website-academy",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
            {
              name: "Advantech CSR Portal",
              link: "https://csr.advantech.com/en-us",
              imgFileName: "640-website-corporate-social-responsibility-en",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
            {
              name: "Advantech Marketplace",
              link: "https://wise-paas.advantech.com/en-us/marketplace/product/advantech.webaccess-cnc",
              imgFileName: "640-website-marketplace-productpage",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
          ],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  padding: 50px;
}
.my-work__blobk {
  padding: 25px;
  margin-top: 25px;
}

.my-work__blobk p:first-child {
  padding: 25px 20%;
  text-align: center;
  font-size: 22px;
  line-height: 1.5;
}
.my-work h3 {
  margin-bottom: 25px;
}

/* .my-work__card {
} */
.my-work__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.my-work__link {
  width: calc((100% - (25px * 6)) / 3);
  padding: 25px;
  /* margin-right: 25px; */
  display: block;
  text-decoration: none;
  color: var(--color-block);
  border-radius: 10px;
}
.my-work__link:hover {
  background: var(--color-gray-lightest);
}
.my-work__link img {
  border-radius: 10px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 50%);
}
</style>
