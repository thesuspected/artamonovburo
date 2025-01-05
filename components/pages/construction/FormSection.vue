<template>
    <Section>
        <Container>
            <div class="Title">
                <h4 class="infant-font">Вместе создадим дом, который <br /></h4>
                <h4 class="SecondTitle infant-font">
                    будет полностью соответствовать <br />
                    вашим ожиданиям и предпочтениям
                </h4>
            </div>
            <img class="house_4" src="/public/img/construction/house_4.png" alt="" />
           <div class="request"> <p>Давайте познакомимся поближе! Оставьте заявку,<br> и мы вместе с вами погрузимся в вашу задачу</p>
            <div class="wrapper">
    <form action="#">
        <div class="input-field">
      <input type="Name" required>
      <label>Ваше имя</label>
      </div>
      <div class="input-field">
        <input type="password" required>
        <label>Ваш телефон</label>
      </div>
      
    </form>
<MBtn class="Send">Отправить</MBtn>

  </div>
  <p class="info">Нажимая кнопку «Отправить» вы даёте согласие на обработку персональных данных</p>
        </div>
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
import MBtn from "~/components/buttons/MBtn.vue";
</script>

<style lang="scss" scoped>
.Title {
    z-index: 1;
    position: relative;
    h4 {
        margin-left: 673px;
    }

    .SecondTitle {
        margin-left: 525px;
    }
}
.house_4 {
    position: absolute;
    z-index: 0;
    margin-left: 15px;
    margin-top: -80px;
}
.request{
    p{
        margin-left: 822px;
        margin-top: 150px;
    }
    .wrapper{
        margin-left: 790px;
        border-radius: 8px;
        padding: 30px;
        text-align: center;
        form {
            display: flex;
            flex-direction: column;
        }
        .input-field{
            position: relative;
            border-bottom: 2px solid black;
            margin: 15px 0;
            label {
                position: absolute;
                color: black;
                top: 50%;
                left: 0%;
                transform: translateY(-50%);
                font-size: 16px;
                pointer-events: none;
                transition: 0.15s ease;
                margin-left: 20px;
            }
            input{
                width: 100%;
                height: 40px;
                color: black;
                background: transparent;
                border: none;
                outline: none;
                font-size: 16px;
            }
            input:focus~label,
            input:valid~label {
                font-size: 0.8rem;
                top: 10px;
                transform: translateY(-120%);
            }
        }
        .Send{
            width: 100%;
border-radius: 5px;
margin-top: 30px;
        }
        }
       .info{
        margin-top: -10px;
        font-size: 12px;
       }

}
</style>
