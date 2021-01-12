<template>
<!-- Arreglar reactividad ya que no sale directamente en carga -->
  <div class="input mb-3 ml-3 mr-3" v-bind="items">
    <form>
      <div  v-html="HTMLcontent ? HTMLcontent : 'Cargando'"></div>
    </form>
  </div>
       <input type="button" value="Consultar" class="btn btn-primary" @click="consultar()">
</template>

<script>
import DataInput from "@/components/models/formCreate.ts";

export default {
  name: "formCreate",
  data() {
    return {
      HTMLcontent:'',
      // dataProp: this.dataInput
    };
  },
  props: {
    items: [DataInput]
  },
  model: {},
  methods: {
    consultar() {
      console.log("Esto es el dataInput", this.items);
      this.items.forEach(e => { if(e !=undefined){this.comprobarType(e)}});
      /* if( this.items[0] === undefined)
      {
       
        // this.comprobarType(this.dataInput.gettype);
        console.log("Mod", this.dataInput.setidform("pepito"));
        console.log("Esto es el dataInput", this.dataInput.getidform()); 
      } else {
         
        
      } */

        
    },
    comprobarType(item) {
      console.log(typeof item);
      switch (item.type) {
        case 'mail':
          this.HTMLcontent = this.HTMLcontent + `
                      <!--Tipo correo -->
                      <label :for="${item.idform}" class="form-label">
                        ${item.header}
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        :id="${item.idform}"
                        :placeholder="${item.body}"
                      />`
                  ;
          break;
        default:
          console.log('No se ha introducido un tipo correcto');
      }
    }
  },
  mounted() {
    this.consultar()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
