"use client";
import React from 'react';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import {
  BookOpen,
  MessageCircle,
  Download,
  Star,
  PhoneIcon as WhatsApp,
  Instagram,
  Palette,
  BookMarked,
  PenTool,
  Bookmark,
} from "lucide-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Importe os estilos do Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const whatsappNumber = "551199999999"; // Replace with actual number
  const whatsappMessage =
    "Olá! Gostaria de saber mais sobre o Reading Journal ebook.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  const instagramUrl = "https://www.instagram.com/dayalivros"; // Replace with actual Instagram URL

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-100">
      {/* Header */}
      <header className="bg-white py-4 shadow-md">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-sky-800 font-serif">
            DAYA LIVROS
          </h1>
        </div>
      </header>

      <main className="container space-y-16 py-12 text-center">
        {/* Carousel Section */}
        <motion.section initial="hidden" animate="visible" variants={fadeIn}>
          <>
            <Slider {...carouselSettings}>
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="px-2">
                  <img
                    src={`/1placeholder-${index}.jpg`}
                    alt={`Reading Journal preview ${index}`}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg mx-auto"
                  />
                </div>
              ))}
            </Slider>
          </>
        </motion.section>

        {/* Spotify Player */}
        {isClient && (
          <div className="my-8">
            <iframe
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn"
              width="100%"
              height="80"
              frameBorder="0"
              title="Spotify Song"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        )}

        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-sky-800 mb-4">
            Reading Journal: Seu Companheiro de Leitura
          </h2>
          <p className="text-xl text-sky-600">
            Registre, reflita e aprofunde suas experiências literárias com nosso
            ebook interativo!
          </p>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-sky-800 mb-4">
            Sobre o Reading Journal
          </h2>
          <p className="text-sky-600">
            Nosso Reading Journal é um ebook interativo projetado para
            enriquecer sua experiência de leitura. Ele oferece um espaço
            estruturado para você registrar suas reflexões, acompanhar seu
            progresso e aprofundar sua compreensão de cada livro que você lê.
          </p>
        </motion.section>

        {/* Versions Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-sky-800 mb-4">
            Escolha seu Estilo
          </h2>
          <p className="text-sky-600 mb-6">
            O Reading Journal está disponível em quatro elegantes versões:
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Clássico", colors: "Preto e Cinza" },
              { name: "Luxo", colors: "Vermelho e Dourado" },
              { name: "Moderno", colors: "Rosa e Preto" },
              { name: "Noturno", colors: "Preto e Azul" },
            ].map((version, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Palette className="mx-auto h-8 w-8 text-sky-600" />
                  <h3 className="mt-4 font-semibold text-sky-700">
                    {version.name}
                  </h3>
                  <p className="mt-2 text-sm text-sky-600">{version.colors}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* What You'll Find Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-sky-800 mb-4">
            O que você encontrará no Reading Journal:
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Resumos de Livros",
                description: "Espaço para sintetizar as principais ideias",
                icon: BookOpen,
              },
              {
                title: "Citações Favoritas",
                description: "Seção para guardar trechos marcantes",
                icon: BookMarked,
              },
              {
                title: "Reflexões Pessoais",
                description: "Área para suas interpretações e pensamentos",
                icon: PenTool,
              },
              {
                title: "Tracker de Leitura",
                description: "Acompanhe seu progresso anual de leitura",
                icon: Bookmark,
              },
              {
                title: "Listas Personalizáveis",
                description: "Crie e organize suas listas de leitura",
                icon: Star,
              },
              {
                title: "Dicas de Análise",
                description:
                  "Orientações para aprofundar sua análise literária",
                icon: MessageCircle,
              },
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"  // Adicionando classe para centralizar o conteúdo
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  {/* Centralizando o ícone */}
                  <div className="flex justify-center">
                    {React.createElement(module.icon, {
                      className: "h-8 w-8 text-sky-600",
                    })}
                  </div>
                  <h3 className="mt-4 font-semibold text-sky-700">
                    {module.title}
                  </h3>
                  <p className="mt-2 text-sm text-sky-600">
                    {module.description}
                  </p>
                </Card>
              </motion.div>
            ))
            }
          </div>
        </motion.section>

        {/* Format Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-sky-800 mb-4">
            Formato do Reading Journal
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Ebook Interativo",
                description: "Formato digital para fácil uso",
                icon: BookOpen,
              },
              {
                title: "Download Imediato",
                description: "Acesso instantâneo após a compra",
                icon: Download,
              },
              {
                title: "Suporte",
                description: "Assistência via WhatsApp",
                icon: MessageCircle,
              },
              {
                title: "Atualizações",
                description: "Melhorias contínuas do conteúdo",
                icon: Star,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                {/* Centralizando o ícone com flexbox */}
                <div className="flex justify-center">
                  {React.createElement(item.icon, {
                    className: "h-12 w-12 text-sky-600",
                  })}
                </div>
                <h3 className="mt-4 font-semibold text-sky-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-sky-600">{item.description}</p>
              </motion.div>
            ))
            }
          </div>
        </motion.section>

        {/* Support Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-sky-800 mb-4">
            Acompanhamento e Suporte
          </h2>
          <p className="text-sky-600">
            Oferecemos suporte via WhatsApp para ajudar você a aproveitar ao
            máximo seu Reading Journal. Estamos aqui para responder suas dúvidas
            e fornecer orientações sobre como utilizar todas as funcionalidades
            do ebook.
          </p>
        </motion.section>

        {/* Investment */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-sky-800 mb-4">
            Investimento
          </h2>
          <p className="text-4xl font-bold text-sky-800">
            R$ 37,00
          </p>
          <p className="text-sky-600 mb-6">Apenas hoje, aproveite o preço
            promocional!</p>
          <div className="space-y-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-sky-700 text-white font-bold rounded-md shadow-lg transition-transform"
            >
              Compre Agora
            </motion.a>
          </div>
        </motion.section>
      </main>

      <footer className="bg-white py-6 text-center text-sky-600">
        <p>&copy; {new Date().getFullYear()} DAYA LIVROS. Todos os direitos
          reservados.</p>
      </footer>
    </div>
  );

}
