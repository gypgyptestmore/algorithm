<template>
  <div>
    <input type="checkbox" v-model="allSelected" @change="toggleAll" name="" id="">
    <label>全选</label>
    <app v-for="(city,index) in cities" :key="index" :city="city" v-model="selectedCities" @change="updateAllSelected"></app>
  </div>
</template>

<script>
import app from './app.vue'
export default {
    components:{
        app
    },
    data(){
        return{
            cities:['上海','北京','广州','深圳'],
            selectedCities:[],
            allSelected:false
        }
    },
    methods:{
        toggleAll(event){
            if(event.target.checked){
                this.selectedCities=[...this.cities]
            }else{
                this.selectedCities=[]
            }
        },
        updateAllSelected(){
            this.allSelected = this.selectedCities.length===this.cities.length
        }
    }
}
</script>

<style>

</style>