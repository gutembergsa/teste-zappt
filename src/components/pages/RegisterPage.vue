<template>
  <v-container fluid pa-0>
    <v-layout row wrap>
      <!-- titulo principal a direita -->
      <Title class="title-mobile"/>
      <!-- carrosel imagens -->
      <Carousel class="pa-0"/>
      <!-- formulario signIn -->
      <v-col>
        <Title class="title-desktop pt-10 pr-12"/>
        <!-- Form -->
        <v-form ref="registerForm">
          <v-layout justify-center>
            <v-flex xs12 md6>
              <!-- sub-titulo centralizado -->
              <v-col class="text-center font-weight-light mt-4 mb-n8">
                <p>Getting Started</p>        
              </v-col>
              <!-- Inputs textuais do form centralizado -->
              <v-col>
                <div>
                  <v-text-field class="input-font" color="black" v-model="formData.name" :rules="rulesInput" type="name" label="Full Name" hide-details="auto"></v-text-field>
                  <v-text-field class="input-font" color="black" v-model="formData.email" :rules="rulesInput" type="email" label="User name or e-mail"></v-text-field>
                  <v-text-field class="input-font mt-n4" color="black" v-model="formData.password" :rules="rulesInput" type="password" label="Create Password"></v-text-field>
                </div>
              </v-col> 
              <!-- Área de ações do form centralizado -->
              <v-col class=" input-font">
                <div class="mt-n4 text-center">
                  <v-btn class="text-capitalize white--text" width="120" color="grey" rounded @click="validateForm">Sign Up</v-btn>
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
                    <div class="pl-3" >Sign up with Google</div>                
                  </v-btn>
                </div>
                <v-col class="mt-7 justify-center text-center">
                  <div class="mt-n3">
                    <span class="nowrap ml-2">By signing up, you agree to Invision</span><br>
                    <span class="nowrap">
                      <router-link class="pr-1 success--text" to="/">Terms of Conditions</router-link>    
                      and
                      <router-link class="pr-1 success--text" to="/">Privacy Policy</router-link>    
                    </span>
                  </div>
                  <div class="mt-3">
                    Already in Invision?
                    <router-link class="pr-1 success--text" to="/">Log In</router-link>    
                  </div>
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

<style lang="scss" scoped>
.nowrap {
  white-space: nowrap;
  justify-content: center;
}

</style>

<script>
import Carousel from '../misc/Carousel';
import Title from '../commons/Title';

export default {
  name: 'RegisterPage',
  components:{
    Carousel,
    Title
  },
  data: () => ({
    formData:{
      name:'',
      email:'',
      password:'',
    },
    rulesInput:[
      value => !!value || 'This field can not be empty',
    ],
  }),
  methods:{
    validateForm(){
      if (this.$refs.registerForm.validate()) {
        console.log(this.formData)
      }
    }
  },}
</script>
