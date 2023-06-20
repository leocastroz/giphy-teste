<template>
  <section>
    <div>
      <img src="../../public/giphy.png" alt="">
    </div>
    <div>
      <img class="github" src="../assets/github.svg" alt="">
    </div>
  </section>
</template>

<style scoped>
section {
  background: linear-gradient(270deg, #FF0080 0%, #7928CA 100%);
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  display: flex;
}

section div {
  font-weight: 700;
  padding: 0 30px;
  color: #fff;
}

section div>img {
  width: 100px;
}

section div>.github {
  width: 25px;
}
</style>
