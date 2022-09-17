<template>

  <v-col md='6' class="m-3">
    <v-card
    color="#66CC00">

      <v-card-title>
        Add Products
      </v-card-title>
    
        <v-form autocomplete="off">
          <div class="ma-3">
           
           <v-text-field
              v-model="form.name"
              label="Name"
              id="name"
              name="name"
              v-validate="{required:true, min:3}"
              trim
            ></v-text-field>

            <div v-if="submitted" class="error-message">
               {{errors.first("name")}}
            </div>

            <v-text-field
              v-model="form.price"
              label="Price($)"
              id="price"
              name="price"
              v-validate="{required:true, numeric:3}"
              trim
            ></v-text-field>

            <div v-if="submitted" class="error-message">
               {{errors.first("price")}}
            </div>

            <v-text-field
              v-model="form.brand"
              label="Brand"
              id="brand"
              name="brand"
              v-validate="{required:true}"
              trim
            ></v-text-field>

            <div v-if="submitted" class="error-message">
               {{errors.first("brand")}}
            </div>

            <v-radio-group
              label="Inventory ?"
              v-model="form.inventoryStatus"
              name="inventory"
              v-validate="{required:true}"
              >

              <v-radio
                label="In Stock"
                value="true"
                name="inventorystatus"
                ></v-radio>
              
              <v-radio
                label="Out Of Stock"
                value="false"
                name="inventorystatus"
                ></v-radio>

              <div v-if="submitted" class="error-message">
                {{errors.first("inventory")}}
              </div>

            </v-radio-group>


          </div>
        </v-form>
      
      
      <v-card-actions>
        
        <v-btn
          text
          color="deep-purple accent-4"
          @click="add">
          Add Product
        </v-btn>

         <v-progress-circular
          v-if="showAddProductSpinner"
          indeterminate
          color="red"
        ></v-progress-circular>
      
      </v-card-actions>

     
    
    </v-card>
  </v-col>

</template>

<script>
// import { mapActions } from 'vuex';
export default {
  
  name:'AddProduct',
  
  data() {
    return{
      form:{
        name:'',
        price:'',
        brand:'',
        inventoryStatus:'',
      },
      submitted: false,
      showAddProductSpinner: false,
    }
  },
  props:{
    product: Object
  },
  methods:{

    // ...mapActions['addProduct'], //part of {mapActions} of vuex
    
    async add(){
      try {
        this.submitted=true;
        let result = await this.$validator.validate();
        if(result){
          
          

        //using {mapActions} to map actions to components
          //  this.addProduct({
          //   name: this.form.name,
          //   price: '$' + this.form.price,
          //   brand: this.form.brand,
          //   inventoryStatus: this.form.inventoryStatus === 'true'
          // })
          // this.showAddProductSpinner=false

        

      // passing props using $emit
        
        //   this.$emit('addProduct',{
        //     name: this.form.name,
        //     price: '$' + this.form.price,
        //     brand: this.form.brand,
        //     inventoryStatus: this.form.inventoryStatus === 'true'
          // })
        
        

        // using $store.dispatch() to map actions to component  
          this.showAddProductSpinner=true
          await this.$store.dispatch('addProduct',{
            name: this.form.name,
            price: '$' + this.form.price,
            brand: this.form.brand,
            inventoryStatus: this.form.inventoryStatus === 'true'

          })
          this.showAddProductSpinner=false
        
        }
          console.log('result', result)
          console.log(this.form)
      } catch (error) {
        console.log('Error',error)
        this.showAddProductSpinner=false
      }
    },
  }

}
</script>

<style>

</style>