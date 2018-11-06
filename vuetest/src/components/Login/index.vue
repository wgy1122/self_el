<template>
    <div id="login">
        <transition name="fade" enter-active-class="fadeInDown"   :duration="{ enter: 1000, leave: 0 }">
            <div class="login_box" v-if="!registerShow">
                <el-form  :model="formLabelAlign" ref="formLabelAlign" :rules="rules">
                    <el-form-item label="" prop="username">
                        <el-input v-model="formLabelAlign.username" placeholder="用户名" clearable></el-input>
                    </el-form-item>
                    <el-form-item label=""  prop="password">
                        <el-input v-model="formLabelAlign.password" placeholder="密码" clearable type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="type" class="passactive">
                        <el-col :span="19">
                            <el-form-item>
                                <el-checkbox-group v-model="formLabelAlign.type">
                                    <el-checkbox label="记住账号密码" name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item class="unpassactive">
                                <span class="unpassword">忘记密码</span>
                            </el-form-item>
                        </el-col>
                    </el-form-item>

                    <div class="userRegister">
                        <span @click="goRegister">账号注册</span>
                    </div>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit('formLabelAlign')" >登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </transition>
        <transition name="fade" enter-active-class="fadeInDown" :duration="{ enter: 1000, leave:0 }">
            <lw-register v-if="registerShow" @emitGoLogin="emitGoLogin" ></lw-register>
        </transition>

    </div>
</template>

<script>
import Register from "../Register"
export default {
    name:"login",
    data(){
        return {
            labelPosition: 'right',
            formLabelAlign: {
                username: '',
                password: '',
                type: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入用户密码', trigger: 'blur' }
                ],
            },

            registerShow:false,
        }
    },
    methods:{
        //点击登录
        onSubmit(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    // console.log('error submit!!');
                    return false;
                }
            });
        },
        // 点击注册
        goRegister(){
            this.registerShow=true;
        },
        emitGoLogin(){
            this.registerShow=false;
        }

    },
    components:{
        "lw-register":Register,
    }
}
</script>

<style lang="scss" scoped>
#login{
    width: 100%;
    height: 100%;
    background: url(../../assets/images/loginback.png) no-repeat center;
    @include backgroundSize;
    @include alignCenterBox;
    .login_box{
        width: 302px;
        border: 1px solid #bbb;
        border-radius: 5px;
        padding: 30px;
        padding-bottom: 0;
        text-align: left;
        vertical-align: middle;
        display: inline-block;
        /deep/ .el-input{
            .el-input__inner{
                background:rgba(0,0,0,0.3);
                color:#ddd;
                border:1px solid #bbb;
                &:focus{
                    border:1px solid #409eff;
                }
            }
        };
        /deep/ button{
            width: 100%;
        };
        /deep/ .el-checkbox{
            color:#ddd;
            .el-checkbox__inner{
                background: none;
            }
        };
        .unpassword{
            color:#ddd;
            cursor: pointer;
            text-decoration: underline;
            &:hover{
                color:#409eff
            }
        };
        .passactive{
            margin-bottom: 0
        };
        .userRegister{
            padding-bottom: 20px;
            font-size: 14px;
            text-align: right;
            color:#ddd;
            span{
                cursor: pointer;
                &:hover{
                    color:#409eff
                }
            }
        };
        .unpassactive{
            text-align: right;
        };
        /deep/ .el-form-item__error{
            color:#be2632;
        }
    }
}
</style>
