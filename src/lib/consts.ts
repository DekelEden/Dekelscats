export const PHONE = "055-990-4395"
export const PHONE_INTL = "972559904395"
export const EMAIL = "contact@dekelscats.com"
export const API_BASE = import.meta.env.DEV
  ? "http://localhost:5001/casraf-dev/us-central1/api/dekel"
  : "https://us-central1-casraf-dev.cloudfunctions.net/api/dekel"
export const socialItems = [
  {
    icon: '<i class="fab fa-facebook icon"></i>',
    title: "פייסבוק",
    href: "https://www.facebook.com/Dekelscats",
  },
  {
    icon: '<i class="fab fa-instagram icon"></i>',
    title: "אינסטגרם",
    href: "https://instagram.com/dekelscats",
  },
  {
    icon: '<i class="far fa-paper-plane icon"></i>',
    title: "אימייל",
    href: "mailto:dekelscats@gmail.com",
  },
  {
    icon: '<i class="fas fa-shopping-bag icon"></i>',
    title: "חנות",
    href: "https://store.dekelscats.com",
  },
  // {
  //   title: '<i class="ri-phone-line icon phone"></i>',
  //   href: 'tel:0503059422',
  // },
]

const waMsg = "אני מעוניינ/ת בפרטים על ייעוץ התנהגותי לחתול/ה שלי"
const waQS = new URLSearchParams({ text: waMsg }).toString()
export const whatsappUrl = `https://wa.me/${PHONE_INTL}?${waQS}`
