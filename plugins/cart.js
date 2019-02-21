export default function ({ store }) {
    store.commit("cart/setProductsInCart", store.$cookies.get('products') || {});
}