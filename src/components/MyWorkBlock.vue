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
        <a :href="type.seeMoreLink" class="see-more">
          See more in {{ type.seeMoreName }} <i class="far fa-paper-plane" />
        </a>
        <div class="my-work__group">
          <a class="my-work__link" :href="work.link" target="_blank"
            v-for="work in type.works" :key="work.name">
            <img :src="getImgUrl(work.imgFileName)" :alt="work.imgFileName" />
            <header class="my-work__card-header">
              <h3>{{ work.name }}</h3>
              <div class="my-work__card-iconset">
                <i v-for="icon in work.iconSet" :key="icon" :class="icon"></i>
              </div>
            </header>
            <p>{{ work.description }}</p>
          </a>
        </div>
        <!-- <div class="my-work__card"></div> -->
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
          seeMoreName: "GitHub",
          seeMoreLink: "https://github.com/Sandra-Kao",
          works: [
            {
              name: "About Me",
              iconSet: [
                "fab fa-vuejs",
                "fab fa-node-js",
                "fab fa-npm",
                "fab fa-github",
                "fab fa-figma",
              ],
              link: "/always-code/",
              imgFileName: "640-who-am-i",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "A NPM + Vue.js single-page application (SPA). Programing with great RWD, amazing UX /UI and auto verification GitHub page deployment.",
            },
            {
              name: "Monster Slayer",
              iconSet: ["fab fa-vuejs", "fab fa-codepen", "fab fa-html5"],
              link: "https://codepen.io/K-SY/full/QWGzGeY",
              imgFileName: "640-codepen-monster-slayer-vuejs",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "Build this game to have fun and show schoolmate how a front-end program works after I graduated from my mother school. It was a great honor for me to invited and make a presentation at lecture hall.",
            },
            {
              name: "My Coding Blog",
              iconSet: ["fab fa-vuejs", "fab fa-css3-alt", "fas fa-heart"],
              link: "https://alwayscode.live/views/posts/VueJs/StyleGuide-Essential.html",
              imgFileName: "640-website-blog-post-vuejs",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "A fun front-end develop blog, hosted on my domain and build for sharing and notes the interesting founds during coding time.",
            },
          ],
        },
        {
          project: "Work With Company",
          seeMoreName: "Codepen",
          seeMoreLink: "https://codepen.io/K-SY",
          works: [
            {
              name: "IoT Academy",
              iconSet: [
                "fab fa-vuejs",
                "fab fa-figma",
                "fab fa-codepen",
                "fas fa-vial",
              ],
              link: "https://academy.advantech.com/en-us/courses",
              imgFileName: "640-website-academy",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I own and develop Academy, a brand new front-end develop project with my team members, and I implement End-2-End test for Academy.",
            },
            {
              name: "Advantech CSR Portal",
              iconSet: [
                "fab fa-vuejs",
                "fab fa-git-alt",
                "fas fa-rocket",
                "fas fa-chart-line",
              ],
              link: "https://csr.advantech.com/en-us",
              imgFileName: "640-website-corporate-social-responsibility-en",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "It's a height-attention-driven project. I build CSR with .Net Core and Vanilla JavaScript in a short-limited time, and auto deployed on Web App in Azure CI/CD to enhance system stability.",
            },
            {
              name: "Marketplace",
              iconSet: [
                "fab fa-vuejs",
                "fab fa-js-square",
                "fab fa-git-alt",
                "fas fa-rocket",
                "fas fa-vial",
              ],
              link: "https://wise-paas.advantech.com/en-us/marketplace/product/advantech.webaccess-cnc",
              imgFileName: "640-website-marketplace-productpage",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "This is a ASP.Net MVC Project. I was responsible for front-end data binding, page SEO, user experience and Azure CI/CD.",
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
h2 {
  margin-bottom: 25px;
}
.see-more {
  text-decoration: none;
  color: var(--color-primary-darker);
  /* float: right; */
  padding: 0 25px;
  text-align: right;
  display: block;
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
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
}
.my-work__group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.my-work__link {
  width: calc((100% - (25px * 6) - (25px * 2)) / 3);
  padding: 25px;
  /* margin-right: 25px; */
  display: block;
  text-decoration: none;
  color: var(--color-block);
  border-radius: 10px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 50%);
}
.my-work__link:not(:last-child) {
  margin-right: 25px;
}
.my-work__link:hover {
  background: var(--color-gray-lightest);
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 0%), 0px 1px 1px 0px rgb(0 0 0 / 0%),
    0px 1px 3px 0px rgb(0 0 0 / 0%);
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

.my-work__link .my-work__card-iconset {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
i,
svg {
  font-size: 20px;
}
i,
svg:not(:last-child) {
  margin-right: 5px;
}
.my-work__link .my-work__card-header .fa-vuejs {
  color: #00a876;
}
.my-work__link .my-work__card-header .fa-codepen {
  color: var(--color-gray-darker);
}
.my-work__link .my-work__card-header .fa-css3-alt {
  color: #2862e9;
}
.my-work__link .my-work__card-header .fa-heart {
  color: #ea466c;
}
.my-work__link .my-work__card-header .fa-node-js {
  color: #84bb43;
}
.my-work__link .my-work__card-header .fa-npm {
  color: #c73536;
}
.my-work__link .my-work__card-header .fa-github {
  color: #1f89ff;
}
.my-work__link .my-work__card-header .fa-figma {
  color: #ea4b1c;
}
.my-work__link .my-work__card-header .fa-html5 {
  color: #dd4b25;
}

.my-work__link .my-work__card-header .fa-vial {
  color: #6628ad;
}
.my-work__link .my-work__card-header .fa-git-alt {
  color: #e83a2d;
}
.my-work__link .my-work__card-header .fa-rocket {
  color: #235dc1;
}
.my-work__link .my-work__card-header .fa-chart-line {
  color: var(--color-gray-darker);
}
.my-work__link .my-work__card-header .fa-js-square {
  color: #f0d53b;
}

.my-work__link p {
  padding: 0 25px;
}
@media screen and (max-width: 1024px) {
  .my-work__link {
    width: calc((100% - (25px * 6) - (25px * 2)) / 2);
    margin-bottom: 25px;
  }
}
@media screen and (max-width: 768px) {
  .my-work__group {
    justify-content: center;
  }
  .my-work__link {
    width: 80%;
  }
  .my-work__link:not(:last-child) {
    margin-right: 0px;
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 500px) {
  section {
    padding: 0px;
  }
  .my-work__blobk p:first-child {
    padding: 25px 5%;
  }
  .my-work__link {
    width: 95%;
  }
}
</style>
