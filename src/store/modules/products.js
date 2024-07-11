const state = {
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
const getters = {
    stock: (state) => state.stockDetails,
}
const actions = {
}
const mutations = {

}
export default {
    state,
    getters,
    actions,
    mutations
}