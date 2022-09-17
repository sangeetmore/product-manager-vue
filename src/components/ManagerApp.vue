<template>
  
  <v-app>
    
    <app-bar />
    
      <v-main>
        <v-container>
          
          <v-row class="justify-content-center">
            
            <add-product @addProduct="addProduct"/>
            <v-spacer></v-spacer>
            <!-- <list-product :products="productList" @deleteProduct="deleteProduct" @updateProduct='updateProduct'/> -->

          </v-row>
        </v-container>
      </v-main>
  
  </v-app>
  
</template>

<script>
import AddProduct from './AddProduct.vue'
import AppBar from './AppBar.vue'
// import ListProduct from './ListProduct.vue'
import axios from 'axios'

export default {
  name:'ManagerApp',
  components: { 
    AppBar,
    AddProduct,
    // ListProduct 
  },
  data(){
    return{
      productList:[]
    }
  },
  methods:{

    async addProduct(newProduct){
      console.log('New Product',newProduct)
      try {
        await axios.post('http://localhost:3000/products', newProduct)
        this.getProductList()
      } catch (error) {
        console.log('Error',error)
      }
    },

    async getProductList(){
      try{
        let result = await axios.get('http://localhost:3000/products')
        console.log('Result',result.data)
        this.productList = result.data
      }catch(error){
        console.log('Error',error)
      }
    },

    async deleteProduct(productId){
      console.log('product id',productId)
      try {
        await axios.delete(`http://localhost:3000/products/${productId}`)
        this.getProductList()
      } catch (error) {
        console.log('Error',error)
      }
      
    },
    async updateProduct(updatedProduct){
      console.log('****',updatedProduct)
      try {
        await axios.put(`http://localhost:3000/products/${updatedProduct.id}`,updatedProduct)
        this.getProductList()
      } catch (error) {
        console.log('Error',error)
      }
    },
  },
  mounted(){
    this.getProductList()
  }

}
</script>

<style>

</style>