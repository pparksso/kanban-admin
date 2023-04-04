<template>
    <div class="side-bar">
        <div class="side-bar__logout"><button class="side-bar__logout-btn">Logout</button></div>
        <h1 class="side-bar__title">
            <NuxtLink to="/">
                Kanban <br />
                Admin
            </NuxtLink>
        </h1>
        <ul class="side-bar__link-list">
            <li><NuxtLink to="/user">- user</NuxtLink></li>
        </ul>
    </div>
</template>
<script></script>
<style lang="scss" scoped>
.side-bar {
    width: 15%;
    background-color: #222;
    &__logout {
        text-align: right;
        padding: 40px 50px;
        &-btn {
            color: #eee;
        }
    }
    &__title {
        text-align: center;
        margin-bottom: 80px;
        a {
            color: #eee;
            font-size: 50px;
        }
    }
    &__link-list {
        text-align: center;
        li {
            a {
                font-size: 24px;
                color: #eee;
                padding: 10px;
            }
        }
    }
}
</style>
