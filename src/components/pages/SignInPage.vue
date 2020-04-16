<template>
  <v-container fluid pa-0>
    <v-layout row wrap>
      <!-- titulo principal a direita para mobile -->
      <Title class="title-mobile"/>
      <!-- carrosel imagens -->
      <Carousel class="pa-0"/>
      <!-- formulario signIn -->
      <v-col class="pa-7">
        <!-- titulo principal a direita -->
        <Title class="title-desktop"/>
        <!-- Form -->
        <v-form ref="signInForm">
          <v-layout justify-center class="pa-0">
            <v-flex xs12 md6>
              <!-- sub-titulo centralizado -->
              <v-col class="text-center mt-4 mb-n5">
                <p>Welcome to Invision</p>        
              </v-col>
              <!-- Inputs textuais do form centralizado -->
              <v-col>
                <div>
                  <v-text-field class="input-font" v-model="formData.name" :rules="rulesInput" color="black" label="Username or e-mail"></v-text-field>
                  <v-text-field class="input-font mt-n4" v-model="formData.password" :rules="rulesInput" color="black" type="password" label="Password"></v-text-field>
                </div>
                <v-col class="text-right input-font mt-n4">
                  <a>Forgot Password</a>        
                </v-col>
              </v-col> 
              <!-- Área de ações do form centralizado -->
              <v-col  class=" input-font mt-9">
                <div class="mt-n4 text-center">
                  <v-btn class="text-capitalize white--text" width="120" color="grey" rounded @click="validateForm">Sign In</v-btn>
                </div>
                <v-row class="mt-7">
                  <v-divider class="mt-3"></v-divider>
                  <p class="font-weight-thin px-5">Or</p>
                  <v-divider class="mt-3"></v-divider>
                </v-row>
                <div class="my-2 text-center">
                  <v-btn class="text-capitalize" color="white" rounded>
                    <v-avatar size="30">
                      <v-img src="https://imagepng.org/wp-content/uploads/2019/08/google-icon-5.png" aspect-ratio="3.7"></v-img>
                    </v-avatar>
                    <div class="pl-3" >Sign in with Google</div>
                  </v-btn>
                </div>
                <v-col class="mt-7">
                  <v-row class="justify-center">
                    <p class="pr-1">New Invision?</p>
                    <router-link class="pr-1 success--text" to="/register">Create Account</router-link>    
                  </v-row>
                </v-col>
              </v-col>       
            </v-flex>         
          </v-layout>
        </v-form>
        <!-- Form -->
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
import Carousel from '../misc/Carousel';
import Title from '../commons/Title';

export default {
  name: 'SignInPage',
  components:{
    Carousel,
    Title
  },
  data(){
    return{
      formData:{
        name:'',
        password:'',
      },
      rulesInput:[
        value => !!value || 'This field can not be empty',
        value => (value || '').length <= 11  || 'This must be less than 11 characters',
      ]
    }
  },
  methods:{
    validateForm(){
      if (this.$refs.signInForm.validate()) {
        console.log(this.formData)
      }
    }
  },
}
</script>
