let stockProductos =concat(fruta,verdura,batido);


let fruta=[
    {id: 1, nombre: "Caqui", tipo: "Fruta", cantidad: 1, desc: "", precio: 2.50, kilos: "", img: './img.index/caquis.png'},
    {id: 2, nombre: "Cereza", tipo: "Fruta", cantidad: 1, desc: "", precio: 2.50, kilos: "", img: './img.index/cerezas.png'},
    {id: 3, nombre: "ciruela", tipo: "Fruta", cantidad: 1, desc: "", precio: 2.50, kilos: "", img: './img.index/ciruelas.png'},
    {id: 4, nombre: "Coco", tipo: "Fruta", cantidad: 1, desc: "", precio: 2.50, kilos: "", img: './img.index/cocos.png'},
    {id: 5, nombre: "Frambuesa", tipo: "Fruta", cantidad: 1, desc: "", precio: 2.50, kilos: "", img: './img.index/frambuesas.png'},
    {id: 6, nombre: "Fresa", tipo: "Fruta", cantidad: 1, desc: "", precio: 2.50, kilos: "", img: './img.index/fresas.png'},
    {id: 7, nombre: "Fruta Pasion", tipo: "Fruta", cantidad: 1, desc: "", precio: 2.50, kilos: "", img: './img.index/frutadelapasion.png'},
    {id: 8, nombre: "Granada", tipo: "Fruta", cantidad: 1, desc: "", precio: 2.50, kilos: "", img: './img.index/granada.png'},
    {id: 9, nombre: "Higos", tipo: "Fruta", cantidad: 1, desc: "", precio: 2.50, kilos: "", img: './img.index/higos.png'},
    {id: 10, nombre: "Kiwi", tipo: "Fruta", cantidad: 1, desc: "", precio: 2.50, kilos: "", img: './img.index/kiwi.png'},
    {id: 11, nombre: "Limon", tipo: "Fruta", cantidad: 1,desc: "", precio: 2.50, kilos: "", img: './img.index/limones.png'},
    {id: 12, nombre: "Manzana", tipo: "Fruta", cantidad: 1, desc: "", precio: 3.20, kilos: "", img: './img.index/manzana.png'},
    {id: 13, nombre: "Melocoton", tipo: "Fruta", cantidad: 1, desc: "", precio: 3.20, kilos: "", img: './img.index/melocotones.png'},
    {id: 14, nombre: "Melon", tipo: "Fruta", cantidad: 1, desc: "", precio: 3.20, kilos: "", img: './img.index/melones.png'},
    {id: 15, nombre: "Mora", tipo: "Fruta", cantidad: 1, desc: "", precio: 3.20, kilos: "", img: './img.index/moras.png'},
    {id: 16, nombre: "Naranja", tipo: "Fruta", cantidad: 1, desc: "", precio: 3.20, kilos: "", img: './img.index/naranjas.png'},
    {id: 17, nombre: "Papaya", tipo: "Fruta", cantidad: 1, desc: "", precio: 3.20, kilos: "", img: './img.index/papayas.png'},
    {id: 18, nombre: "Pera", tipo: "Fruta", cantidad: 1, desc: "", precio: 3.20, kilos: "", img: './img.index/peras.png'},
    {id: 19, nombre: "Pinia", tipo: "Fruta", cantidad: 1, desc: "", precio: 3.20, kilos: "", img: './img.index/pinias.png'},
    {id: 20, nombre: "Platano", tipo: "Fruta", cantidad: 1, desc: "", precio: 3.20, kilos: "", img: './img.index/platano.png'},
    {id: 21, nombre: "Sandia", tipo: "Fruta", cantidad: 1, desc: "", precio: 3.20, kilos: "", img: './img.index/sandias.png'},
    {id: 22, nombre: "Uva", tipo: "Fruta", cantidad: 1, desc: "", precio: 3.20, kilos: "", img: './img.index/uvas.png'}
]
let verdura=[
    {id: 23, nombre: "Ajos", tipo: "verdura", cantidad: 1, desc: "", precio: 1.75, kilos: "", img: './img.verduras/ajos.png'},
    {id: 24, nombre: "Alcachofa", tipo: "Verdura", cantidad: 1, desc: "", precio: 1.75, kilos: "", img: './img.verduras/alcachofas.png'},
    {id: 24, nombre: "Brenjena", tipo: "Verdura", cantidad: 1, desc: "", precio: 1.75, kilos: "", img: './img.verduras/berenjenas.png'},
    {id: 25, nombre: "Brocoli", tipo: "Verdura", cantidad: 1, desc: "", precio: 1.75, kilos: "", img: './img.verduras/brocolis.png'},
    {id: 26, nombre: "Calabacin", tipo: "Verdura", cantidad: 1, desc: "", precio: 1.75, kilos: "", img: './img.verduras/calabacin.png'},
    {id: 27, nombre: "Calabaza", tipo: "Verdura", cantidad: 1, desc: "", precio: 1.75, kilos: "", img: './img.verduras/calabaza.png'},
    {id: 29, nombre: "Coliflor", tipo: "Verdura", cantidad: 1, desc: "", precio:1.75 , kilos: "", img: './img.verduras/coliflor.png'},
    {id: 30, nombre: "Espinaca", tipo: "Verdura", cantidad: 1, desc: "", precio:1.75 , kilos: "", img: './img.verduras/espinacas.png'},
    {id: 31, nombre: "Guisante", tipo: "Verdura", cantidad: 1, desc: "", precio: 4.80, kilos: "", img: './img.verduras/guisantes.png'},
    {id: 32, nombre: "Haba", tipo: "Verdura", cantidad: 1, desc: "", precio: 4.80, kilos: "", img: './img.verduras/habas.png'},
    {id: 33, nombre: "Judias Verdes", tipo: "Verdura", cantidad: 1, desc: "", precio: 4.80, kilos: "", img: './img.verduras/judiasverdes.png'},
    {id: 34, nombre: "Lechuga", tipo: "Verdura", cantidad: 1, desc: "", precio: 4.80, kilos: "", img: './img.verduras/lechugas.png'},
    {id: 35, nombre: "Maiz", tipo: "Verdura", cantidad: 1, desc: "", precio: 4.80, kilos: "", img: './img.verduras/maiz.png'},
    {id: 36, nombre: "Patata", tipo: "Verdura", cantidad: 1, desc: "", precio: 4.80, kilos: "", img: './img.verduras/patatas.png'},
    {id: 37, nombre: "Pepino", tipo: "Verdura", cantidad: 1, desc: "", precio: 4.80, kilos: "", img: './img.verduras/pepinos.png'},
    {id: 38, nombre: "Pimiento", tipo: "Verdura", cantidad: 1, desc: "", precio: 4.80, kilos: "", img: './img.verduras/pimientos.png'},
    {id: 39, nombre: "Puerro", tipo: "Verdura", cantidad: 1, desc: "", precio: 4.80, kilos: "", img: './img.verduras/puerro.png'},
    {id: 40, nombre: "Remolacha", tipo: "Verdura", cantidad: 1, desc: "", precio: 2.10, kilos: "", img: './img.verduras/remolachas.png'},
    {id: 41, nombre: "Tomate", tipo: "Verdura", cantidad: 1, desc: "", precio: 2.10, kilos: "", img: './img.verduras/tomates.png'},
    {id: 42, nombre: "Zanahoria", tipo: "Verdura", cantidad: 1, desc: "", precio: 2.10, kilos: "", img: './img.verduras/zanahorias.png'},
    {id: 43, nombre: "Repollo", tipo: "Verdura", cantidad: 1, desc: "", precio:2.10, kilos: "", img: './img.verduras/repollo.png'},
   
    
]
let batido=[
    {id: 44, nombre: "Arandano", tipo: "Smoothie", cantidad: 1, desc: "", precio: 4.90, kilos: "", img: './img.smoothies/s..png'},
    {id: 45, nombre: "Frambuesa", tipo: "Smoothie", cantidad: 1, desc: "", precio: 4.90, kilos: "", img: './img.smoothies/s.frambuesa.png'},
    {id: 46, nombre: "Melocoton", tipo: "Smoothie", cantidad: 1, desc: "", precio: 4.90, kilos: "", img: './img.smoothies/s.melocoton.png'},
    {id: 47, nombre: "Melon", tipo: "Smoothie", cantidad: 1, desc: "", precio: 4.90, kilos: "", img: './img.smoothies/s.melon.png'},
    {id: 48, nombre: "Mora", tipo: "Smoothie", cantidad: 1, desc: "", precio: 4.90, kilos: "", img: './img.smoothies/s.mora.png'},
    {id: 52, nombre: "Sandia", tipo: "Smoothie", cantidad: 1, desc: "", precio: 4.90, kilos: "", img: './img.smoothies/s.sandia.png'},
    {id: 53, nombre: "Fresa", tipo: "Smoothie", cantidad: 1, desc: "", precio: 4.90, kilos: "", img: './img.smoothies/s.fresa.png'},
    {id: 54, nombre: "Arandano", tipo: "Smoothie", cantidad: 1, desc: "", precio: 4.90, kilos: "", img: './img.smoothies/s.arandano.png'}
]