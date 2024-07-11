<template>
    <h1>Home</h1>
    <v-card
class="mx-auto"
width="800"
>
<v-card-text class="bg-surface-light pt-4">
<v-card-title>Cart
{{ total }}
<v-btn
color="deep-purple-lighten-2"
text="Checkout"
></v-btn>
</v-card-title>
<v-row>
<v-col cols="12" md="4" v-for="product in cartItems" :key=product>
<v-card
class="mx-auto my-12"
max-width="374"
>
<v-img
height="250"
:src="product.itemImage"
cover
></v-img>
<v-card-item>
<v-card-title>{{product.itemName}}</v-card-title>
</v-card-item>
<v-card-text>
<div class="my-4
text-subtitle-1">{{product.itemPrice}}</div>
</v-card-text>
<v-divider class="mx-4 mb-1"></v-divider>
<v-card-actions>
<v-btn
color="deep-blue-lighten-2"
text="Remove"
block
border
@click="removeFromCart(product)"
></v-btn>
</v-card-actions>
</v-card>
</v-col>
</v-row>
</v-card-text>
</v-card>
    <div>
        <v-row>
            <v-col cols="12" md="4" v-for="product in stock" :key=product>
    <v-card
class="mx-auto my-12"
max-width="374"
>
<v-img
height="250"
:src="product.itemImage"
cover
></v-img>
<v-card-item>
<v-card-title>{{ product.itemName }}</v-card-title>
</v-card-item>
<v-card-text>
<div class="my-4 text-subtitle-1">{{ product.itemPrice }}</div>
<div>{{ product.description }}</div>
</v-card-text>
<v-divider class="mx-4 mb-1"></v-divider>
<v-card-actions>
<v-btn
color="deep-blue-lighten-2"
text="Add to Cart"
block
border
@click="addToCart(product)"
></v-btn>
</v-card-actions>
</v-card>
</v-col>
        </v-row>
    </div>
</template>



<script>
import { mapActions,mapGetters } from 'vuex';
export default{
data(){
    return{
        cartItems: [],
        total:0,

        stockDetails : [
{
itemNumber: 1,
itemName : "Olive",
itemPrice : 5000,
itemImage: 'public/images/Watches Green Water Ghost Quartz Waterproof Men - 2Steel with green, Watch.jpeg',
description: "Blend in with nature in class⭐"
},
{
itemNumber: 2,
itemName : "Ruby Caviar",
itemPrice : 40000,
itemImage: 'public/images/Caviar Tourbillon _ Jacob & Co_ (1).jpeg',
description: "A nice blend of  Red rubys and Silver Diamonds"
},
{
itemNumber: 3,
itemName : "Caviar Silver",
itemPrice : 30000,
itemImage: 'public/images/dbff59b0-85ff-4fa6-9eb6-e9d6f45afe3f.jpeg',
description: "A good touch of Luxury and Diamond"
},
{
itemNumber: 4,
itemName : "Caviar Blue",
itemPrice : 19999,
itemImage: 'public/images/Caviar Tourbillon _ Jacob & Co_.jpeg',
description: "For thos blue and Luxury lovers out there.This suits you best"
},
{
itemNumber: 5,
itemName : "Posdagar",
itemPrice : 3000,
itemImage: 'public/images/cc059cfc-fd3f-4589-810c-29ccf454bd8f.jpeg',
description: "A light and an easily wearable watch"
},
{
itemNumber: 6,
itemName : "Black Rock",
itemPrice : 4000,
itemImage: 'public/images/Black rock.jpeg',
description: "The rocky and black suits the Bold"
},
{
itemNumber: 7,
itemName : "Current",
itemPrice : 5000,
itemImage: 'public/images/Faster shipping_ Better service.jpeg',
description: "Go With the Golden Rivers Current Trend mark"
},
{
itemNumber: 8,
itemName : "Silver",
itemPrice : 6000,
itemImage: 'public/images/blue.jpeg',
description: "A beautiful silver that reflects the sky"
},
{
itemNumber: 9,
itemName : "G-Dragon",
itemPrice : 15000,
itemImage: 'public/images/OUPINKE Mens Automatic Watch Skeleton Mechanical Self Winding Luxury Chronograph Calendar Luminous Watch For Men 50M Waterproof Sapphire Crystal.jpeg',
description: "A Gold Designer Mythical wath"
},
{
itemNumber: 10,
itemName : "Lige",
itemPrice : 7000,
itemImage: 'public/images/Watch That You Must Have!.jpeg',
description: "A touch of Black and Rose Gold that suits you"
},
{
itemNumber: 11,
itemName : "Classic Caviar",
itemPrice : 35000,
itemImage: 'public/images/Caviar Tourbillon _ Jacob & Co_ (2).jpeg',
description: "A nice Golden and Leather outlook."
},
],
}
},
methods:{
        ...mapActions([
            "addToCart"
        ])
    },
computed: {
    ...mapGetters({
        stock:'stock'
    })
},    
};

</script>


