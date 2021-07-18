<template>
  <section class="my-work">
    <h2>My work</h2>
    <div class="my-work__blobk">
      <h3></h3>
      <div class="my-work__wrapper">
        <div class="my-work__card">
          <a href=""> </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: "MyWorkBlock",
data(){
  return{
    workProjects:[
      {
        project:'Side projects',
        works:[
          {
            url:'https://alwayscode.live/views/Index.html',
            imgSrc:'',
            imgAlt:'',
            responsible:'I was responsible for',
            description:'I was responsible for. I introduced and implemented training programs to the company.'
          },
          {
            url:'https://todoitemsapiappservice.azurewebsites.net/api/TodoItems/{id}',
            imgSrc:'',
            imgAlt:'',
            responsible:'I was responsible for',
            description:'I was responsible for. I introduced and implemented training programs to the company.'
          }
        ]
      }
      ]
    
  }
} };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
