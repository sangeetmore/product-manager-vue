 <template> 
    <div>
        <v-dialog
        v-model="dialog"
        width="500"
        persistent
        >
        
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            dark
            v-bind="attrs"
            v-on="on"
            @click="showProductDetails"
            >
            <i class="fa-solid fa-pen-to-square"> </i>
            </v-btn>
        </template>
            
            <v-card>

                <v-toolbar
                color="purple">
                    <v-toolbar-title>Edit Product</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn 
                    text
                    right
                    @click="dialog = false"
                    ><i class="fa-solid fa-xmark"></i></v-btn>
                </v-toolbar>
                
                

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
                    color="#DFD000"
                    text
                    @click="reset">
                        Reset
                    </v-btn>
                    
                    <v-spacer></v-spacer>
                    
                    <v-btn
                    color="green"
                    text
                    @click="submitUpdate">
                        Confirm
                    </v-btn>

                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name:'UpdateProduct',
    data :() => ({
        form:{
            name:'',
            price:'',
            brand:'',
            inventoryStatus:'',
        },
        dialog: false,
        submitted: false,
        stat: false,
            
    }),
    props:{
        product : Object
    },
    methods:{
        reset(){
            this.form.name = '',
            this.form.price = '',
            this.form.brand = '',
            this.form.inventoryStatus = ''
        },
        
        async submitUpdate(){
            console.log("submitted")
            this.submitted=true
            let result = await this.$validator.validate();
            console.log("result",result)
            if(result){
                // this.$emit('updateProduct',{
                //     name: this.form.name,
                //     price: '$' + this.form.price,
                //     brand: this.form.brand,
                //     inventoryStatus: this.form.inventoryStatus === 'true',
                //     id: this.$props.product.id
                // })
                this.$store.dispatch('updateProduct',{
                    name: this.form.name,
                    price: '$' + this.form.price,
                    brand: this.form.brand,
                    inventoryStatus: this.form.inventoryStatus === 'true',
                    id: this.$props.product.id
                }),
                
                this.dialog=false
                this.submitted=false
            }
        },
        
        
        
    },
    computed:{
        /* eslint-disable */
        showProductDetails(){
            console.log('details triggered')
            if(this.dialog==true){
                this.form = {
                    name: this.$props.product.name,
                    price: this.$props.product.price.split('$')[1],
                    brand: this.$props.product.brand,
                    inventoryStatus: this.$props.product.inventoryStatus.toString(),
                }
            }
            return console.log('details shown')

        },
    }

   
    
    
}
</script>

<style scoped>

</style>

