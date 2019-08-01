<style>
	.mint-popup-bottom {
		width: 100%;
	}
</style>
// 样式
<style lang="scss" scoped>
	.content {
		// background: rgb(245, 246, 247);
		height: 100vh;
		overflow: scroll;
		// -webkit-overflow-scrolling: touch;
		// 提交按钮以上的内容
		.container {
			// position: absolute;
			// bottom: 100px;
			// top: 0px;
			width: 100%;
			background-color: white;
		}

		//  上方选择区
		.top-UI {
			padding-top: 90px;
			// top: 21px;

			.top-blank {
				background-color: white;
				height: 21px;
				width: 100%;
			}

			// 顶部cell(输入框区)
			.cell {
				position: relative;
				height: 118px;
				background: white;

				// 左侧类别
				p {
					position: absolute;
					left: 30px;
					height: 89px;
					line-height: 89px;
					display: inline-block;
					text-align: right;

					color: rgb(49, 51, 64);
					font-size: 30px;
				}

				// 不可选时
				// .class-leftTitle {
				//     color:  rgb(160,164,177);
				// }
				// 输入框背景
				.input-bg {
					position: absolute;
					display: inline-block;
					height: 89px;
					right: 30px;
					left: 16%;
					top: 0px;
				}

				// 输入框
				.rank-input {
					position: absolute;
					// 右侧箭头
					background-image: url('../../../assets/my_inputDownArrow@2x.png');
					background-position: right;
					background-position-x: 93.5%;
					background-size: 16px 9px;
					background-repeat: no-repeat;

					height: 100%;
					width: 100%;
					border-radius: 10px;
					border-width: 0px;

					color: rgb(49, 51, 64);
					font-size: 30px;
					background-color: rgb(244, 245, 246);
					text-align: left;

				}
				// 不可选时
				.class-input {
				    color: rgb(160,164,177);
				}
			}
		}

		// 已加入的家委会
		.bottom-hadJoin {
			background-color: white;
			padding-bottom: 120px;

			// 底部 区标题:已加入的家委会
			.bottom-joinTitle {
				background-color: rgb(245, 246, 247);
				height: 63px;
				line-height: 63px;
				padding-left: 29px;

				color: rgb(160, 164, 177);
				font-size: 24px;
			}

			// 底部cell
			.bottom-cell {
				height: 128px;
				width: 100%;

				// 主标题
				.bottomCell-title {
					padding-top: 30px;
					padding-left: 30px;

					color: rgb(51, 51, 51);
					font-size: 30px;
					font-weight: bold;
				}

				// 副标题
				.bottomCell-subTitle {
					padding-top: 18px;
					padding-left: 30px;
					padding-bottom: 28px;

					font-size: 24px;
					color: rgb(160, 164, 177);
				}
			}

		}

		// 底部提交按钮
		.subMit-btn {
			position: fixed;
      bottom: -4px;
      left: 0;
      right: 0;
      font-size: 36px;
      color: #fff;
      text-align: center;
      padding: 34px 0;
      background: rgb(4, 147, 240);
      border: 0;
      width: 100%;
		}
	}
</style>

<style>
	.picker-slot.picker-slot-center {
	width: 100%;
}
</style>


