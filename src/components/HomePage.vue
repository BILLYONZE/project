<template>
  <h1>Home</h1>
    <!-- Carousel -->
    <v-card
    class="mx-auto"
    width="600"
    height="500"
    >
    <v-carousel>
    <v-carousel-item
    src="public/images/Caviar Tourbillon _ Jacob & Co_ (2).jpeg"
    cover
    ></v-carousel-item>
    <v-carousel-item
    src="public/images/Caviar Tourbillon _ Jacob & Co_.jpeg"
    cover
    ></v-carousel-item>
    <v-carousel-item
    src="public/images/Caviar Tourbillon _ Jacob & Co_ (1).jpeg"
    cover
    ></v-carousel-item>
    </v-carousel>
    </v-card>
    <v-card align="center">
        <v-card-item>
            <v-card-title> LUXZEIT✓</v-card-title>
            <v-card-subtitle>Put on what Makes you Be.</v-card-subtitle>
            <v-card-subtitle >Be able to make a bold statement with us.</v-card-subtitle>
            <v-card-subtitle>A good outfit deserves The best statement.That is what we bring to to the tabe on time.</v-card-subtitle>
            </v-card-item>        
            </v-card>
            <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Mr.Hans"
        text="The order came just right on time.As they say 'time is money'.Thank you👍!"
        title="Previews"
      ></v-card>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
         Comments
        </template>

        <template v-slot:subtitle>
          Mr.Rich
        </template>

        <template v-slot:text>
          The watch was original and of the best quality and the fast services were Bravo.<br>
          Truly time is of the essence.<br>
          ⭐⭐⭐⭐⭐ 
        </template>
      </v-card>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>Suggestions</v-card-title>

          <v-card-subtitle>Mrs.Kamau</v-card-subtitle>
        </v-card-item>

        <v-card-text>
            It was my first time using this app and i was surprised how the process was short and accurate.<br>
            My husband really loved his Fathers day gift.thank you soo much.👍⭐⭐<br>
            I would really love it when there could be womens classuc watches😄
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
    </template>
<script>
export default{

}
</script>