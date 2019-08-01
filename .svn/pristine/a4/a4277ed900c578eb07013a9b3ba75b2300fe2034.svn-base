// UI
<template>
<div class="content">
    <!-- 提交按钮以上的内容 -->
    <div class="container">
        <!-- 顶部导航栏 -->
        <mt-header  title="创建家委会">
            <router-link to="/my/myIndex/myIndex" slot="left">
            <mt-button icon="back"></mt-button>
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
                    <input type="button"  @click="popupVisible = true" class="rank-input" value="年级家委会">
                    
                     <mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
                        <!-- 此处slots为动态传入的值，通过computed来处理，数据通过vuex管理，由于数据为对象数组，需设置 value-key 属性来指定显示的字段名 -->
                        <mt-picker class="rank-picker" :slots="slots"  :visible-item-count="5" :show-toolbar="true"  ref="picker" value-key="cName">
                        <mt-button @click="handleCancel" class="cancel-btn">取消</mt-button>
                        <mt-button @click="handleConfirm($event)" btn-id="0" class="sure-btn">确认</mt-button>
                        </mt-picker>
                    </mt-popup>
                </div>
            </div>

            <!-- 地区： -->
            <div class="cell">
                <p>地区：</p>
                <!-- 输入框背景 -->
                <div class="input-bg">
                    <!-- 输入框 -->
                    <input type="button" @click="popupArea = true" class="rank-input" value="广东省深圳市宝安区">
                    <mt-popup v-model="popupArea" position="bottom" class="mint-popup">
                        <!-- 此处slots为动态传入的值，通过computed来处理，数据通过vuex管理，由于数据为对象数组，需设置 value-key 属性来指定显示的字段名 -->
                        <mt-picker class="rank-picker" :slots="areaSlots"  :visible-item-count="5" :show-toolbar="true"  ref="picker" value-key="cName">
                        <mt-button @click="handleCancel" class="cancel-btn">取消</mt-button>
                        <mt-button @click="handleConfirm($event)" btn-id="1" class="sure-btn" name="第一个">确认</mt-button>
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
                    <input type="button" @click="popupSchool = true" class="rank-input" value="新安中学">
                    <mt-popup v-model="popupSchool" position="bottom" class="mint-popup">
                        <!-- 此处slots为动态传入的值，通过computed来处理，数据通过vuex管理，由于数据为对象数组，需设置 value-key 属性来指定显示的字段名 -->
                        <mt-picker class="rank-picker" :slots="schoolSlots"  :visible-item-count="5" :show-toolbar="true"  ref="picker" value-key="cName">
                        <mt-button @click="handleCancel" class="cancel-btn">取消</mt-button>
                        <mt-button @click="handleConfirm($event)" btn-id="2" class="sure-btn">确认</mt-button>
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
                    <input type="button" @click="popupGrade = true" class="rank-input" value="一年级">
                    <mt-popup v-model="popupGrade" position="bottom" class="mint-popup">
                        <!-- 此处slots为动态传入的值，通过computed来处理，数据通过vuex管理，由于数据为对象数组，需设置 value-key 属性来指定显示的字段名 -->
                        <mt-picker class="rank-picker" :slots="gradeSlots"  :visible-item-count="5" :show-toolbar="true"  ref="picker" value-key="cName">
                        <mt-button @click="handleCancel" class="cancel-btn">取消</mt-button>
                        <mt-button @click="handleConfirm($event)" btn-id="3" class="sure-btn">确认</mt-button>
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
                    <input type="button" @click="popupClass = true" class="rank-input class-input" value="请选择">
                    <mt-popup v-model="popupClass" position="bottom" class="mint-popup">
                        <!-- 此处slots为动态传入的值，通过computed来处理，数据通过vuex管理，由于数据为对象数组，需设置 value-key 属性来指定显示的字段名 -->
                        <mt-picker class="rank-picker" :slots="classSlots"  :visible-item-count="5" :show-toolbar="true"  ref="picker" value-key="cName">
                        <mt-button @click="handleCancel" class="cancel-btn">取消</mt-button>
                        <mt-button @click="handleConfirm($event)" btn-id="4" class="sure-btn">确认</mt-button>
                        </mt-picker>
                    </mt-popup>
                </div>
            </div>
        </div>

        <!-- 已加入的家委会 -->
        <div class="bottom-hadJoin">
            <!-- section标题 -->
            <p class="bottom-joinTitle">已加入的家委会</p>

            <div class="bottom-cell">
                <!-- 主标题 -->
                <p class="bottomCell-title">一年级一班家委会</p>
                <!-- 副标题 -->
                <p class="bottomCell-subTitle">班级家委会</p>
            </div>

            <div class="bottom-cell">
                <!-- 主标题 -->
                <p class="bottomCell-title">一年级五班家委会</p>
                <!-- 副标题 -->
                <p class="bottomCell-subTitle">班级家委会</p>
            </div>
            
            
        </div>

    </div>
    
   
    <!-- 底部提交按钮 -->
    <button class="subMit-btn">提交</button>
