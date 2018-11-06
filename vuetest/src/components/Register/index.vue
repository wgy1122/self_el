<template>
    <div id="register">

        <el-form :model="registerModel" ref="registerModel" :rules="rules"  label-width="80px" class="demo-ruleForm">

            <el-form-item label="用户名" prop="username">
                <el-input  v-model="registerModel.username" clearable autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input  v-model="registerModel.password" clearable type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkpassword">
                <el-input  v-model="registerModel.checkpassword" clearable type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop="phoneNumber">
                <el-input  v-model="registerModel.phoneNumber" clearable  autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input v-model.number="registerModel.age" clearable></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="registerModel.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onRegister('registerModel')" >注册</el-button>
            </el-form-item>

        </el-form>
        <!-- 返回登录 -->
        <div class="back_login" @click="goLogin">
            <div class="back_img"></div>
        </div>
    </div>
</template>

<script>
var VM;
export default {
    name:"register",
    data(){

        return {
            registerModel:{
                username:"",
                password:"",
                checkpassword:"",
                phoneNumber:"",
                age:"",
                sex:"男"
            },
            rules:{
                username:[
                    { validator: validateUserName, trigger: 'blur' }
                ],
                password:[
                    { validator: validatePassWord, trigger: 'blur' }
                ],
                checkpassword:[
                    { validator: validateCheckPassWord, trigger: 'blur' }
                ],
                phoneNumber:[
                    { validator: validatephoneNumber, trigger: 'blur' }
                ],
                age: [
                    { validator: checkAge, trigger: 'blur' }
                ]
            },

        }
    },
    created(){
        VM=this;
    },
    methods:{
        onRegister(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');

                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        //返回登陆
        goLogin(){
            this.$emit("emitGoLogin")
        }
    }
};
//注册验证用户名
var validateUserName = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入用户名'));
    } else {
        callback();
    }
};

//注册验证用户密码
var validatePassWord = (rule, value, callback) => {

    if (value === '') {
        callback(new Error('请输入密码'));
    } else {
        if (VM.registerModel.checkpassword !== '') {
            VM.$refs.registerModel.validateField('checkpassword');
        }
        callback();
    }
};
//注册验证确认密码
var validateCheckPassWord = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码'));
    } else if (value !== VM.registerModel.password) {
        callback(new Error('两次输入密码不一致!'));
    } else {
        callback();
    }
};
var validatephoneNumber = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入手机号码'));
    } else {
        var reg=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        if(!reg.test(value)){
            callback(new Error('请输入正确的手机号码'));
        }else{
            callback();
        }
    }
};
//注册验证用户年龄
var checkAge = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('年龄不能为空'));
    }
    // setTimeout(() => {
        if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
        } else {
            if (value < 18) {
                callback(new Error('必须年满18岁'));
            } else {
                callback();
            }
        }
    // }, 1000);
};
</script>

<style lang="scss">
#register{
    width: 302px;
    border: 1px solid #bbb;
    border-radius: 5px;
    padding: 30px;
    padding-bottom: 0;
    text-align: left;
    vertical-align: middle;
    display: inline-block;
    position: relative;
    overflow: hidden;
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
    /deep/ .el-radio__inner{
        background: none
    };
    /deep/ .el-radio{
        color:#ddd
    }
    .el-form-item__label{
        color:#ddd;
    }
    /deep/ button{
        width: 100%;
    };
    .back_login{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 0;
        border-bottom: 100px solid #f60;
        border-right: 100px solid transparent;
        cursor: pointer;
        opacity: 0.3;
        .back_img{
            width: 50px;
            height: 50px;
            background: url(../../assets/images/back_login.png) no-repeat center;
            @include backgroundSize;
            border-radius: 50%;
            overflow: hidden;
            position: absolute;
            left: 5px;
            bottom: -97px
        }
    };
    /deep/ .el-form-item__error{
        color:#be2632;
    }
}
</style>
