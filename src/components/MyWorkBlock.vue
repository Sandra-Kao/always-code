<template>
  <section class="my-work row-maxwidth-1200">
    <h2>My Work</h2>
    <a href="mailto:shuyukao0@gmail.com" class="see-more"
      >Want to see more? <i class="far fa-paper-plane"></i
    ></a>
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
          target="_blank"
          v-for="work in type.works"
          :key="work.name"
        >
          <img :src="getImgUrl(work.imgFileName)" :alt="work.imgFileName" />
          <header class="my-work__card-header">
            <h3>{{ work.name }}</h3>
            <div>
              <i v-for="icon in work.iconSet" :key="icon" :class="icon"></i>
            </div>
          </header>
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
          project: "Side Projects On My Own",
          works: [
            {
              name: "My Coding Blog",
              iconSet: ["fab fa-vuejs", "fab fa-codepen"],
              link: "https://alwayscode.live/views/Index.html",
              imgFileName: "640-website-blog-post-vuejs",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I introduced and implemented training programs to the company.",
            },
            {
              name: "About Me",
              iconSet: ["fab fa-vuejs", "fab fa-codepen"],
              link: "/",
              imgFileName: "640-who-am-i",
              imgAlt: "",
              responsible: "I was responsible for",
              description: "and implemented training programs to the company.",
            },
            {
              name: "Monster Slayer",
              iconSet: ["fab fa-vuejs", "fab fa-codepen"],
              link: "https://codepen.io/K-SY/full/QWGzGeY",
              imgFileName: "640-codepen-monster-slayer-vuejs",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I introduced and implemented training programs implemented training programs to the company.",
            },
          ],
        },
        {
          project: "Work With Company",
          works: [
            {
              name: "IoT Academy",
              iconSet: ["fab fa-vuejs", "fab fa-codepen"],
              link: "https://academy.advantech.com/en-us/courses",
              imgFileName: "640-website-academy",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
            {
              name: "Advantech CSR Portal",
              iconSet: ["fab fa-vuejs", "fab fa-codepen"],
              link: "https://csr.advantech.com/en-us",
              imgFileName: "640-website-corporate-social-responsibility-en",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
            {
              name: "Advantech Marketplace",
              iconSet: ["fab fa-vuejs", "fab fa-codepen"],
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
  margin-top: 50px;
  padding: 50px;
}
.see-more {
  text-decoration: none;
  color: var(--color-primary-darker);
  float: right;
  padding: 0 100px;
}
.see-more:hover {
  text-decoration: underline;
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
  /* margin-bottom: 25px; */
}

/* .my-work__card {
} */
.my-work__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

.my-work__link .my-work__card-header {
  padding: 0px 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
i,
svg:not(:last-child) {
  margin-right: 2px;
}
.my-work__link .my-work__card-header .fa-vuejs {
  color: #00a876;
}
.my-work__link .my-work__card-header .fa-codepen {
  color: var(--color-gray-darker);
}

.my-work__link p {
  padding: 0 25px;
}
@media screen and (max-width: 1024px) {
  .my-work__link {
    width: calc((100% - (25px * 6)) / 2);
  }
}
@media screen and (max-width: 768px) {
  .my-work__wrapper {
    justify-content: center;
  }
  .my-work__link {
    width: 80%;
  }
}
</style>
