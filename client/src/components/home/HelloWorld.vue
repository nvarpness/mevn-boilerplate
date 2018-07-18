<template>
  <div class="hello">
    <hello></hello>
    <box-tool></box-tool>

  <!-- <image-tool v-for="(c, i) in croppas"
    :key="i"
    v-model="croppas[i]"
    :width="150"
    :height="150"
    @new-image="croppas.push({})"
    v-show="i === croppas.length - 1 || c.imageSet"
  ></image-tool>
  <button type="button" class="btn btn-primary" @click="uploadCroppedImage">Upload Picture</button> -->


<picture-input
ref="pictureInput"
  @change="onChanged"
  @remove="onRemoved"
  :width="150"
  :removable="true"
  removeButtonClass="ui red button"
  :height="150"
  accept="image/jpeg, image/png, image/gif"
  buttonClass="ui button primary"
  :customStrings="{
  upload: '<h1>Upload it!</h1>',
  drag: 'Drag and drop your image here'}">
</picture-input>

<button @click="attemptUpload" v-bind:class="{ disabled: !image }">
  Upload
</button>

    <h1>myDSTI</h1>
    <h2>this is testing the MEVN stack</h2>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Vue from 'vue';
import Croppa from 'vue-croppa'
import 'vue-croppa/dist/vue-croppa.css'
import Box from '../shared/box'

import PictureInput from 'vue-picture-input'


Vue.use(Croppa, { componentName: 'image-tool'});

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      croppas: [{}],
    }
  },
  methods: {
  uploadCroppedImage() {
        this.croppas[0].generateBlob(
          blob => {
            // write code to upload the cropped image file (a file is a blob)
            console.log("save the image from here");
          },
          'image/jpeg',
          0.8
        ); // 80% compressed jpeg file
      },
      attemptUpload (image) {
        console.log('New picture was selected')
        if(image) {
          console.log('Picture loaded')
          this.image = image
        } else {
          console.log('File reader API is not suport: jon');
        }
      }
  },
  components: {
    'box-tool' : Box,
    PictureInput
  }
 }
</script>

<style>
.croppa-container {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
