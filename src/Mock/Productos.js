const productos = [
    {
      id: "1",
      nombre: "Nike Elemental Premium",
      descripcion:
        "La mochila Nike Elemental es un básico para guardar tus cosas y cuenta con un diseño elegante y moderno confeccionado con poliéster resistente ",
      categoria: "Mochila Nike",
      precio: "150000",
      stock: 10,
      img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b1baacf6-2a4c-4e19-bc6a-94375f70e6b8/elemental-mochila-zJ4xTs.png",
    },
    {
      id: "2",
      nombre: "París Saint-Germain",
      descripcion:
        "La mochila del París Saint-Germain es ideal para el día a día. El gran compartimento con cremallera ofrece espacio para las zapatillas o un conjunto de ropa adicional para el gimnasio.",
      categoria: "Mochila Nike",
      precio: "250000",
      stock: 9,
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/24e435a0-72d1-4eaf-8def-e1b0e02ac701/paris-saint-germain-mochila-G8Fn0G.png",
    },
    {
      id: "3",
      nombre: "Jordan",
      descripcion:
        "Desde la escuela hasta tu próxima aventura, la mochila Jordan te acompaña a todas partes. Destaca con su estilo acolchado y elevado con numerosos bolsillos para guardar tus cosas.",
      categoria: "Mochila Nike",
      precio: "180000",
      stock: 8,
      img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5735317c-0a06-4858-ac78-6c2948d70c2e/jordan-mochila-PFx5zb.png",
    },
    {
      id: "4",
      nombre: "Nike",
      descripcion:
        "La mochila Nike es ideal tanto para entrenar como para ir a trabajar. En el gran compartimento con cremallera caben unas zapatillas o un conjunto de ropa adicional para el gimnasio.",
      categoria: "Mochila Nike",
      precio: "100000",
      stock: 10,
      img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c2cddde1-362e-4710-995d-36f57030107a/elemental-mochila-6TwSPH.png",
    },
    {
      id: "5",
      nombre: "Nike Brasilia 9,5",
      descripcion:
        "La mochila Nike Brasilia te ofrece un montón de espacio organizado para que mantengas tu equipación ordenada y preparada para tu próxima aventura, aunque tan solo sea ir a clase o al gimnasio.",
      categoria: "Mochila Nike",
      precio: "140000",
      stock: 6,
      img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c34d55f6-1caf-4486-99d1-87365103b1e6/brasilia-95-mochila-de-entrenamiento-bsRPlW.png",
    },
    {
      id: "6",
      nombre: "Nike Hayward",
      descripcion:
        "El modelo Nike Hayward ofrece protección, y la malla de la parte delantera permite llevar una chaqueta o camiseta de manga larga de forma segura sin ralentizar tu movimiento.",
      categoria: "Mochila Nike",
      precio: "190000",
      stock: 9,
      img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1d6674f4-73ff-469f-a4aa-b23de857dec1/hayward-mochila-XJDbGD.png",
    },
    {
      id: "7",
      nombre: "MORRAL DAILY II",
      descripcion:
        "Este morral adidas es tu aliado en tus desplazamientos diarios. Llévalo a donde vayas con las cómodas correas.",
      categoria: "Mochila Adidas",
      precio: "109000",
      stock: 9,
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6c354af5006c4b25ad37ae7a00cc96a6_9366/Morral_Daily_II_(UNISEX)_Azul_HM9154_01_standard.jpg",
    },
    {
      id: "8",
      nombre: "MORRAL CLÁSICO",
      descripcion:
        " Está confeccionado en tejido hecho con materiales reciclados, para que te sientas bien al usarlo.",
      categoria: "Mochila Adidas",
      precio: "55000",
      stock: 8,
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99f04ab057c14648a6f9abc200947307_9366/Morral_Clasico_Adicolor_Negro_GD4556_01_standard.jpg",
    },
    {
      id: "9",
      nombre: "MORRAL POWER VI",
      descripcion:
        "Hecho con una serie de materiales reciclados y al menos un 60 % de contenido reciclado, este producto representa solo una de nuestras soluciones para acabar con los residuos plásticos.",
      categoria: "Mochila Adidas",
      precio: "210000",
      stock: 10,
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/441f7bf366214bc487f2ad9e01210c69_9366/Morral_Power_VI_Negro_HB1324_01_standard.jpg",
    },
    {
      id: "10",
      nombre: "MORRAL ADICOLOR",
      descripcion:
        "El amplio compartimento principal y los bolsillos frontales y laterales te permiten mantener tus objetos personales organizados y a la mano.",
      categoria: "Mochila Adida",
      precio: "120000",
      stock: 6,
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6a939f4fb56d45ebb82aae610143585d_9366/Morral_Adicolor_Rosa_HK2625_01_standard.jpg",
    },
    {
      id: "11",
      nombre: "MORRAL CLASSIC BADGE OF SPORT 3 RAYAS",
      descripcion:
        "Está hecho de un tejido plano de poliéster resistente que lo hará lucir como nuevo, incluso si lo usas a diario.",
      categoria: "Mochila Adidas",
      precio: "170000",
      stock: 9,
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4963ecd68e054f118190ae7a00b6c5ae_9366/Morral_Classic_Badge_of_Sport_3_Rayas_Beige_HM9146_01_standard.jpg",
    },
];
  
export default productos;