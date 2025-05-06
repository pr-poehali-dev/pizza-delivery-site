import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ПиццаМания</h3>
            <p className="text-gray-300">Лучшая пицца в городе с доставкой на дом!</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Меню</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-gray-300 hover:text-white">Пицца</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-white">Напитки</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-white">Десерты</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-white">Соусы</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">О нас</Link></li>
              <li><Link to="/contacts" className="text-gray-300 hover:text-white">Контакты</Link></li>
              <li><Link to="/delivery" className="text-gray-300 hover:text-white">Доставка</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <address className="text-gray-300 not-italic">
              <p>ул. Пиццы, 123</p>
              <p>Москва, Россия</p>
              <p className="mt-2">Телефон: <a href="tel:+78001234567" className="hover:text-white">8 (800) 123-45-67</a></p>
              <p>Email: <a href="mailto:info@pizzamania.ru" className="hover:text-white">info@pizzamania.ru</a></p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {new Date().getFullYear()} ПиццаМания. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Youtube size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};