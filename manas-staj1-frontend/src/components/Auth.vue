<template>
  <div class="auth" v-show="isAuthOpened">
    <div class="select-auth">
      <button class="signIn" @click="choose('signin')">Sign in</button>
      <button class="logIn" @click="choose('login')">Log in</button>
    </div>
      <div class="signup" v-show="!this.$store.state.authorised">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Student number</label>
            <input v-model="number" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your student's number">
          </div>
          <div class="form-group">
            <label for="exampleInputName1">Full name</label>
            <input v-model="name" type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter your full name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password">
          </div>
          <button type="submit" class="btn btn-primary form-submit" @click.prevent="sendAuth">Submit</button>
        </form>
      </div>
      <div class="login" v-show="this.$store.state.authorised">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Student number</label>
            <input v-model="number" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your student's number">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password">
          </div>
          <button type="submit" class="btn btn-primary form-submit" @click.prevent="sendAuth">Submit</button>
        </form>
      </div>
  </div>
</template>

<script>
export default {
    name: 'my-auth',
    data() {
      return {
        number: '',
        password: '',
        name: '',
        isAuthOpened: true
      }
    },
    methods: {
      choose(method) {
        return this.$store.commit('chooseMethod', method)
      },
      login(isAdmin) {
        return this.$store.commit('loggedIn', isAdmin);
      },
      sendAuth() {
        if (!this.$store.state.authorised) {
          const data = {
            full_name: this.name,
            student_num: this.number,
            password: this.password
          }

          fetch(`${this.$store.state.url}/api/user/register`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(response => response.json())
            .then(data => {
                if(data.hasOwnProperty('error')) {
                  alert('This user is already exists!')
                } else {
                  localStorage.setItem('token', data.password)
                  localStorage.setItem('loggedIn', true)
                  localStorage.setItem('isAdmin', data.is_admin)
                  this.login(data.is_admin)
                  this.closeAuth()
                }
              }
            );


        } else {
          const data = {
            student_num: this.number,
            password: this.password
          }

          fetch(`${this.$store.state.url}/api/user/login`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(response => response.json())
            .then(data => {
              console.log(data)
              if (data.error === 'error_user') {
                alert('User not found!')
              } else if (data.error === 'error_password') {
                alert('Wrong password!')
              } else {
                localStorage.setItem('token', data.password)
                localStorage.setItem('loggedIn', true)
                localStorage.setItem('isAdmin', data.is_admin)
                this.login(data.is_admin)
                this.closeAuth()
              }
            })
        }


      },
      closeAuth() {
        this.isAuthOpened = false;
      }
    }
}
</script>

<style scoped>
.auth {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
}

.select-auth {
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
}

.signIn, .logIn {
  padding: 2px 3px;
  background-color: #1E2833;
  border-radius: 5px;
  margin: 5px;
  color: white;
}

.signup, .login {
    background-color: #1E2833;
    padding: 40px;
    border-radius: 20px;
    color: white;
}

.form-group {
  margin-bottom: 20px;
}

.form-submit {
  margin-top: 20px;
}
</style>