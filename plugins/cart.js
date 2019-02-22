export default function ({ store }) {
    store.dispatch("cart/setProductsInCart", store.$cookies.get('products') || {});
}