/**
 * MoreFix - Products Store (LocalStorage)
 * Developed by Mohammad Radwan
 * © 2025 MoreFix
 */

export interface Product {
  id: string
  title: string
  price: number
  description: string
  category: string
  condition: "Neuf" | "Occasion"
  images: string[]
  createdAt: string
  originalPrice?: number
  rating?: number
  reviews?: number
  inStock?: boolean
  features?: string[]
}

const STORAGE_KEY = "morefix_products"

// Default products
const defaultProducts: Product[] = [
  {
    id: "1",
    title: "Lenovo ThinkPad T480",
    price: 289,
    originalPrice: 450,
    description: "PC portable professionnel reconditionné - Intel Core i5, 8Go RAM, 256Go SSD",
    category: "Ordinateurs",
    condition: "Occasion",
    images: [
      "/images/lenovo_t480.jpeg",
      "/images/thinkpad_t480_dark.png",
      "/images/thinkpad_t480_red.png",
      "/images/thinkpad_t480_colorful.jpeg"
    ],
    rating: 4.5,
    reviews: 28,
    inStock: true,
    features: ["Intel Core i5-8250U", "8Go DDR4", "256Go SSD", "14\" Full HD", "Windows 11 Pro"],
    createdAt: new Date().toISOString()
  },
  {
    id: "2",
    title: "Dell Latitude 5400",
    price: 320,
    originalPrice: 520,
    description: "PC portable business reconditionné - Intel Core i5, 16Go RAM, 512Go SSD",
    category: "Ordinateurs",
    condition: "Occasion",
    images: [
      "/images/dell_latitude_5400.jpeg",
      "/images/dell_latitude_5400_closed.png",
      "/images/dell_latitude_5400_rear.png",
      "/images/dell_latitude_5400_windows.png",
      "/images/dell_latitude_5400_nature.png"
    ],
    rating: 4.7,
    reviews: 34,
    inStock: true,
    features: ["Intel Core i5-8365U", "16Go DDR4", "512Go SSD", "14\" Full HD", "Windows 11 Pro"],
    createdAt: new Date().toISOString()
  },
  {
    id: "3",
    title: "Toshiba Canvio Basics 2TB",
    price: 65,
    description: "Disque dur externe portable 2TB USB 3.0 - Neuf",
    category: "Stockage",
    condition: "Neuf",
    images: [
      "/images/toshiba_canvio_2tb.jpeg",
      "/images/toshiba_canvio_front.png",
      "/images/toshiba_canvio_side.png",
      "/images/toshiba_canvio_port.png",
      "/images/toshiba_canvio_connected.png",
      "/images/toshiba_canvio_dimensions.png"
    ],
    rating: 4.3,
    reviews: 56,
    inStock: true,
    features: ["2TB de stockage", "USB 3.0", "Plug and Play", "Compatible PC/Mac", "Compact et léger"],
    createdAt: new Date().toISOString()
  },
  {
    id: "4",
    title: "Verbatim HDD 500GB",
    price: 25,
    description: "Disque dur externe 500GB USB 3.0 - Occasion bon état",
    category: "Stockage",
    condition: "Occasion",
    images: [
      "/images/verbatim_500gb.png",
      "/images/verbatim_320gb.png"
    ],
    rating: 4.0,
    reviews: 12,
    inStock: true,
    features: ["500GB de stockage", "USB 3.0", "Format compact", "Transfert rapide"],
    createdAt: new Date().toISOString()
  },
  {
    id: "5",
    title: "Sony MDR-ZX310AP",
    price: 25,
    description: "Casque audio filaire avec microphone - Neuf",
    category: "Audio",
    condition: "Neuf",
    images: [
      "/images/sony_mdr_zx310ap.jpeg",
      "/images/sony_mdr_zx310ap_side.png",
      "/images/sony_mdr_zx310ap_top.png"
    ],
    rating: 4.4,
    reviews: 89,
    inStock: true,
    features: ["Son haute qualité", "Microphone intégré", "Pliable", "Câble 1.2m", "Léger et confortable"],
    createdAt: new Date().toISOString()
  },
  {
    id: "6",
    title: "Sony MDR-ZX110AP Blanc",
    price: 18,
    description: "Casque audio d'entrée de gamme avec micro - Neuf",
    category: "Audio",
    condition: "Neuf",
    images: [
      "/images/sony_mdr_zx110ap.jpeg",
      "/images/sony_mdr_zx110ap_white_front.png",
      "/images/sony_mdr_zx110ap_white_angle.png",
      "/images/sony_mdr_zx110ap_white_top.png"
    ],
    rating: 4.2,
    reviews: 145,
    inStock: true,
    features: ["Design épuré blanc", "Microphone intégré", "Léger 120g", "Pliable", "Jack 3.5mm"],
    createdAt: new Date().toISOString()
  },
  {
    id: "7",
    title: "Energy Sistem Style 3",
    price: 22,
    description: "Casque Bluetooth sans fil avec 14h d'autonomie - Neuf",
    category: "Audio",
    condition: "Neuf",
    images: [
      "/images/energy_sistem_style3.jpeg",
      "/images/energy_sistem_style3_front.png",
      "/images/energy_sistem_style3_side.png",
      "/images/energy_sistem_style3_controls.png",
      "/images/energy_sistem_style3_box.png",
      "/images/energy_sistem_style3_lavender.png",
      "/images/energy_sistem_style3_package.png"
    ],
    rating: 4.1,
    reviews: 67,
    inStock: true,
    features: ["Bluetooth 5.0", "14h d'autonomie", "Microphone intégré", "Pliable", "Charge USB-C"],
    createdAt: new Date().toISOString()
  },
  {
    id: "8",
    title: "Realme Note 60",
    price: 109,
    description: "Smartphone 6.74\" HD+ 128GB - Neuf avec garantie",
    category: "Smartphones",
    condition: "Neuf",
    images: [
      "/images/realme_note_60.jpeg",
      "/images/realme_note_60_front_back.png",
      "/images/realme_note_60_display.png",
      "/images/realme_note_60_camera.png",
      "/images/realme_note_60_specs.png",
      "/images/realme_note_60_performance.png",
      "/images/realme_note_60_waterproof.png",
      "/images/realme_note_60_quality.png"
    ],
    rating: 4.3,
    reviews: 42,
    inStock: true,
    features: ["Écran 6.74\" HD+", "128GB stockage", "Batterie 5000mAh", "Caméra 32MP", "Android 14"],
    createdAt: new Date().toISOString()
  },
  {
    id: "9",
    title: "Xiaomi Redmi A5",
    price: 89,
    description: "Smartphone économique 6.52\" 128GB - Neuf",
    category: "Smartphones",
    condition: "Neuf",
    images: [
      "/images/xiaomi_redmi_a5.jpeg",
      "/images/xiaomi_redmi_a5_front_back.png",
      "/images/xiaomi_redmi_a5_back.png",
      "/images/xiaomi-redmi-a5-front.png",
      "/images/xiaomi-redmi-a5-back.png",
      "/images/xiaomi-redmi-a5-side.png",
      "/images/xiaomi-redmi-a5-camera.png"
    ],
    rating: 4.0,
    reviews: 38,
    inStock: true,
    features: ["Écran 6.52\" HD+", "128GB stockage", "Batterie 5000mAh", "Double SIM", "Android 14 Go"],
    createdAt: new Date().toISOString()
  },
  {
    id: "10",
    title: "Verbatim HDD 320GB",
    price: 15,
    description: "Disque dur externe compact 320GB - Occasion",
    category: "Stockage",
    condition: "Occasion",
    images: [
      "/images/verbatim_320gb.png",
      "/images/verbatim_500gb.png"
    ],
    rating: 3.9,
    reviews: 8,
    inStock: true,
    features: ["320GB de stockage", "USB 3.0", "Format portable", "Silencieux"],
    createdAt: new Date().toISOString()
  }
]

