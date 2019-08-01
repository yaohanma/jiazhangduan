<style lang='scss' scoped>

</style>

<template>
	<div>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {}
		},
		methods: {},
		mounted() {
			// 纯家委会进入
			if (this.$route.query.aloneApp == '1') {
				localStorage.removeItem('user');
				localStorage.removeItem('aloneApp');
				localStorage.removeItem('store');
				localStorage.removeItem('globalData');
				localStorage.setItem("aloneApp", JSON.stringify(this.$route.query.aloneApp));
				this.$store.commit('aloneApp');
				// 纯家委会自动登录，同时获取最新用户信息,
				// 1)app提供手机号，必为切换身份操作，则使用其登录,若无此家委，进行注册；
				// 2)app未提供手机号，利用存在的缓存进行登录；
				if (this.$route.query.pta_user_id != null &&
					this.$route.query.pta_user_id != '' &&
					this.$route.query.pta_user_id != undefined) {
					this.$post('committee/app_login/userLogin', {
						"pta_user_id": this.$route.query.pta_user_id
					}).then((data) => {
						console.log(data)
						if (!data.success) {
							Toast(data.errorMsg)
						} else {
							// 未注册用户
							if (data.result == null) {
								// 使用邀请码注册
								this.$router.push('/login/inviteLogin/inviteLogin');
							} else {
								// 已注册用户，直接进入首页
								localStorage.removeItem('user');
								localStorage.setItem("user", JSON.stringify(data.result));
								this.$router.push({
									path: '/index/homePageFamily',
									query: {
										autoFlag: '1'
									}
								})
							}
						}
					}, (response) => {
						console.error(response);
					});
				} else {
					this.$router.push('/login/inviteLogin/inviteLogin')
					// 缓存登录
					// let user = JSON.parse(localStorage.getItem('user'));
					// if (user != undefined && user != '' && user != null &&
					// 	user.pta_user_id != undefined && user.pta_user_id != '' && user.pta_user_id != null) {
					// 	this.$post('committee/login/lastUserInfo', {
					// 		"pta_user_id": user.pta_user_id
					// 	}).then((data) => {
					// 		console.log(data)
					// 		if (!data.success) {
					// 			Toast(data.errorMsg)
					// 		} else {
					// 			let token = user.token;
					// 			data.result.token = token;
					// 			data.result.pta_user_id = user.pta_user_id
					// 			localStorage.setItem("user", JSON.stringify(user));
					// 			// 获取最新用户信息，进入首页
					// 			this.$router.push({
					// 				path: '/index/homePageFamily',
					// 				query: {
					// 					autoFlag: '1'
					// 				}
					// 			})
					// 		}
					// 	}, (response) => {
					// 		console.error(response);
					// 	});
					// } else {
					// 	this.$router.push('/login/passwordLogin/passwordLogin')
					// }
				}
				// 家长端进入
			} else if (this.$route.query.aloneApp == '2') {
				localStorage.removeItem('user');
				localStorage.removeItem('aloneApp');
				localStorage.removeItem('store');
				localStorage.removeItem('globalData');
				localStorage.setItem("aloneApp", JSON.stringify(this.$route.query.aloneApp));
				this.$store.commit('noAloneApp')
				// 判断是否非首次进入
				this.$post('committee/app_login/userLogin', {
					"pta_user_id": this.$route.query.pta_user_id
				}).then((data) => {
					console.log(data)
					if (!data.success) {
						Toast(data.errorMsg)
					} else {
						// 未注册用户
						if (data.result == null) {
							this.$router.push({
								path: "/inviteCode",
								query: {
									pta_user_id: this.$route.query.pta_user_id
								},
							})
						} else {
							// 已注册用户，直接进入首页
							localStorage.setItem("user", JSON.stringify(data.result));
							this.$router.push({
								path: '/index/homePage'
							})
						}
					}
				}, (response) => {
					console.error(response);
				});
				// 教师端进入
			} else {
				localStorage.removeItem('user');
				localStorage.removeItem('aloneApp');
				localStorage.removeItem('store');
				localStorage.removeItem('globalData');
				localStorage.setItem("aloneApp", JSON.stringify("99"));
				this.$store.commit('noAloneApp')
				// 判断是否非首次进入
				this.$post('committee/app_login/userLogin', {
					"pta_user_id": this.$route.query.pta_user_id
				}).then((data) => {
					console.log(data)
					if (!data.success) {
						Toast(data.errorMsg)
					} else {
						// 未注册用户
						if (data.result == null) {

							this.$router.push({
								path: "/inviteCode",
								query: {
									pta_user_id: this.$route.query.pta_user_id
								},
							})
						} else {
							// 已注册用户，直接进入首页
							localStorage.setItem("user", JSON.stringify(data.result));
							this.$router.push({
								path: '/index/homePage'
							})
						}
					}
				}, (response) => {
					console.error(response);
				});
			}
		}

	}
</script>
