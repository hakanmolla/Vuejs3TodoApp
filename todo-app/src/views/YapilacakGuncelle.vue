<template><div>
  <h1> Yapilacak Güncelle {{ id }}</h1>
  <form @submit.prevent="handleSubmit">

    <label >Başlık :</label>
    <input v-model="baslik" type="text"  />
    <label >İçerik :</label>
    <input v-model="icerik" type="text"  />
    <button > Güncelle </button>

  </form>

</div>
</template>

<script>
export default {
    props:['id'],
    data(){
        return {
            baslik:'',
            icerik:'',
            uri:' http://localhost:3000/yapilacaklar/'+this.id
            
        }
    },
    mounted(){
        fetch(this.uri)
            .then((res)=>res.json())
            .then(data=>{
                this.baslik=data.baslik;
                this.icerik=data.icerik
            })
    

    },
    methods:{
        handleSubmit(){
            fetch(this.uri,{
                method:'PATCH',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({baslik:this.baslik,icerik:this.icerik})
            }).then(()=>{
                this.$router.push('/')
            }).catch((err)=>console.log(err))
        }
    }
}
</script>

<style>

</style>