// Get products from localStorage or return defaults
export function getProducts(): Product[] {
  if (typeof window === "undefined") return defaultProducts
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (e) {
    console.error("Error reading products from localStorage:", e)
  }
  
  // Initialize with defaults
  saveProducts(defaultProducts)
  return defaultProducts
}

// Save products to localStorage
export function saveProducts(products: Product[]): void {
  if (typeof window === "undefined") return
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
  } catch (e) {
    console.error("Error saving products to localStorage:", e)
  }
}

// Add a new product
export function addProduct(product: Omit<Product, "id" | "createdAt">): Product {
  const products = getProducts()
  const newProduct: Product = {
    ...product,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  }
  products.unshift(newProduct)
  saveProducts(products)
  return newProduct
}

// Delete a product
export function deleteProduct(productId: string): boolean {
  const products = getProducts()
  const filtered = products.filter(p => p.id !== productId)
  if (filtered.length !== products.length) {
    saveProducts(filtered)
    return true
  }
  return false
}

// Update a product
export function updateProduct(productId: string, updates: Partial<Product>): Product | null {
  const products = getProducts()
  const index = products.findIndex(p => p.id === productId)
  if (index !== -1) {
    products[index] = { ...products[index], ...updates }
    saveProducts(products)
    return products[index]
  }
  return null
}

// Reset to default products
export function resetProducts(): void {
  saveProducts(defaultProducts)
}