<template>
	<div class="content">
		<!-- 提交按钮以上的内容 -->
		<div class="container">
			<!-- 顶部导航栏 -->
			<mt-header title="创建家委会" fixed>
				<router-link to="" slot="left">
					<mt-button icon="back" @click="$router.go(-1)"></mt-button>
				</router-link>
			</mt-header>
			<!-- 上方 选择区 -->
			<div class="top-UI">
				<div class="top-blank"></div>
				<!-- 级别 -->
				<div class="cell">
					<p>级别：</p>
					<!-- 输入框背景 -->
					<div class="input-bg">
						<!-- 输入框 -->
						<input type="button" @click="popupVisible = true" class="rank-input" v-model="ptaLevel" :disabled="disabledGradeProvince" :class="disabledGradeProvince? 'rank-input class-input':'rank-input'">
						<mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
							<!-- 此处slots为动态传入的值，通过computed来处理，数据通过vuex管理，由于数据为对象数组，需设置 value-key 属性来指定显示的字段名 -->
							<mt-picker class="rank-picker" :slots="slots" :visible-item-count="5" :show-toolbar="true" ref="picker0">
								<mt-button @click="handleCancel" class="cancel-btn">取消</mt-button>
								<mt-button @click="handleConfirm(0)" btn-id="0" class="sure-btn">确定</mt-button>
							</mt-picker>
						</mt-popup>
					</div>
				</div>
				<!-- 地区：省市区 -->
				<div class="cell" v-show="haveArea">
					<p>地区：</p>
					<!-- 输入框背景 -->
					<div class="input-bg">
						<!-- 输入框 -->
						<input type="button" @click="popupArea = true" :disabled="disabledProvice" :class="disabledProvice? 'rank-input class-input':'rank-input'"
						 v-model="pct">
						<mt-popup v-model="popupArea" position="bottom" class="mint-popup">
							<!-- 此处slots为动态传入的值，通过computed来处理，数据通过vuex管理，由于数据为对象数组，需设置 value-key 属性来指定显示的字段名 -->
							<mt-picker class="rank-picker" :slots="provinceList" :visible-item-count="5" :show-toolbar="true" ref="picker1"
							 value-key="name" @change="onProviceListChange" @visible-change="visbleChange">
								<mt-button @click="handleCancel" class="cancel-btn">取消</mt-button>
								<mt-button @click="handleConfirm(1)" btn-id="1" class="sure-btn" name="第一个">确定</mt-button>
							</mt-picker>
						</mt-popup>
					</div>
				</div>
				<!-- 地区：省市-->
				<div class="cell" v-show="!haveArea">
					<p>地区：</p>
					<!-- 输入框背景 -->
					<div class="input-bg">
						<!-- 输入框 -->
						<input type="button" @click="popupAreaPC = true" :disabled="disabledProvice" :class="disabledProvice? 'rank-input class-input':'rank-input'"
						 v-model="pc">
						<mt-popup v-model="popupAreaPC" position="bottom" class="mint-popup">
							<!-- 此处slots为动态传入的值，通过computed来处理，数据通过vuex管理，由于数据为对象数组，需设置 value-key 属性来指定显示的字段名 -->
							<mt-picker class="rank-picker" :slots="pcList" :visible-item-count="5" :show-toolbar="true" ref="picker101"
							 value-key="name" @change="onProviceListChange" @visible-change="visbleChange">
								<mt-button @click="handleCancel" class="cancel-btn">取消</mt-button>
								<mt-button @click="handleConfirm(101)" btn-id="1" class="sure-btn" name="第一个">确定</mt-button>
							</mt-picker>
						</mt-popup>
					</div>
				</div>
				<!-- 学校： -->
				<div class="cell">
					<p>学校：</p>
					<!-- 输入框背景 -->
					<div class="input-bg">
						<!-- 输入框 -->
						<input type="button" @click="popupSchool = true" :disabled="disabledSchool" :class="disabledSchool? 'rank-input class-input':'rank-input'"
						 v-model="schoolName">
						<mt-popup v-model="popupSchool" position="bottom" class="mint-popup">
							<!-- 此处slots为动态传入的值，通过computed来处理，数据通过vuex管理，由于数据为对象数组，需设置 value-key 属性来指定显示的字段名 -->
							<mt-picker class="rank-picker" :slots="schoolSlotList" :visible-item-count="5" :show-toolbar="true" ref="picker2"
							 value-key="co_name">
								<mt-button @click="handleCancel" class="cancel-btn">取消</mt-button>
								<mt-button @click="handleConfirm(2)" btn-id="2" class="sure-btn">确定</mt-button>
							</mt-picker>
						</mt-popup>
					</div>
				</div>
				<!-- 年级： -->
				<div class="cell">
					<p>年级：</p>
					<!-- 输入框背景 -->
					<div class="input-bg">
						<!-- 输入框 -->
						<input type="button" @click="popupGrade = true" :disabled="disabledGrade" :class="disabledGrade? 'rank-input class-input':'rank-input'"
						 v-model="gradeName">
						<mt-popup v-model="popupGrade" position="bottom" class="mint-popup">
							<!-- 此处slots为动态传入的值，通过computed来处理，数据通过vuex管理，由于数据为对象数组，需设置 value-key 属性来指定显示的字段名 -->
							<mt-picker class="rank-picker" :slots="gradeSlotList" :visible-item-count="5" :show-toolbar="true" ref="picker3"
							 value-key="grade_name">
								<mt-button @click="handleCancel" class="cancel-btn">取消</mt-button>
								<mt-button @click="handleConfirm(3)" btn-id="3" class="sure-btn">确定</mt-button>
							</mt-picker>
						</mt-popup>
					</div>
				</div>
				<!-- 班级： -->
				<div class="cell">
					<p class="class-leftTitle">班级：</p>
					<!-- 输入框背景 -->
					<div class="input-bg">
						<!-- 输入框 -->
						<input type="button" @click="popupClass = true" :disabled="disabledClass" :class="disabledClass? 'rank-input class-input':'rank-input'"
						 v-model="className">
						<mt-popup v-model="popupClass" position="bottom" class="mint-popup">
							<!-- 此处slots为动态传入的值，通过computed来处理，数据通过vuex管理，由于数据为对象数组，需设置 value-key 属性来指定显示的字段名 -->
							<mt-picker class="rank-picker" :slots="classSlotList" :visible-item-count="5" :show-toolbar="true" ref="picker4"
							 value-key="class_name">
								<mt-button @click="handleCancel" class="cancel-btn">取消</mt-button>
								<mt-button @click="handleConfirm(4)" btn-id="4" class="sure-btn">确定</mt-button>
							</mt-picker>
						</mt-popup>
					</div>
				</div>
			</div>
			<!-- 已加入的家委会 -->
			<div class="bottom-hadJoin">
				<!-- section标题 -->
				<p class="bottom-joinTitle">已加入的家委会</p>
				<div class="bottom-cell" v-for="item in items">
					<!-- 主标题 -->
					<p class="bottomCell-title">{{item.pta_name}}</p>
					<!-- 副标题 -->
					<p class="bottomCell-subTitle">{{item.pta_level}}</p>
				</div>

			</div>
		</div>
		<!-- 底部提交按钮 -->
		<button class="subMit-btn" @click="submitBtnClick">提交</button>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				handler: function(e) {
					e.preventDefault()
				},

				disabledSchool: false,
				disabledProvice: false,
				disabledGrade: false,
				disabledClass: false,
				disabledGradeProvince: false, // 家委会级别
    			disabledProvince:false, // 省市区
				items: [],
				// 省市区列表
				province_list: [{
					city_list: [{
						district_list: []
					}]
				}],
				haveArea: true,
				myAdress: null,
				pct: '请选择省,市,区',
				pc: '请选择省,市',
				popupArea: false, // 地区
				popupAreaPC: false,
				province_name: '',
				province_id: '',
				city_name: '',
				city_id: '',
				district_name: '',
				district_id: '',
				ptaLevel: '班级家委会',
				popupVisible: false, // 级别
				slots: [{
					values: ['班级家委会', '年级家委会', '校级家委会']
				}],
				schoolName: '请选择学校',
				popupSchool: false, // 学校
				schoolList: [],
				school_id: '',
				school_name: '',
				popupGrade: false, // 年级
				gradeName: "请选择年级",
				gradeList: [],
				grade_name: '',
				gradeArray: null,
				grade_id: '',
				popupClass: false, // 班级
				classList: [],
				className: "请选择班级",
				class_name: "",
				class_id: '',
				isclick: true,
				parentCount: 0
			}
		},
     created() {
        window.addEventListener('setItem', ()=> {
          this.popupVisible = JSON.parse(sessionStorage.getItem('watchStorage'));
          this.popupArea = JSON.parse(sessionStorage.getItem('watchStorage'));
          this.popupAreaPC = JSON.parse(sessionStorage.getItem('watchStorage'));
          this.popupSchool = JSON.parse(sessionStorage.getItem('watchStorage'));
          this.popupGrade = JSON.parse(sessionStorage.getItem('watchStorage'));
          this.popupClass = JSON.parse(sessionStorage.getItem('watchStorage'));
        })
      },
     watch: {
    	popupVisible: function (val) {
    		if(val) {
    			sessionStorage.setItem('watchStorage',true)
    		} else {
    			sessionStorage.setItem('watchStorage',false)
    		}
    	},
      popupArea: function (val) {
      	if(val) {
      		sessionStorage.setItem('watchStorage',true)
      	} else {
      		sessionStorage.setItem('watchStorage',false)
      	}
      },
      popupAreaPC: function (val) {
      	if(val) {
      		sessionStorage.setItem('watchStorage',true)
      	} else {
      		sessionStorage.setItem('watchStorage',false)
      	}
      },
      popupSchool: function (val) {
      	if(val) {
      		sessionStorage.setItem('watchStorage',true)
      	} else {
      		sessionStorage.setItem('watchStorage',false)
      	}
      },
      popupGrade: function (val) {
      	if(val) {
      		sessionStorage.setItem('watchStorage',true)
      	} else {
      		sessionStorage.setItem('watchStorage',false)
      	}
      },
      popupClass: function (val) {
      	if(val) {
      		sessionStorage.setItem('watchStorage',true)
      	} else {
      		sessionStorage.setItem('watchStorage',false)
      	}
      },
      value(val) {
      	this.currentValue = val;
      },

      rims() {
      	this.generateSlots();
      },

      visible(val) {
      	this.$emit('visible-change', val);
      }
    },
		computed: {
			// 省市区picker
			provinceList() {
				let datalots = [{
					flex: 1,
					values: this.province_list,
					className: 'slot1',
					textAlign: 'center'
				}, {
					flex: 1,
					values: this.province_list[0].city_list,
					className: 'slot2',
					textAlign: 'center'
				}, {
					flex: 1,
					values: this.province_list[0].city_list[0].district_list,
					className: 'slot3',
					textAlign: 'center'
				}];
				return datalots;
			},
			// 省市picker
			pcList() {
				let datalots = [{
					flex: 1,
					values: this.province_list,
					className: 'slot1',
					textAlign: 'center'
				}, {
					flex: 1,
					values: this.province_list[0].city_list,
					className: 'slot2',
					textAlign: 'center'
				}];
				return datalots;
			},
			// 校picker
			schoolSlotList() {
				let datalots = [{
					flex: 1,
					values: this.schoolList,
					className: 'slot1',
					textAlign: 'center'
				}];
				return datalots;
			},
			// 年级picker
			gradeSlotList() {
				let datalots = [{
					flex: 1,
					values: this.gradeList,
					className: 'slot1',
					textAlign: 'center'
				}];
				return datalots;
			},
			// 班级picker
			classSlotList() {
				let datalots = [{
					flex: 1,
					values: this.classList,
					className: 'slot1',
					textAlign: 'center'
				}];
				return datalots;
			}
		},
		methods: {

			/*解决页面层级相互影响滑动的问题*/
			closeTouch() {
				document.getElementsByTagName('body')[0].addEventListener('touchmove', this.handler, {
					passive: false
				}) //阻止默认事件
			},
			openTouch() {
				document.getElementsByTagName('body')[0].removeEventListener('touchmove', this.handler, {
					passive: false
				}) //打开默认事件
			},

			visbleChange(val) {
				if (val) {
					this.closeTouch()
				} else {
					this.openTouch()
				}
			},


			onProviceListChange(picker, values) {
				if (!values[0]) {
					this.$nextTick(() => {
						// 赋默认值
						if (this.myAdress) {} else {
							picker.setValues([province_list[0], province_list[0].city_list[0],
								province_list[0].city_list[0].district_list[0]
							])
						}
					});
				} else {
					picker.setSlotValues(1, values[0].city_list);
					let town = [];
					if (values[1]) {
						town = values[1].district_list;
					}
					picker.setSlotValues(2, town);
				}
			},
			handleConfirm(index) {
				// 地区:省市区
				if (index == 1) {
					// console.log(this.$refs.picker.getValues());
					let pctValue = this.$refs.picker1.getValues();
					if (pctValue != undefined) {
						this.pct = pctValue[0].name + "," + pctValue[1].name + "," + pctValue[2].name;
						this.pc = pctValue[0].name + "," + pctValue[1].name;
						// 省
						let currentObj0 = this.$refs.picker1.getValues()[0]
						this.province_id = currentObj0.id;
						this.province_name = currentObj0.name;
						// 市
						let currentObj1 = this.$refs.picker1.getValues()[1]
						this.city_id = currentObj1.id;
						this.city_name = currentObj1.name;
						// 区
						let currentObj2 = this.$refs.picker1.getValues()[2]
						this.district_id = currentObj2.id;
						this.district_name = currentObj2.name;
						// 其他select还原
						this.schoolName = '请选择学校';
						this.school_id = '';
						this.school_name = '';

						this.gradeName = '请选择年级';
						this.grade_id = '';
						this.grade_name = '';

						this.className = '请选择班级';
						this.class_id = '';
						this.class_name = '';
						this.schoolList = [];
						// this.gradeList = [];
						this.classList = [];
						// 获取校列表
						if (!this.disabledSchool) {
							this.getSchoolList();
						}
					}
					this.popupArea = false
				} else if (index == 101) {
					// 地区：省市
					let pctValue = this.$refs.picker101.getValues();
					if (pctValue != undefined) {
						this.pc = pctValue[0].name + "," + pctValue[1].name;
						// 省
						let currentObj0 = this.$refs.picker101.getValues()[0]
						this.province_id = currentObj0.id;
						this.province_name = currentObj0.name;
						// 市
						let currentObj1 = this.$refs.picker101.getValues()[1]
						this.city_id = currentObj1.id;
						this.city_name = currentObj1.name;
						// 其他select还原
						this.schoolName = '请选择学校';
						this.school_id = '';
						this.school_name = '';

						this.gradeName = '请选择年级';
						this.grade_id = '';
						this.grade_name = '';

						this.className = '请选择班级';
						this.class_id = '';
						this.class_name = '';
						this.schoolList = [];
						// this.gradeList = [];
						this.classList = [];
					}
					this.popupAreaPC = false

				} else if (index == 0) {
					// 级别
					let levelValue = this.$refs.picker0.getValues();
					this.ptaLevel = levelValue[0];
					// 判断 如果选择 市级家委会 学校、年级、班级都是禁止点击状态
					if (this.ptaLevel == '市级家委会') {
						// 学校禁止点击
						this.disabledSchool = true;
						// 年级禁止点击
						this.disabledGrade = true;
						// 班级禁止点击
						this.disabledClass = true;
						// 展示省、市下拉列表
						this.haveArea = false;
					} else if (this.ptaLevel == '校级家委会') {
						// 判断 如果选择 校级家委会 年级、班级都是禁止点击状态
						// 学校可以点击
						this.disabledSchool = true;
						// 年级禁止点击
						this.disabledGrade = true;
						// 班级禁止点击
						this.disabledClass = true;
						// 省、市、区
						this.haveArea = true;
					} else if (this.ptaLevel == '年级家委会') {
						// 判断 如果选择 年级家委会 班级都是禁止点击状态
						// 学校可以点击
						this.disabledSchool = true;
						// 年级可以点击
						this.disabledGrade = false;
						// 班级禁止点击
						this.disabledClass = true;
						// 省、市、区
						this.haveArea = true;
					} else if (this.ptaLevel == '班级家委会') {
						// 判断 如果选择 班级家委会 都能选择状态
						// 学校可以点击
						this.disabledSchool = true;
						// 年级可以点击
						this.disabledGrade = false;
						// 班级可以点击
						this.disabledClass = false;
						// 省、市、区
						this.haveArea = true;
					}
					this.popupVisible = false;
					// 其他select还原
					// this.pct = '请选择省,市,区';
					// this.pc = '请选择省,市';
					// this.province_name = '';
					// this.province_id = '';
					// this.city_name = '';
					// this.city_id = '';
					// this.district_name = '';
					// this.district_id = '';

					// this.schoolName = '请选择学校';
					// this.school_id = '';
					// this.school_name = '';

					this.gradeName = '请选择年级';
					this.grade_id = '';
					this.grade_name = '';

					this.className = '请选择班级';
					this.class_id = '';
					this.class_name = '';

					this.schoolList = [];
					// this.gradeList = [];
					this.classList = [];
				} else if (index == 2) {
					// 校
					let schoolValue = this.$refs.picker2.getValues()[0];
					if (schoolValue != undefined) {
						this.schoolName = schoolValue.co_name;
						this.school_id = schoolValue.school_code;
						this.school_name = schoolValue.co_name;
						// 其他select还原
						this.gradeName = '请选择年级';
						this.grade_id = '';
						this.grade_name = '';

						this.className = '请选择班级';
						this.class_id = '';
						this.class_name = '';
						// this.gradeList = [];
						this.classList = [];
						// 获取年级列表
						if (!this.disabledGrade) {
							this.getGLradeist();
						}
					}
					this.popupSchool = false;
				} else if (index == 3) {
					// 年级
					let gradeValue = this.$refs.picker3.getValues()[0];
					if (gradeValue != undefined) {
						this.gradeName = gradeValue.grade_name;
						this.grade_id = gradeValue.grade_org_code;
						this.grade_name = gradeValue.grade_name;
						// 其他select还原
						this.className = '请选择班级';
						this.class_id = '';
						this.class_name = '';
						this.classList = [];
						// 获取班级列表
						if (!this.disabledClass) {
							this.getClassList();
						}
					}
					this.popupGrade = false;
				} else {
					// 班级
					let classValue = this.$refs.picker4.getValues()[0];
					if (classValue != undefined) {
						this.className = classValue.class_name + '班';
						this.class_id = classValue.class_org_code;
						this.class_name = classValue.class_name + '班';
					}
					this.popupClass = false;
				}
			},
			handleCancel() {
				this.popupVisible = false
				this.popupArea = false
				this.popupAreaPC = false
				this.popupSchool = false
				this.popupGrade = false
				this.popupClass = false
				console.log('点击取消')
			},
			getSchoolList() {
				this.$post('committee/basic/api/school_list', {
					"province_id": this.province_id,
					"city_id": this.city_id,
					"district_id": this.district_id,
				}).then((data) => {

					if (!data.success) {
						// Toast(data.errorMsg)
					} else {
						//co_name school_code
						if (data.result.result != null && data.result.result.length > 0) {
							this.schoolList = data.result.result;
						}
					}
				}, (response) => {
					console.error(response);
				});
			},
			getGLradeist() {
				this.$post('committee/basic/api/grade_list', {
					"school_id": this.school_id
				}).then((data) => {

					if (!data.success) {
						// Toast(data.errorMsg)
					} else {
						//grade_name grade_org_code
						if (data.result.result != null && data.result.result.length > 0) {
							this.gradeList = data.result.result;
						}
					}
				}, (response) => {
					console.error(response);
				});
			},
			getClassList() {
				this.$post('committee/basic/api/class_list', {
					"grade_id": this.grade_id,
          			"school_id": this.school_id
				}).then((data) => {

					if (!data.success) {
						// Toast(data.errorMsg)
					} else {
						//class_name class_org_code
						if (data.result.result != null && data.result.result.length > 0) {
							this.classList = data.result.result;
						}
					}
				}, (response) => {
					console.error(response);
				});
			},
			// 创建家委会
			submitBtnClick() {
				if (this.isclick) {
					this.isclick = false;
					//下面添加需要执行的事件
					let params = new Object();
					//家委会级别
					if (this.ptaLevel == '') {
						this.isclick = true;
						Toast('请选择家委会级别');
						return;
					} else {
						params.pta_level = this.ptaLevel;
					}
					//省市区
					if (!this.haveArea) {
						if (this.province_name == '') {
							this.isclick = true;
							Toast('请选省、市');
							return;
						} else {
							params.province_name = this.province_name;
							params.province_id = this.province_id;
							params.city_name = this.city_name;
							params.city_id = this.city_id;
						}
					} else {
						if (this.province_name == '') {
							this.isclick = true;
							Toast('请选省、市、区');
							return;
						} else {
							params.province_name = this.province_name;
							params.province_id = this.province_id;
							params.city_name = this.city_name;
							params.city_id = this.city_id;
							params.district_name = this.district_name;
							params.district_id = this.district_id;
						}
					}
					// 学校
					if (!this.disabledSchool && this.school_name == '') {
						this.isclick = true;
						Toast('请选择学校');
						return;
					} else {
						params.school_name = this.schoolName;
						params.school_id = this.school_id;
					}
					// 年级
					if (!this.disabledGrade && this.grade_name == '') {
						this.isclick = true;
						Toast('请选择年级');
						return;
					} else {
						params.grade_name = this.grade_name;
						params.grade_id = this.grade_id;
					}
					// 班级
					if (!this.disabledClass && this.class_name == '') {
						this.isclick = true;
						Toast('请选择班级');
						return;
					} else {
						params.class_name = this.class_name;
						params.class_id = this.class_id;
					}
					console.log('555555')
					console.log(this.province_list)
					console.log('666666')
					// 创建家委会
					this.$post('committee/family/add', params).then((data) => {
						console.log(data)
						if (!data.success) {
							this.isclick = true;
							Toast(data.errorMsg)
						} else {
							let new_pta_id = data.result;
							//判断创建家委会之前有没有家委会,切换至当前新建家委
							if (localStorage.getItem('user').pta_id != null) {
								this.$post('committee/setting/switch', {
									"current_pta_id": localStorage.getItem('user').pta_id,
									"pta_id": new_pta_id
								}).then((data) => {
									console.log(data)
									if (!data.success) {
										this.isclick = true;
										Toast(data.errorMsg)
									} else {
										let user = JSON.parse(localStorage.getItem('user'));
										user.pta_id = new_pta_id;
									}
								}, (response) => {
									console.error(response);
								});
							} else {
								let user = JSON.parse(localStorage.getItem('user'));
								user.pta_id = new_pta_id;
							}
							let user = JSON.parse(localStorage.getItem('user'));
								user.pta_id = data.result;
								user.province_id = this.province_id;
								user.province_name = this.province_name;
								user.city_id = this.city_id;
								user.city_name = this.city_name;
								user.district_id = this.district_id;
								user.district_name = this.district_name;
								user.school_id = this.school_id;
								user.school_name = this.school_name;
								user.grade_id = this.grade_id;
								user.class_id = this.class_id;
								user.class_name = this.class_name;
								localStorage.setItem("user", JSON.stringify(user));
								//获取用户权限
								let params = {};
								params.pta_id = user.pta_id;
							// if (!!user.school_id) {
							// 	//学校ID
							// 	params.school_id = user.school_id;
							// } else if (!!user.city_id) {
							// 	//城市ID
							// 	params.city_id = user.city_id;
							// }

							/**
							* 身份
							* 0 无权限
							* 1 city
							* 2 diatrict
							* 3 school
							*
							*private String identity
							* **/
							if (user.identity == '3') {
								params.school_id = user.school_id;
							} else if (user.identity == '1') {
								params.city_id = user.city_id;
							} else if (user.identity == '2') {
								params.district_id = user.district_id;
							}

							this.getParentCount(params);
							Toast('创建家委会成功');
						}
					}, (response) => {
						this.isclick = true;
						console.error(response);
					});
				}

			},
			// 获取家长数
			getParentCount(user) {
				let parentParams = {};
				if (!!user.city_id) {
					//城市ID
					parentParams.city_id = user.city_id;
					parentParams.type = '1'
				}
				if (!!user.district_id) {
					//区ID
					parentParams.district_id = user.district_id;
					parentParams.type = '5'
				}
				if (!!user.school_id) {
					//学校ID
					parentParams.school_id = user.school_id;
					parentParams.type = '2'
				}
				if (!!user.grade_id) {
					//年级ID
					parentParams.grade_id = user.grade_id;
					parentParams.school_id = user.school_id;
					parentParams.type = '3'
				}
				if (!!user.class_id) {
					//班级ID
					parentParams.class_id = user.class_id;
					parentParams.school_id = user.school_id;
					parentParams.type = '4'
				}
				this.$post('/committee/basic/api/parent_count',
					parentParams
				).then((data) => {
					if (data.success) {
						if (data.result.retCode == 'SUCCESS') {
							this.parentCount = data.result.result;
						}
					}

					//获取用户权限
					let params = {};
					params.pta_id = user.pta_id;
					if (!!user.school_id) {
						//学校ID
						params.school_id = user.school_id;
					} else if (!!user.city_id) {
						//城市ID
						params.city_id = user.city_id;
					}
					this.getAuthority(params);
				}, (response) => {
					console.error(response);
				});
			},
			getAuthority(param) {
				this.$post('/committee/login/authority',
					param
				).then((result) => {
					let globalData = {};
					globalData.createActivity = null;
					globalData.createResource = null;
					globalData.updateResource = null;
					globalData.deleteActivity = null;
					globalData.deleteResource = null;
					globalData.sendToParent = null;
					let data = result.result;
					if (data != null && data != '' && data.length != 0) {
						for (var i = 0; i < data.length; i++) {
							if (data[i].authority_name == '创建活动') {
								globalData.createActivity = '1';
							} else if (data[i].authority_name == '创建资源') {
								globalData.createResource = '1';
							} else if (data[i].authority_name == '修改资源') {
								globalData.updateResource = '1';
							} else if (data[i].authority_name == '撤销活动') {
								globalData.deleteActivity = '1';
							} else if (data[i].authority_name == '删除资源') {
								globalData.deleteResource = '1';
							} else if (data[i].authority_name == '发给家长') {
								globalData.sendToParent = '1';
							}
						}
					}
					globalData.parentCount = this.parentCount;
					localStorage.setItem("globalData", JSON.stringify(globalData))
					setTimeout(() => {
						this.isclick = true;
						this.$router.push({
							path: '/my/myIndex/myIndex'
						})
					}, 3000)
				}, (response) => {
					console.error(response);
				});
			},
			getAllRegion(){
				this.$post('committee/basic/api/getAllRegion', {})
				.then((data) => {
					console.log(data)
					if (!data.success) {
						// Toast(data.errorMsg)
						// 省市区禁止点击
						this.disabledProvice = true;
						Toast("获取省市区失败，请稍后重试")
					} else {
						let replaceArray = JSON.parse(JSON.stringify(data.result.result.province_list).replace(/province_id/g, 'id'));
						replaceArray = JSON.parse(JSON.stringify(replaceArray).replace(/province_name/g, 'name'));
						replaceArray = JSON.parse(JSON.stringify(replaceArray).replace(/city_name/g, 'name'));
						replaceArray = JSON.parse(JSON.stringify(replaceArray).replace(/city_id/g, 'id'));
						replaceArray = JSON.parse(JSON.stringify(replaceArray).replace(/district_name/g, 'name'));
						replaceArray = JSON.parse(JSON.stringify(replaceArray).replace(/district_id/g, 'id'));
						this.province_list = replaceArray;
					}
				}, (response) => {
					this.disabledProvice = true;
					Toast("获取省市区失败，请稍后重试")
					console.error(response);
				});
			}
		},
		mounted() {
			let that = this
      localStorage.setItem("backPath", "/my/myIndex/myIndex");
			// 省市区

			this.$post('committee/family/getCreatorInfo', {})
				.then((data) => {
					console.log(data)
					if (!data.success) {

					} else {
						if (data.result.schoolId == 'all') {
							if(data.result.districtId == 'all') {
								//市级管理员
								this.disabledGradeProvince = true; // 家委级别 不可点击
								this.disabledSchool = true;
								this.disabledGrade = true;
								this.disabledClass = true;
								this.disabledProvice = true; // 省市置灰

								this.ptaLevel= '市级家委会';
								this.haveArea =false;//省市

								this.pc= data.result.provinceName + "," + data.result.cityName; //省、市

								this.province_name = data.result.provinceName;
								this.province_id = data.result.provinceId;
								this.city_name = data.result.cityName;
								this.city_id = data.result.cityId;
								// 学校
								this.schoolName= data.result.schoolName;

							} else{
								//区级管理员
								this.disabledGradeProvince = true; // 家委级别 不可点击
								this.disabledSchool = true;
								this.disabledGrade = true;
								this.disabledClass = true;
								this.disabledProvice = true; // 省市置灰

								this.ptaLevel= '区级家委会';
								this.haveArea =true;//省市区

								this.pct= data.result.provinceName + "," + data.result.cityName + "," + data.result.districtName; //省、市、区

								this.province_name = data.result.provinceName;
								this.province_id = data.result.provinceId;
								this.city_name = data.result.cityName;
								this.city_id = data.result.cityId;
								this.district_name = data.result.districtName;
								this.district_id = data.result.districtId;
								// 学校
								this.schoolName= data.result.schoolName;
							}
						} else{
							//学校管理员
							if (data.result.schoolId == '') {
								this.getAllRegion();
							} else {
								this.disabledSchool = true;
								this.disabledProvice = true; // 省市区置灰
								this.pct= data.result.provinceName + "," + data.result.cityName + "," + data.result.districtName; //省、市、区

								this.province_name = data.result.provinceName;
								this.province_id = data.result.provinceId;
								this.city_name = data.result.cityName;
								this.city_id = data.result.cityId;
								this.district_name = data.result.districtName;
								this.district_id = data.result.districtId;

								// 学校
								this.schoolName= data.result.schoolName;
								this.school_id= data.result.schoolId;

								// 获取年级列表
								if (!this.disabledGrade) {
									this.getGLradeist();
								}
							}
						}
					}
				}, (response) => {


				});



			// 已加入家委列表
			this.$post('/committee/family/my_family_list', {
				pta_id: localStorage.getItem("user").pta_id
			},'','1').then((data) => {
				console.log(data)
				if (!data.success) {
					Toast(data.errorMsg)
				} else {
					this.items = data.result;
				}
			}, (response) => {
				console.error(response);
			});
		}
	}
</script>
