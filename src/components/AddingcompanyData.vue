<template>
<div class="add" >
    <form @submit.prevent="onFormSubmit">
        <label for="company">Company Name : </label><br>
        <input
          type="text"
          id="company"
          placeholder="Enter Your company name .."
          v-model="companylist.company"
        />
        <br />
            <label for="company">Phone : </label><br>
        <input
          type="text"
          id="company"
          placeholder="Enter Your Phone .."
          v-model="companylist.phone"
        />
        <br />
            <label for="company">Fax : </label><br>
        <input
          type="text"
          id="company"
          placeholder="Enter Your Fax .."
          v-model="companylist.fax"
        />
        <br />
        <label for="email">Email : </label><br>
        <input
          type="email"
          id="company"
          placeholder="Enter Your email.."
          v-model="companylist.email"
   
        />
        <br />
          <label for="email">City : </label><br>
        <input
          type="text"
          id="city"
          placeholder="Enter Your city.."
          v-model="companylist.city"
        />
        <br />
        <label for="state">State : </label><br>
        <input
          type="text"
          id="state"
          placeholder="Enter Your state.."
          v-model="companylist.state"
        />
        <br /><br/>

        <input type="submit" id="button" value="Submit" v-on:click="onFormSubmit" class="btn btn-info" />
      </form> 
      </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "AddCompany",
    data(){
        return{
companylist:{
    company:'',
    phone:'',
    fax:'',
    email:'',
    city:'',
    state:''
}
        }
        
    },
      methods: {
 async onFormSubmit(e) {
      e.preventDefault();
      console.log(this.companylist);
      const result = await axios.post(
        "https://task-4-43cf0-default-rtdb.firebaseio.com/company.json",
        this.companylist
      );
      this.companylist = result.data;
    },
  },
  
}

</script>
<style>
#company{
    height: 30px;
    width:400px;
   border-radius: 8px;
}
#city{
   height: 30px;
    width:400px;
   border-radius: 8px;
}
#state{
   height: 30px;
    width:400px;
   border-radius: 8px;
}

#button{
    height: 30px;
    width:400px;
   border-radius: 8px;
margin-left: auto;
margin-block: auto;
text-align: center;
padding-top: 3px;
}
</style>