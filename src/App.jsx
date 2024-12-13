import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import {
  Book,
  ChatDots,
  Download,
  Star,
  Whatsapp,
  Instagram,
  Palette,
  BookmarkCheck,
  PencilSquare,
  Bookmark
} from 'react-bootstrap-icons';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Slick Carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const whatsappNumber = '5511932849265'; // Replace with actual number
  const whatsappMessage = 'Olá! Gostaria de saber mais sobre o Reading Journal ebook.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const instagramUrl = 'https://www.instagram.com/dayalivros'; // Replace with actual Instagram URL

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
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
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#E6F3FF' }}>
      {/* Header */}
      <header className="bg-white py-4 shadow-sm sticky-top">
        <Container className="text-center">
          <h1 className="display-6 fw-bold" style={{ color: '#075985' }}>DAYA LIVROS</h1>
        </Container>
      </header>

      <Container className="py-4">
        {/* Carousel Section */}
        <motion.section initial="hidden" animate="visible" variants={fadeIn} className="w-100 py-5">
          <Slider {...carouselSettings}>
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="px-2">
                <img
                  src={`/1placeholder-${index}.jpg`}
                  alt={`Reading Journal preview ${index}`}
                  className="img-fluid rounded shadow-lg mx-auto"
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
            ))}
          </Slider>
        </motion.section>

        {/* Spotify Player */}
        {isClient && (
          <div className="w-100 py-5">
            <iframe
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn"
              width="100%"
              height="80"
              frameBorder="0"
              title="Spotify Song"
              allowTransparency={true}
              allow="encrypted-media"
            ></iframe>
          </div>
        )}

        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center w-100 py-5"
        >
          <h2 className="display-6 fw-bold mb-4" style={{ color: '#075985' }}>
            Reading Journal: Seu Companheiro de Leitura
          </h2>
          <p className="lead" style={{ color: '#075985' }}>
            Registre, reflita e aprofunde suas experiências literárias com nosso ebook interativo!
          </p>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center w-100 py-5"
        >
          <h2 className="h3 fw-semibold mb-4" style={{ color: '#075985' }}>Sobre o Reading Journal</h2>
          <p style={{ color: '#075985' }}>
            Nosso Reading Journal é um ebook interativo projetado para enriquecer sua experiência de leitura.
            Ele oferece um espaço estruturado para você registrar suas reflexões, acompanhar seu progresso
            e aprofundar sua compreensão de cada livro que você lê.
          </p>
        </motion.section>

        {/* Versions Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center w-100 py-5"
        >
          <h2 className="h3 fw-semibold mb-4" style={{ color: '#075985' }}>Escolha seu Estilo</h2>
          <p className="mb-4" style={{ color: '#075985' }}>
            O Reading Journal está disponível em quatro elegantes versões:
          </p>
          <Row xs={1} md={2} className="g-4">
            {[
              { name: "Clássico", colors: "Preto e Cinza" },
              { name: "Luxo", colors: "Vermelho e Dourado" },
              { name: "Moderno", colors: "Rosa e Preto" },
              { name: "Noturno", colors: "Preto e Azul" },
            ].map((version, index) => (
              <Col key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-100 shadow-sm">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Palette style={{ color: '#0284C7' }} size={32} className="mb-3" />
                      <Card.Title style={{ color: '#075985' }}>{version.name}</Card.Title>
                      <Card.Text style={{ color: '#075985' }}>{version.colors}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.section>

        {/* What You'll Find Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center w-100 py-5"
        >
          <h2 className="h3 fw-semibold mb-4" style={{ color: '#075985' }}>
            O que você encontrará no Reading Journal:
          </h2>
          <Row xs={1} md={2} className="g-4">
            {[
              {
                title: "Resumos de Livros",
                description: "Espaço para sintetizar as principais ideias",
                icon: Book,
              },
              {
                title: "Citações Favoritas",
                description: "Seção para guardar trechos marcantes",
                icon: BookmarkCheck,
              },
              {
                title: "Reflexões Pessoais",
                description: "Área para suas interpretações e pensamentos",
                icon: PencilSquare,
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
                description: "Orientações para aprofundar sua análise literária",
                icon: ChatDots,
              },
            ].map((module, index) => (
              <Col key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-100 shadow-sm">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      {React.createElement(module.icon, {
                        style: { color: '#0284C7' },
                        size: 32,
                        className: "mb-3",
                      })}
                      <Card.Title style={{ color: '#075985' }}>{module.title}</Card.Title>
                      <Card.Text style={{ color: '#075985' }}>{module.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.section>

        {/* Format Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center w-100 py-5"
        >
          <h2 className="h3 fw-semibold mb-4" style={{ color: '#075985' }}>
            Formato do Reading Journal
          </h2>
          <Row xs={1} md={2} className="g-4">
            {[
              {
                title: "Ebook Interativo",
                description: "Formato digital para fácil uso",
                icon: Book,
              },
              {
                title: "Download Imediato",
                description: "Acesso instantâneo após a compra",
                icon: Download,
              },
              {
                title: "Suporte",
                description: "Assistência via WhatsApp",
                icon: ChatDots,
              },
              {
                title: "Atualizações",
                description: "Melhorias contínuas do conteúdo",
                icon: Star,
              },
            ].map((item, index) => (
              <Col key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="d-flex flex-column align-items-center">
                    {React.createElement(item.icon, {
                      style: { color: '#0284C7' },
                      size: 48,
                      className: "mb-3",
                    })}
                    <h3 className="h5 fw-semibold" style={{ color: '#075985' }}>{item.title}</h3>
                    <p style={{ color: '#075985' }}>{item.description}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.section>

        {/* Support Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center w-100 py-5"
        >
          <h2 className="h3 fw-semibold mb-4" style={{ color: '#075985' }}>
            Acompanhamento e Suporte
          </h2>
          <p style={{ color: '#075985' }}>
            Oferecemos suporte via WhatsApp para ajudar você a aproveitar ao máximo seu Reading Journal.
            Estamos aqui para responder suas dúvidas e fornecer orientações sobre como utilizar todas as
            funcionalidades do ebook.
          </p>
        </motion.section>

        {/* Investment */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center w-100 py-5"
        >
          <h2 className="h3 fw-semibold mb-4" style={{ color: '#075985' }}>Investimento</h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p className="display-4 fw-bold mb-2" style={{ color: '#075985', marginRight: '8px' }}>R$ 37,00</p>
            <span style={{ textDecoration: 'line-through', color: 'gray', fontSize: '1.5rem' }}>R$ 90,00</span>
          </div>

          <p className="mb-4" style={{ color: '#075985' }}>
            Apenas hoje, aproveite o preço promocional!
          </p>
          <div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="primary"
                size="lg"
                className="w-100 py-3 shadow-lg"
                style={{ backgroundColor: '#0284C7', borderColor: '#0284C7' }}
              >
                Compre Agora
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </Container>

      <footer className="bg-white py-4 text-center" style={{ color: '#075985' }}>
        <p>&copy; {new Date().getFullYear()} DAYA LIVROS. Todos os direitos reservados.</p>
      </footer>

      {/* Floating Instagram Button */}
      <Link
        to={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="position-fixed end-0 m-4 rounded-circle d-flex justify-content-center align-items-center"
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#E1306C',
          zIndex: 1000,
          bottom: '100px'
        }}
      >
        <Instagram color="white" size={32} />
      </Link>

      {/* Floating WhatsApp Button */}
      <Link
        to={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="position-fixed bottom-0 end-0 mb-5 me-4 rounded-circle d-flex justify-content-center align-items-center"
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#25D366',
          zIndex: 1000,
        }}
      >
        <Whatsapp color="white" size={32} />
      </Link>
    </div>
  );
}

