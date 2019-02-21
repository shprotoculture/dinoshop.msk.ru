<template lang="pug">
    .toggle-menu
        button.burger(type="button" @click.prevent="toggleMobileMenu" :class="{'burger_active': mobileMenuIsActive}")
            span.burger__line.burger__line_f
            span.burger__line.burger__line_s
            span.burger__line.burger__line_t
</template>

<script>
export default {
    computed: {
        mobileMenuIsActive() {
            return this.$store.state.header.mobileMenuIsActive;
        }
    },
    methods: {
        toggleMobileMenu() {
            this.$store.commit('header/toggleMobileMenu');
        }
    }
}
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.burger {
	width: 50px;
	height: 50px;
	background: none;
	border: none;
	margin-left: -15px;
	position: relative;
	display: none;
	&__line {
		display: block;
		width: 20px;
		height: 2px;
		position: absolute;
		top: 50%;
		left: 15px;
		background: #000;
		transition: 0.25s 0.25s ease margin, 0.25s ease transform;

		&_f {
			margin-top: -7px;
		}

		&_s {
			margin-top: -1px;
		}

		&_t {
			margin-top: 5px;
		}
	}

	&_active {
		.burger__line {
			transition: 0.25s ease margin, 0.25s 0.25s ease transform;

			&_f,
			&_s {
				margin-top: -1px;
				transform: rotate(45deg);
			}

			&_t {
				margin-top: -1px;
				transform: rotate(-45deg);
			}
		}
	}
}

@media screen and (max-width: 991px) {
	.burger {
		display: block;
	}
}
</style>
