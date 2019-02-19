export const state = () => ({
    siteNavigationList: [
        { title: 'Dinoshop', to: '/' },
        { title: 'Каталог', to: '/catalog' },
        { title: 'Сертификаты', to: '/certificates' },
        { title: 'Подарок на день рождение', to: '/gift' },
        { title: 'Доставка', to: '/delivery' },
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