<template>
    <div class="footer">
      <my-container>
        <div class="footer-inner">
          <div class="footer-logo">
            <img class="logo-img" src="../assets/footer/logo.png" alt="">
          </div>
          <hr>
          <div class="footer-top">
            <div class="footer-top__list">
              <a href="" class="link">About</a>
              <a href="" class="link">Team</a>
              <a href="" class="link">Contact Us</a>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="footer-info">
              <a href="" class="link terms">Terms & Conditions</a>
              <a href="" class="link privacy">Privacy Policy</a>
            </div>
            <div class="footer-socials">
              <a href="" class="social-media facebook">
                <img src="../assets/footer/social-media/facebook.svg" alt="">  
              </a>
              <a href="" class="social-media twitter">
                <img src="../assets/footer/social-media/twitter.svg" alt="">  
              </a>
              <a href="" class="social-media instagram">
                <img src="../assets/footer/social-media/instagram.svg" alt="">    
              </a>
            </div>
          </div>
        </div>
      </my-container>
    </div>
</template>

<script>
export default {
    name: 'my-footer'
}
</script>

<style scoped>
.footer {
  background: #1E2833;
  color: white;
}
.footer-inner {
  padding: 30px 30px 50px;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
}
.footer-top {
  margin: 50px 0;
}
.social-media {
  margin-left: 20px;
}
.social-media:first-child {
  margin-left: none;
}
.link {
  text-decoration: none;
  color: white;
  margin-right: 20px;
}
.logo-img {
  width: 50px;
  height: 50px;
}
</style>
