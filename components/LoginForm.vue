<template>
    <form class="login-form">
        <div class="login-form__input-box">
            <label for=""><span>ID</span><input type="text" /></label>
            <label for=""><span>PW</span><input id="" type="password" name="" /></label>
        </div>
        <div class="login-form__btn"><button>Login</button></div>
    </form>
</template>
<script></script>
<style lang="scss" scoped>
.login-form {
    display: flex;
    flex-direction: column;
    &__input-box {
        margin-bottom: 40px;
        label {
            display: flex;
            align-items: flex-end;
            &:first-child {
                margin-bottom: 20px;
            }
            span {
                width: 40px;
                font-size: 20px;
            }
            input {
                flex-grow: 1;
                border-bottom: 2px solid #aaa;
                padding-bottom: 5px;
            }
        }
    }
    &__btn {
        text-align: center;
        button {
            background-color: blueviolet;
            padding: 7px 20px;
            font-size: 20px;
            border-radius: 5px;
            color: #ddd;
            font-weight: 700;
        }
    }
}
</style>
