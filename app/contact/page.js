export default function Contact() {
  return (
    <main className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contáctenos</h1>
        
        <form className="space-y-6">
          <div>
            <label className="block font-semibold mb-2">Nombre</label>
            <input type="text" className="w-full border rounded-lg p-3" placeholder="Tu nombre" required />
          </div>

          <div>
            <label className="block font-semibold mb-2">Email</label>
            <input type="email" className="w-full border rounded-lg p-3" placeholder="tu@email.com" required />
          </div>

          <div>
            <label className="block font-semibold mb-2">Empresa</label>
            <input type="text" className="w-full border rounded-lg p-3" placeholder="Nombre de tu empresa" />
          </div>

          <div>
            <label className="block font-semibold mb-2">Mensaje</label>
            <textarea className="w-full border rounded-lg p-3 h-32" placeholder="Tu mensaje..." required></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
            Enviar
          </button>
        </form>

        <div className="mt-16 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
          <p className="text-lg mb-2"><strong>Dirección:</strong> 1a. Calle Oriente #1008, San Salvador, El Salvador</p>
          <p className="text-lg"><strong>Ubicación:</strong> <a href="https://goo.gl/maps/nttC9PqK6WZXsVRBA" className="text-blue-600 hover:underline">Ver en Google Maps</a></p>
        </div>
      </div>
    </main>
  );
}
