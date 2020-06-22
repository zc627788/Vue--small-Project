<template>
  <div class="flex1">
    <div class="list1">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg"
        alt
      />
      <h1>小米node5 16G</h1>
      <div class="bg">
        <div class="filex2">
          <p>$899</p>
          <p>$999</p>
        </div>
        <div class="filex3">
          <p>热卖中</p>
          <p>剩余60件</p>
        </div>
      </div>
    </div>
    <div class="list1">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg"
        alt
      />
      <h1>小米node5 16G</h1>
      <div class="bg">
        <div class="filex2">
          <p>$899</p>
          <p>$999</p>
        </div>
        <div class="filex3">
          <p>热卖中</p>
          <p>剩余60件</p>
        </div>
      </div>
    </div>
    <div class="list1">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg"
        alt
      />
      <h1>小米node5 16G</h1>
      <div class="bg">
        <div class="filex2">
          <p>$899</p>
          <p>$ 999</p>
        </div>
        <div class="filex3">
          <p>热卖中</p>
          <p>剩余60件</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="" scope>
.flex1 {
  display: flex;
  flex-wrap: wrap;
}
.list1 {
  width: 47%;
  border: 1px solid #ccc;
  margin: 4px;
  text-align: center;
  box-shadow: 0px 0px 2px rgba(1, 10, 27, 0.8);
  display: flex;
  flex-flow: column;
  min-height: 120px;
}
.list1 img {
  width: 120px;
  height: 120px;
}
.list1 h1 {
  font-size: 15px;
}
.filex2 {
  display: flex;
}
.filex2 p {
  margin: 5px;
}
.filex2 p:nth-of-type(1) {
  font-size: 14px;
  color: red;
}
.filex2 p:nth-of-type(2) {
  font-size: 10px;
  text-decoration: line-through;
}
.filex3 {
  display: flex;
  justify-content: space-between;
}
.filex3 p {
  font-size: 10px;
  margin: 10px 5px 0 5px;
}
.bg {
  background-color: rgb(214, 211, 211);
}
</style>