export default function ({ route, redirect }) {
    if (route.fullPath === "/catalog") {
        return redirect('/catalog/hit-prodazh')
    }
}