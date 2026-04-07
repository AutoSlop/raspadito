"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "00000000000";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "¡Hola! Quiero pedir un raspado 🍧"
)}`;

const SABORES = [
  { nombre: "Fresa", emoji: "🍓", color: "bg-red-100", border: "border-red-300" },
  { nombre: "Mango", emoji: "🥭", color: "bg-amber-100", border: "border-amber-300" },
  { nombre: "Limón", emoji: "🍋", color: "bg-lime-100", border: "border-lime-300" },
  { nombre: "Tamarindo", emoji: "🫙", color: "bg-orange-100", border: "border-orange-300" },
  { nombre: "Maracuyá", emoji: "💛", color: "bg-yellow-100", border: "border-yellow-300" },
];

const TAMANOS = [
  { nombre: "Pequeño", precio: "6.000", ml: "250 ml" },
  { nombre: "Mediano", precio: "8.000", ml: "350 ml" },
  { nombre: "Grande", precio: "10.000", ml: "500 ml" },
];

const PASOS = [
  { num: "1", titulo: "Elige tu sabor", desc: "Escoge entre nuestros 5 sabores clásicos." },
  { num: "2", titulo: "Escribe por WhatsApp", desc: "Envíanos tu pedido con sabor, tamaño y dirección." },
  { num: "3", titulo: "Recibe tu raspado", desc: "Te lo llevamos preparado al momento a tu puerta." },
];

const BENEFICIOS = [
  { icono: "⚡", titulo: "Preparado al momento", desc: "Cada raspado se prepara fresco cuando lo pides." },
  { icono: "🛵", titulo: "Entrega local propia", desc: "Sin intermediarios ni sobrecostos de apps." },
  { icono: "💰", titulo: "Precios accesibles", desc: "Más barato que pedir por apps de delivery." },
];

const FAQS = [
  {
    pregunta: "¿Cuál es el horario de atención?",
    respuesta: "Atendemos de lunes a sábado de 10:00 a.m. a 7:00 p.m.",
  },
  {
    pregunta: "¿En qué zona de Bogotá entregan?",
    respuesta:
      "Hacemos entregas en un radio cercano dentro de Bogotá. Escríbenos por WhatsApp con tu dirección y te confirmamos cobertura.",
  },
  {
    pregunta: "¿Qué medios de pago aceptan?",
    respuesta: "Aceptamos efectivo, Nequi y Daviplata al momento de la entrega.",
  },
  {
    pregunta: "¿Puedo pedir para un evento o grupo grande?",
    respuesta:
      "¡Claro! Escríbenos por WhatsApp para pedidos especiales y te armamos una cotización.",
  },
  {
    pregunta: "¿Los raspados tienen colorantes o saborizantes artificiales?",
    respuesta: "Usamos frutas naturales y jarabes preparados artesanalmente.",
  },
];

function WhatsAppButton({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-primary-hover hover:shadow-xl hover:scale-105 active:scale-95 ${className}`}
    >
      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {children}
    </a>
  );
}

