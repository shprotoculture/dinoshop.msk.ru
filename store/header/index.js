export const state = () => ({
    siteNavigationList: [
        { title: 'Dinoshop', to: '/', exact: true },
        { title: 'Каталог', to: '/catalog', exact: false },
        { title: 'Сертификаты', to: '/certificates', exact: true },
        { title: 'Подарок на день рождение', to: '/gift', exact: true },
        { title: 'Доставка', to: '/delivery', exact: true },
    ],
    mobileMenuIsActive: false
});

export const mutations = {
    toggleMobileMenu(state) {
        state.mobileMenuIsActive = !state.mobileMenuIsActive;
    },
    closeMobileMenu(state) {
        state.mobileMenuIsActive = false;
    }
};