</div>
</template>

<style>
.mint-popup-bottom {
    width: 100%;
}


</style>


// 样式
<style lang="scss" scoped>

.content {
    background: rgb(245,246,247);
    // 提交按钮以上的内容
    .container {
        position: absolute;
        bottom: 100px;
        top: 0px;
        width: 100%;
        background-color: white;
    }
    //  上方选择区
    .top-UI{
        top: 21px;
        .top-blank {
            background-color: white;
            height: 21px;
            width: 100%;;
        }
        // 顶部cell(输入框区)
        .cell {
            position: relative;
            height: 118px;
            background: white;
            // 左侧类别
            p{
                position: absolute;
                left: 30px;
                height: 89px;
                line-height: 89px;
                display: inline-block;
                text-align: right;

                color: rgb(49,51,64);
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

                color: rgb(49,51,64);
                font-size: 30px;
                background-color: rgb(244,245,246);
                text-align: left;

            }
            // 不可选时
            // .class-input {
            //     color: rgb(160,164,177);
            // }


        }
    }
    // 已加入的家委会
    .bottom-hadJoin {
        background-color: white;
        padding-bottom: 110px;
        // 底部 区标题:已加入的家委会
        .bottom-joinTitle {
            background-color: rgb(245,246,247);
            height: 63px;
            line-height: 63px;
            padding-left: 29px;

            color: rgb(160,164,177);
            font-size: 24px;
        }
        // 底部cell
        .bottom-cell {
            height: 128px;
            width: 100%;
            
            // 主标题
            .bottomCell-title{
                padding-top: 30px;
                padding-left: 30px;

                color: rgb(51,51,51);
                font-size: 30px;
                font-weight: bold;
            }
            // 副标题
            .bottomCell-subTitle {
                padding-top: 18px;
                padding-left: 30px;
                padding-bottom: 28px;

                font-size: 24px;
                color: rgb(160,164,177);
            }
        }
        
    }
    // 底部提交按钮
    .subMit-btn {
        background-color: rgb(4,147,240);
        font-size: 36px;
        position:fixed; 
        bottom:0;
        width: 100%;
        height: 100px;
        color: white;
        border: none;
    }
}


</style>

// 交互

<script>
  export default {
    
    data() {
        
      return{
        // 级别
        popupVisible: false,
        slots:[{values: ['班级家委会', '年级家委会', '校级家委会', '市级家委会']}],
        
        // 地区
        popupArea:false,
        areaSlots:[{values: ['广东省深圳市宝安区', '广东省深圳市福田区', '广东省深圳市罗湖区', '广东省深圳市南山区']}],
        // 学校
        popupSchool:false,
        schoolSlots:[{values: ['新安中学', '深圳外国语学校', '深圳中学', '深圳实验学校']}],
        
        // 年级
        popupGrade:false,
        gradeSlots:[{values: ['一年级', '二年级', '三年级', '四年级']}],
        
        // 班级
        popupClass:false,
        classSlots:[{values: ['一班', '二班', '三班', '四班']}],
      }
    },

    methods:{
        handleConfirm (e) {
            this.currentTags = this.$refs.picker.getValues()[0]
            this.popupVisible = false
            this.popupArea = false
            this.popupSchool = false
            this.popupGrade = false
            this.popupClass = false
            // btn 类型
            var msg = e.target.getAttribute('btn-id');
            if (msg == '0') {
                // 级别
                console.log (msg)
            } else if (msg == '1'){
                // 地区
                console.log (msg)
            } else if (msg == '2'){
                // 学校
                console.log (msg)
            } else if (msg == '3'){
                // 年级
                console.log (msg)
            } else {
                // 班级
                console.log (msg)
            }
            
            
        },

        handleCancel () {
        this.popupVisible = false
        this.popupArea = false
        this.popupSchool = false
        this.popupGrade = false
        this.popupClass = false
            console.log ('点击取消')
        },

    }
  }
</script>
