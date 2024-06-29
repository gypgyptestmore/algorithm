<template>
  <div>
    <input
      type="checkbox"
      :value="city"
      v-model="isChecked"
      @change="handleChange"
    />
    <label>
      {{city}}
    </label>
  </div>
</template>

<script>
import { handle } from "express/lib/application";

export default {
    props:['city','value'],
    computed:{
        isChecked(){
            return this.value.includes(this.city);
        }
    },
    methods:{
        handleChange(event){
            if(event.target.checked){
                this.$emit('change',this.city)
            }else{
                this.$emit('change',null)
            }
        }
    }
};
</script>

<style></style>
