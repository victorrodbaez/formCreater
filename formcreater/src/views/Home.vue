<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <formCreate :items="datos"/>
    <!-- <HelloWorld  /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/* import HelloWorld from '@/components/HelloWorld.vue'; */
import formCreate from '@/components/formCreate.vue';
import DataInput from "@/components/models/formCreate.ts";

export default defineComponent({
  name: 'App',
  components: {
    /* HelloWorld, */
    formCreate
  },
  props: {
    items:Object
  },
    data() {
        return {
            datos:[this.items] 
        }
    },
  model: {},
  methods: {
    createInput() {
      this.datos.shift();
      for(let i =0; i < 5; ++i){
        let dato = new DataInput('consola',`${i}Ejemplo`,'consola','mail');
        this.datos.push(dato);
      }
      
      console.log("soy un dato",this.datos);
      //this.dataInput = Vue.compile.prototype.$dataInput('consola','consola','consola','consola');
    }
  },
  mounted() {
    this.createInput();
  }
});
</script>