function FAQItem({ pregunta, respuesta }: { pregunta: string; respuesta: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left text-lg font-semibold text-foreground transition-colors hover:text-primary"
      >
        {pregunta}
        <span
          className={`ml-4 text-2xl transition-transform ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="pb-5 text-gray-600 leading-relaxed">{respuesta}</p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <span className="text-2xl font-extrabold text-primary">🍧 Raspadito</span>
          <div className="hidden gap-6 text-sm font-medium text-foreground md:flex">
            <a href="#sabores" className="hover:text-primary transition-colors">Sabores</a>
            <a href="#como-pedir" className="hover:text-primary transition-colors">Cómo pedir</a>
            <a href="#promo" className="hover:text-primary transition-colors">Promos</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-white transition-all hover:bg-primary-hover hover:scale-105"
          >
            Pedir ahora
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF8F0] via-white to-[#FFF0DB]">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center md:py-32">
          <span className="mb-6 inline-block rounded-full bg-secondary/20 px-4 py-2 text-sm font-semibold text-primary">
            🎉 ¡Nuevo en Bogotá!
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Raspados ricos y<br />
            <span className="text-primary">económicos</span> en Bogotá
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Pide por WhatsApp y recíbelo cerca de ti con entrega local propia, sabores
            clásicos y precios más accesibles que las apps.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton>Pedir por WhatsApp</WhatsAppButton>
            <a
              href="#sabores"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary px-8 py-4 text-lg font-bold text-primary transition-all hover:bg-primary hover:text-white"
            >
              Ver sabores
            </a>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-6 text-7xl">
            <span className="animate-bounce" style={{ animationDelay: "0ms" }}>🍓</span>
            <span className="animate-bounce" style={{ animationDelay: "150ms" }}>🥭</span>
            <span className="animate-bounce" style={{ animationDelay: "300ms" }}>🍋</span>
            <span className="animate-bounce" style={{ animationDelay: "450ms" }}>🫙</span>
            <span className="animate-bounce" style={{ animationDelay: "600ms" }}>💛</span>
          </div>
        </div>
      </section>

      {/* Beneficios badges */}
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-4 sm:grid-cols-3">
          {BENEFICIOS.map((b) => (
            <div
              key={b.titulo}
              className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-4xl">{b.icono}</span>
              <h3 className="mt-3 text-lg font-bold text-foreground">{b.titulo}</h3>
              <p className="mt-1 text-sm text-gray-500">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sabores y tamaños */}
      <section id="sabores" className="bg-[#FFF8F0] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-foreground md:text-4xl">
            Nuestros <span className="text-primary">sabores</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
            Hechos con frutas naturales y preparados al momento. Elige tu favorito.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {SABORES.map((s) => (
              <div
                key={s.nombre}
                className={`flex flex-col items-center rounded-2xl border ${s.border} ${s.color} p-6 text-center transition-transform hover:scale-105`}
              >
                <span className="text-5xl">{s.emoji}</span>
                <span className="mt-3 text-lg font-bold text-foreground">{s.nombre}</span>
              </div>
            ))}
          </div>

          {/* Tamaños */}
          <h3 className="mt-16 text-center text-2xl font-bold text-foreground">
            Tamaños y precios
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {TAMANOS.map((t, i) => (
              <div
                key={t.nombre}
                className={`relative flex flex-col items-center rounded-2xl border-2 p-8 text-center transition-transform hover:scale-105 ${
                  i === 1
                    ? "border-primary bg-white shadow-lg scale-105"
                    : "border-gray-200 bg-white"
                }`}
              >
                {i === 1 && (
                  <span className="absolute -top-3 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">
                    Más popular
                  </span>
                )}
                <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  {t.nombre}
                </span>
                <span className="mt-1 text-sm text-gray-400">{t.ml}</span>
                <span className="mt-4 text-4xl font-extrabold text-foreground">
                  ${t.precio}
                </span>
                <span className="text-sm text-gray-400">COP</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-gray-500">
            <p>
              🧁 <span className="font-semibold">Topping extra:</span> +$1.500 COP
            </p>
          </div>
        </div>
      </section>

      {/* Cómo pedir */}
      <section id="como-pedir" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-foreground md:text-4xl">
            ¿Cómo <span className="text-primary">pedir</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
            Es súper fácil. Solo 3 pasos y tu raspado está en camino.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {PASOS.map((p) => (
              <div key={p.num} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-extrabold text-white">
                  {p.num}
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground">{p.titulo}</h3>
                <p className="mt-2 text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <WhatsAppButton>Pedir por WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Promo de apertura */}
      <section id="promo" className="bg-gradient-to-r from-primary to-[#FF8A3D] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="text-5xl">🎉</span>
          <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
            Promo de apertura
          </h2>
          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-white/20 backdrop-blur-sm p-8">
            <p className="text-xl font-bold text-white">
              🥤 Combo 2 medianos
            </p>
            <div className="mt-2 flex items-center justify-center gap-3">
              <span className="text-lg text-white/70 line-through">$16.000</span>
              <span className="text-4xl font-extrabold text-white">$15.000</span>
            </div>
            <p className="mt-1 text-sm text-white/80">COP — ¡Te ahorras $1.000!</p>
          </div>
          <p className="mt-6 text-white/80">
            Menciona &quot;PROMO APERTURA&quot; en tu mensaje de WhatsApp
          </p>
          <div className="mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-primary shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              Aprovechar promo
            </a>
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="bg-[#FFF8F0] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            Cobertura en <span className="text-primary">Bogotá</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Hacemos entregas en un radio cercano con nuestro propio equipo de
            entrega. Sin apps, sin sobrecostos.
          </p>
          <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="text-6xl">📍</div>
            <h3 className="mt-4 text-xl font-bold text-foreground">
              ¿Llegamos a tu zona?
            </h3>
            <p className="mt-2 text-gray-500">
              Escríbenos tu dirección por WhatsApp y te confirmamos si estás
              dentro de nuestra zona de entrega.
            </p>
            <div className="mt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-bold text-white transition-all hover:bg-primary-hover hover:scale-105"
              >
                Consultar cobertura
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-foreground md:text-4xl">
            Preguntas <span className="text-primary">frecuentes</span>
          </h2>
          <div className="mt-10">
            {FAQS.map((f) => (
              <FAQItem key={f.pregunta} pregunta={f.pregunta} respuesta={f.respuesta} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-br from-secondary/20 to-primary/10 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <span className="text-6xl">🍧</span>
          <h2 className="mt-4 text-3xl font-extrabold text-foreground md:text-4xl">
            ¿Se te antojó un raspado?
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Pide ahora por WhatsApp y recíbelo fresquito en tu puerta.
          </p>
          <div className="mt-8">
            <WhatsAppButton className="text-xl px-10 py-5">
              Pedir mi raspado
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-12 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div>
              <span className="text-2xl font-extrabold">🍧 Raspadito</span>
              <p className="mt-1 text-sm text-gray-400">
                Raspados preparados al momento en Bogotá
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm text-gray-400 md:items-end">
              <p>📍 123 Main Street, City, Country</p>
              <p>📞 +00 000 000 0000</p>
              <p>✉️ info@example.com</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 border-t border-gray-700 pt-6 md:flex-row md:justify-between">
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#sabores" className="hover:text-white transition-colors">Sabores</a>
              <a href="#como-pedir" className="hover:text-white transition-colors">Cómo pedir</a>
              <a href="#promo" className="hover:text-white transition-colors">Promos</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
            <p className="text-sm text-gray-500">
              © 2026 Raspadito. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
