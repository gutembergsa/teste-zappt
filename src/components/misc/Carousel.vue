<template>
    <!-- carrosel imagens -->
    <v-flex xs12 md6>
        <v-carousel height="100%" cycle hide-delimiter-background :show-arrows="false">
            <v-carousel-item
            v-for="(imagem, i) in images"
            :key="i"
            :src="imagem.path"
            >
            </v-carousel-item>
        </v-carousel>
    </v-flex>
</template>

<script>
export default {
 name: 'Carousel',
 data: ()=>({
    images: [
        {
            path: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        },
        {
            path: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        },
        {
            path: 'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        },
    ],
    colors: [
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4',
    ],
    slides: [
      'First',
      'Second',
      'Third',
      'Fourth',
      'Fifth',
    ],     
 })
}
</script>
