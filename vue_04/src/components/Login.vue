<template>
  <div class="main_container">
    <div class="main">
      <!-- logo图标 -->
      <div class="logo-box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 输入框 -->
      <el-form
        ref="loginform"
        :model="form"
        :rules="rules"
        label-width="0px"
        class="loginForm"
      >
        <el-form-item label="" prop="name">
          <el-input
            class="input_user"
            prefix-icon="el-icon-user-solid"
            v-model="form.name"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="" prop="pwd">
          <el-input
            type="password"
            prefix-icon="el-icon-lock"
            v-model="form.pwd"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="" class="btns">
          <el-button type="primary" @click="submitForm('loginform')"
            >登录</el-button
          >
          <el-button type="info" @click="resetForm('loginform')"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
// import { ElMessage } from "element-plus";
export default {
  data() {
    return {
      form: {
        name: "",
        pwd: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入登陆名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((res) => {
        if (res) {
          //   console.log("登陆成功");
          //   ElMessage.success({
          //     message: "恭喜你，这是一条成功消息",
          //     type: "success",
          //   });

          //vue axios 发起网络请求
          this.axios.post("/user/login", this.form).then((response) => {
            // console.log(response.data);
            if (response.data.code == "00000") {

              // 把token 存入sessionStorage
              window.sessionStorage.setItem('token',response.data.token);

              this.$message.success("登陆成功");
              this.$router.push("/home");
            }
          });
        } else {
          console.log("登陆失败");
          this.$message.error("登陆失败");
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.main_container {
  height: 100%;
  background-color: #2b4b6b;
}
.main {
  width: 452px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.logo-box {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #bbb;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.loginForm {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
