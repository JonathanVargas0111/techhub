import { Category, Menu, Product, ProductCart } from "@/types";
export const menu: Menu[] = [
    {
      label: "Inicio",
      icon: "fi fi-rr-home",
      href: "/",
    },
    {
      label: "Menu",
      icon: "fi fi-rr-rectangle-list",
      href: "/menu",
    },
    {
      label: "Ordenes",
      icon: "fi fi-rr-ballot-check",
      href: "/orders",
    },
    {
      label: "Historial",
      icon: "fi fi-rr-time-past",
      href: "/history",
    },
    {
      label: "Facturas",
      icon: "fi fi-rr-file-invoice-dollar",
      href: "/bills",
    },
  ];

  export const categories: Category[] = [
    {
      category: "Todos",
    },
    {
      category: "Teléfonos",
    },
    {
      category: "Laptops",
    },
    {
      category: "Auriculares",
    },
    {
      category: "Tablets",
    },
    {
      category: "Cámaras",
    },
    {
      category: "Accesorios",
    },
    {
      category: "Smartwatches",
    },
    {
      category: "Drones",
    },
    {
      category: "Consolas",
    },
  ];
  
  export const products: Product[] = [
    {
      name: "iPhone 14 Pro",
      category: "Teléfonos",
      image:
        "https://img.freepik.com/foto-gratis/vista-frontal-smartphone-iphone-14-pro-negro_125540-2475.jpg?w=2000",
      discount: 10,
      stock: 50,
      price: 1299.99,
      description:
        "El iPhone 14 Pro con pantalla OLED y triple cámara. Potencia de última generación.",
    },
    {
      name: "MacBook Pro M2",
      category: "Laptops",
      image:
        "https://img.freepik.com/foto-gratis/macbook-pro-espacio-gris-teclado-pantalla_125540-3081.jpg?w=2000",
      discount: 5,
      stock: 30,
      price: 2399.99,
      description:
        "Potente MacBook Pro con chip M2 para tareas exigentes, pantalla Retina de 13 pulgadas.",
    },
    {
      name: "AirPods Pro",
      category: "Auriculares",
      image:
        "https://img.freepik.com/foto-gratis/auriculares-bluetooth-sobre-fondo-blanco_125540-3073.jpg?w=2000",
      discount: 0,
      stock: 0,
      price: 199.99,
      description:
        "Auriculares inalámbricos con cancelación activa de ruido y calidad de sonido superior.",
    },
    {
      name: "iPad Pro",
      category: "Tablets",
      image:
        "https://img.freepik.com/foto-gratis/primera-plana-tableta-digital-estilo-elegante_23-2148034794.jpg?w=2000",
      discount: 7,
      stock: 40,
      price: 999.99,
      description:
        "Pantalla Liquid Retina, procesador M1 y compatibilidad con el Apple Pencil.",
    },
    {
      name: "GoPro Hero 10",
      category: "Cámaras",
      image:
        "https://img.freepik.com/foto-gratis/gopro-camara-accion-compacta-nueva_125540-3554.jpg?w=2000",
      discount: 12,
      stock: 60,
      price: 499.99,
      description:
        "Cámara de acción de alta resolución, resistente al agua y con estabilización HyperSmooth.",
    },
    {
      name: "Cargador inalámbrico",
      category: "Accesorios",
      image:
        "https://img.freepik.com/foto-gratis/cargador-inalambrico-sobre-fondo-blanco_125540-3456.jpg?w=2000",
      discount: 10,
      stock: 150,
      price: 39.99,
      description:
        "Cargador inalámbrico rápido compatible con dispositivos Qi. Diseño delgado y portátil.",
    },
    {
      name: "Apple Watch Series 7",
      category: "Smartwatches",
      image:
        "https://img.freepik.com/foto-gratis/reloj-inteligente-moderno-pantalla-touch_125540-2851.jpg?w=2000",
      discount: 8,
      stock: 70,
      price: 429.99,
      description:
        "Smartwatch con pantalla Retina, sensor de oxígeno en sangre y resistencia al agua.",
    },
    {
      name: "DJI Mini 3",
      category: "Drones",
      image:
        "https://img.freepik.com/foto-gratis/drone-moderno-vuela-cielo-azul_125540-2567.jpg?w=2000",
      discount: 5,
      stock: 35,
      price: 799.99,
      description:
        "Drone plegable con cámara 4K, control de vuelo preciso y transmisión en vivo.",
    },
    {
      name: "PlayStation 5",
      category: "Consolas",
      image:
        "https://img.freepik.com/foto-gratis/controlador-juegos-ps5-aislado-sobre-fondo-blanco_125540-2429.jpg?w=2000",
      discount: 3,
      stock: 20,
      price: 599.99,
      description:
        "Consola de última generación con soporte para juegos en 4K y alta tasa de refresco.",
    },
  ];
  
  export const productsCart: ProductCart[] = [
    {
      name: "iPhone 14 Pro",
      image:
        "https://img.freepik.com/foto-gratis/vista-frontal-smartphone-iphone-14-pro-negro_125540-2475.jpg?w=2000",
      price: 1299.99,
      quantity: 1,
      description:
        "El iPhone 14 Pro con pantalla OLED y triple cámara. Potencia de última generación.",
    },
    {
      name: "AirPods Pro",
      image:
        "https://img.freepik.com/foto-gratis/auriculares-bluetooth-sobre-fondo-blanco_125540-3073.jpg?w=2000",
      price: 199.99,
      quantity: 1,
      description:
      "Auriculares inalámbricos con cancelación activa de ruido y calidad de sonido superior.",
  },
    {
      name: "GoPro Hero 10",
      image:
        "https://img.freepik.com/foto-gratis/gopro-camara-accion-compacta-nueva_125540-3554.jpg?w=2000",
      price: 499.99,
      quantity: 1,
      description:
      "Cámara de acción de alta resolución, resistente al agua y con estabilización HyperSmooth.",
  },
  ];
  