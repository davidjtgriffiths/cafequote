<template>
    <nav
        class="navbar is-link"
        role="navigation"
        aria-label="main navigation"
    >
        <div class="container is-max-desktop">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 ">
                Cafe la Vista
                </div>

                <a
                    @click.prevent="showMobileNav = !showMobileNav"
                    role="button"
                    class="navbar-burger"
                    :class="{ 'is-active' : showMobileNav }"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                    ref="navbarBurgerRef"
                >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

        <div id="navbarBasicExample"
            class="navbar-menu"
            :class="{ 'is-active' : showMobileNav }"
            ref="navbarMenuRef"
        >
            <div class="navbar-start">
                <button
                    v-if="storeAuth.user.id"
                    @click="logout"
                    class="button is-small i-info mt-3 ml-3"
                >
                    Log out {{ storeAuth.user.email }}
                </button>
            </div>

            <div class="navbar-end">
                <RouterLink
                    @click="showMobileNav = false"
                    to="/"
                    class="navbar-item"
                    active-class="is-active"
                >
                    Leads

                </RouterLink>
                <RouterLink
                    @click="showMobileNav = false"
                    to="/quotes"
                    class="navbar-item"
                    active-class="is-active"
                >
                    Quote
                </RouterLink>

            <!-- <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                More
                </a>

                <div class="navbar-dropdown">
                <a class="navbar-item">
                    About
                </a>
                <a class="navbar-item">
                    Jobs
                </a>
                <a class="navbar-item">
                    Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                    Report an issue
                </a>
                </div>
            </div> -->
            </div>
        </div>
        </div>
    </nav>
</template>

<script setup>
    import { ref } from 'vue'
    import { onClickOutside } from '@vueuse/core'
    import { useStoreAuth } from '@/stores/StoreAuth'

    const storeAuth = useStoreAuth()
    const showMobileNav = ref(false)
    const navbarMenuRef = ref(null)
    const navbarBurgerRef = ref(null)

    onClickOutside(navbarMenuRef, (event) => {
        showMobileNav.value = false
    },
    {
        ignore: [navbarBurgerRef]
    })

    const logout = () => {
        showMobileNav.value = false
        storeAuth.logoutUser()
    }

</script>

<style>
    @media (max-width: 1023px) {
        .navbar-menu {
            position: absolute;
            left: 0;
            width: 100%;
        }
    }
</style>