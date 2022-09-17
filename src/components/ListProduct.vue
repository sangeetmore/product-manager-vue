<template>
  <v-col md='6' class="m-3">
    
    <v-card
    color="#0066CC">
      
      <v-card-title>
        Product list
      </v-card-title>
        
      <v-col>
        <v-spacer>
        
        <v-card
        style="min-width:50%"
        class="ma-3 "
        :color="product.inventoryStatus? 'green':'red'"
        align="center"
        v-for="product in productList" 
        :key="product.id"
        ><div>{{product.inventoryStatus? 'IN STOCK':'OUT OF STOCK'}}</div>
          <v-card-text><strong>Name: </strong>{{product.name}}</v-card-text>
          <v-card-text><strong>Price: </strong>{{product.price}}</v-card-text>
          <v-card-text><strong>Brand: </strong>{{product.brand}}</v-card-text>
          
          
          <v-row>

            <v-col>
              <v-btn dark><i class="fa-solid fa-trash" @click="deleteProduct(product.id)"></i></v-btn>
            </v-col>

            <v-col>
              <update-product :product="product" @updateProduct="updateProduct"/>
            </v-col>
          
          </v-row>
          
        </v-card>
        
        </v-spacer>

        <h2 v-if="productList.length<1">NO PRODUCTS FOUND</h2>


      </v-col>
      

    </v-card>
  
  </v-col>
</template>

<script>
// import { mapState } from 'vuex'
import UpdateProduct from './UpdateProduct.vue'
export default {
  components: { UpdateProduct },
  name: 'ListProduct',
  data(){
    return{
    }
  },
  methods:{
    deleteProduct(productId){
      this.$store.dispatch('deleteProduct', productId)
    },
    updateProduct(updatedProduct){
       this.$emit('updateProduct',updatedProduct)

    }
  },
  computed:{

    // ...mapState(['productList']),
    // ...mapState({
    //   testList: 'productList'
    // }),

    productList(){
      console.log('****',this.$store.state.productList)
      return this.$store.state.productList
    }
  },
  mounted(){
    this.$store.dispatch('setProducts')
  }
  

}
</script>

<style>

</style>
