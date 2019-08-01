<style lang='scss' scoped>

</style>

<template>
	<div>
	</div>
</template>

<script>

  export default {
    components: {
      },
    data() {
      return{
      }
    },
    methods: {
    },
    mounted(){
     if(this.$route.query.aloneApp =='1') {
			 
				this.$store.commit('aloneApp') 
				this.$store.commit('notParent')
        this.$router.push('/login/passwordLogin/passwordLogin')
      } else if(this.$route.query.aloneApp =='2')  {
				this.$store.commit('noAloneApp') 
				this.$store.commit('parent')
        this.$router.push('/inviteCode?aloneApp=2')
      } else {
				this.$store.commit('noAloneApp') 
				this.$store.commit('notParent')
				this.$router.push('/inviteCode')
			}
    }
  
   }

</script>