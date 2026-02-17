const products = {
  flavors: [
    "Choco Cream", "Paly Kakao", "Choco Fresa", "Choco Coco", "Special",
    "Chocotron", "Choco Turbo", "Torbellino", "Campeón", "Solaris",
    "Nance", "Coco", "Mora", "Zapote", "Horchata"
  ],
  presentations: [
    "Mister Cono", "Sandwich Ice Cream", "Heladito", "Cookies and Cream",
    "Copa Premium", "Copa Sundae", "Sundae", "Mega Sundae", "Vasito de Helado"
  ],
  bulk: [
    "Sorbete", "Medio Galón Sorbete", "Galones", "Caja"
  ]
};

export default function Products() {
  return (
    <main className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Nuestros Productos</h1>

        {/* Flavors */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Sabores</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.flavors.map((flavor) => (
              <div key={flavor} className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="font-semibold">{flavor}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Presentations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Presentaciones</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.presentations.map((item) => (
              <div key={item} className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bulk */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Productos Mayoristas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.bulk.map((item) => (
              <div key={item} className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
