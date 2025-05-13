import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre Nós</h3>
            <p className="text-gray-400 mb-4">
              Somos uma loja de carros comprometida em oferecer os melhores veículos
              com as melhores condições de pagamento do mercado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <FaYoutube className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-600 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/estoque" className="text-gray-400 hover:text-red-600 transition-colors">
                  Estoque
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-red-600 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-red-600 transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/vender-carro" className="text-gray-400 hover:text-red-600 transition-colors">
                  Vender Carro
                </Link>
              </li>
              <li>
                <Link href="/financiamento" className="text-gray-400 hover:text-red-600 transition-colors">
                  Financiamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-red-600" />
                Rua Exemplo, 123 - São Paulo, SP
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-red-600" />
                (11) 9999-9999
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-red-600" />
                contato@lojadecarros.com
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Horário de Funcionamento</h4>
              <p className="text-gray-400">Segunda a Sexta: 9h às 18h</p>
              <p className="text-gray-400">Sábado: 9h às 14h</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscreva-se para receber nossas novidades e ofertas especiais.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-4 py-2 rounded-md w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Enviar
              </button>
            </form>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Formas de Pagamento</h4>
              <div className="flex space-x-2">
                <span className="text-gray-400">Cartões de Crédito</span>
                <span className="text-gray-400">Boleto</span>
                <span className="text-gray-400">PIX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Loja de Carros. Todos os direitos reservados.</p>
          <div className="mt-2">
            <Link href="/politica-privacidade" className="text-gray-400 hover:text-red-600 transition-colors">
              Política de Privacidade
            </Link>
            <span className="mx-2">|</span>
            <Link href="/termos-uso" className="text-gray-400 hover:text-red-600 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 