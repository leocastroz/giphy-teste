<template>
  <main>
    <div class="box">
      <h1>WELCOME </h1>
      <img src="../assets/confetti.gif" alt="">
      <h1>TO GIPHY</h1>
    </div>
    <div class="text">
      <p>
        Giphy is an animated GIF and short video sharing platform. 
        With an extensive library of visual content, users can search, 
        discover and share fun animations across multiple categories. 
        Giphy also provides tools and APIs to integrate your content into 
        third-party apps and websites.
      </p>
    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px;
}
.box {
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  color: #fff;
  display: flex;
}
.box img {
  max-width: 60px;
  margin: 0 10px;
}
.box h1 {
  background: linear-gradient(270deg,#FF0080 0%,#9433f5 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: bold;
  font-size: 20px;
}
.text {
  text-align: center;
  margin: 10px auto;
  max-width: 400px;
  color: #9a9a9a;
}
</style>
