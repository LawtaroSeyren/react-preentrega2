const products = [
    {id: "1", nombre: "Sofa", precio: 280, img: "../imgProducts/sofa.jpg", idCat:"1", desc: "Sofá steampunk elegante con detalles metálicos envejecidos y cómodos cojines de plumas de alta calidad."},
    {id: "2", nombre: "Lámpara de piso", precio: 120, img: "../imgProducts/lampara.jpg", idCat:"1", desc: "Lámpara de piso steampunk elegante con base de metal y pantalla de vidrio ahumado de alta calidad. La iluminación suave y cálida que proporciona crea una atmósfera acogedora en cualquier espacio."},
    {id: "3", nombre: "Inodoro", precio: 315, img: "../imgProducts/inodoro.jpg", idCat:"2", desc: "Inodoro steampunk sofisticado con detalles ornamentales intrincados. Diseñado para una experiencia única en el baño, este inodoro combina la elegancia del estilo victoriano con la funcionalidad moderna. Una pieza imprescindible."},
    {id: "4", nombre: "Ducha", precio: 190, img: "../imgProducts/ducha.jpg", idCat:"2", desc: "Impresionante pieza de arte funcional. Diseño industrial único y sofisticado. El acabado envejecido del metal aportan autenticidad y estilo, mientras que la tecnología moderna garantiza una experiencia de ducha relajante y revitalizante"},
    {id: "5", nombre: "Cama de dos plazas", precio: 240, img: "../imgProducts/cama.jpg", idCat:"3", desc: "Cama de dos plazas steampunk con elementos de relojes y tuberías que añaden un toque de autenticidad y estilo. El marco sólido y resistente garantiza una noche de sueño reparador."},
    {id: "6", nombre: "Ropero", precio: 220, img: "../imgProducts/ropero.jpg", idCat:"3", desc: "Ropero steampunk de metal y detalles ornamentales. Amplio espacio de almacenamiento. Estilo y funcionalidad en uno"},
    {id: "7", nombre: "Escritorio", precio: 170, img: "../imgProducts/escritorio.jpg", idCat:"4", desc: "Escritorio steampunk de metal envejecido y detalles ornamentales. Amplio espacio de trabajo y almacenamiento integrado. Estilo y funcionalidad en uno."},
    {id: "8", nombre: "Silla de oficina", precio: 90, img: "../imgProducts/silla.jpg", idCat:"4", desc: "Silla de oficina steampunk de metal envejecido y detalles ornamentales. Confortable y elegante. El complemento perfecto para cualquier oficina de estilo industrial."},
    {id: "9", nombre: "Reposera", precio: 110, img: "../imgProducts/reposera.jpg", idCat:"5", desc: "Reposera steampunk con diseño ergonómico y elegante. La adición perfecta para cualquier patio de estilo industrial."},
    {id: "10", nombre: "Jardín vertical", precio: 230, img: "../imgProducts/jardinvertical.jpg", idCat:"5", desc: "Jardín vertical steampunk con tuberías expuestas y distintas plantas incorporadas. Diseño único y funcionalidad. La solución perfecta para espacios pequeños con estilo industrial."}
]


export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            resolve(products)
        }, 100) 
    })
}

export const getProduct = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const product = products.find(prod => prod.id === id);
            resolve(product);
        }, 100)
    })
}

export const getProductsByCategory = (idCategory) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productCategory = products.filter(prod => prod.idCat === idCategory);
            resolve(productCategory);
        },100)
    })
}
