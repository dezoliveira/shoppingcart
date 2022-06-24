<template>
  <div>
    <div 
    class= "position container col-4 text-center alert alert-success mt-4" 
    role="alert">
      {message}
    </div>
  </div>  
</template>

export default{
  name: "Message",
  props:{
    message: String
  }
}

<style scoped>
  .position{
    position: fixed;
    top: 0;
    left: 35%;
  }
</style>


