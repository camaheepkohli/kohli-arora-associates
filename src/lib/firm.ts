export const FIRM = {
  name: "Kohli Arora & Associates",
  shortName: "Kohli Arora & Associates",
  principal: "CA Maheep Kohli",
  phoneDisplay: "+91 60050 57822",
  phoneTel: "+916005057822",
  whatsapp: "916005057822",
  email: "camaheepkohli@gmail.com",
  address: {
    line: "Sec-14, Railway Rd, Guru Nanak Nagar",
    city: "Jammu",
    region: "Jammu and Kashmir",
    postal: "180004",
    country: "IN",
  },
  gbpUrl: "https://share.google/U8sjKOPI6AAIoDjh4",
  // Approx coordinates for Sec-14, Guru Nanak Nagar, Jammu
  geo: { lat: 32.7266, lng: 74.857 },
  mapEmbed:
    "https://www.google.com/maps?q=Sec-14%20Railway%20Rd%20Guru%20Nanak%20Nagar%20Jammu%20180004&output=embed",
};

export const waLink = (message?: string) =>
  `https://wa.me/${FIRM.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const telLink = `tel:${FIRM.phoneTel}`;
export const mailLink = `mailto:${FIRM.email}`;