/* ------------------------------------------------------------------
   Reúne todas las imágenes locales PNG colocadas dentro de /assets
   y exporta, además, un array con URLs remotas de Unsplash
   ------------------------------------------------------------------ */

// ——— Imágenes .png que tengas en /src/assets (1.png, 2.png, …)
const modules = import.meta.glob('./*.png', { eager: true });

export const localImages = Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true })) // 1,2,3…
  .map(key => modules[key].default);                                // URL final

// ——— Imágenes remotas (ejemplo Unsplash → cámbialas cuando quieras)

// export const remoteImages = [
//   'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
//   'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
//   'https://images.unsplash.com/photo-1504252060325-1c32b2e38d11?auto=format&fit=crop&w=1600&q=80',
//   'https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1600&q=80',
//   'https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1600&q=80',
//   'https://images.unsplash.com/photo-1501700493785-c3722706ea39?auto=format&fit=crop&w=1600&q=80',
//   'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?auto=format&fit=crop&w=1600&q=80',
//   'https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?auto=format&fit=crop&w=1600&q=80'
// ];
