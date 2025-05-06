import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const pizzas = [
  {
    id: 1,
    name: "Пепперони",
    description: "Классическая пицца с пепперони, моцареллой и томатным соусом",
    price: 599,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=580&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Маргарита",
    description: "Традиционная итальянская пицца с моцареллой, томатами и базиликом",
    price: 499,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=580&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Четыре сыра",
    description: "Изысканное сочетание четырех видов сыра на тонком тесте",
    price: 649,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=580&auto=format&fit=crop"
  }
];

const reviews = [
  {
    id: 1,
    name: "Андрей К.",
    rating: 5,
    text: "Лучшая пицца в городе! Всегда горячая и вовремя. Рекомендую всем!"
  },
  {
    id: 2,
    name: "Мария С.",
    rating: 5,
    text: "Очень вкусно и быстрая доставка. Буду заказывать еще!"
  },
  {
    id: 3,
    name: "Дмитрий В.",
    rating: 4,
    text: "Отличная пицца, но хотелось бы больше разнообразия в меню."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Хедер */}
      <Header />

      {/* Баннер */}
      <section className="bg-red-50 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Вкуснейшая пицца с доставкой</h2>
            <p className="text-gray-600 mb-6 text-lg">Домашняя пицца из итальянской печи прямо к вашей двери за 30 минут!</p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Заказать
              </Button>
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                <Link to="/menu">Смотреть меню</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1594007654729-407eedc4fe24?q=80&w=2574&auto=format&fit=crop" 
              alt="Пицца" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Популярные блюда */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные блюда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pizzas.map((pizza) => (
              <Card key={pizza.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={pizza.image} 
                  alt={pizza.name} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{pizza.name}</h3>
                    <span className="text-lg font-bold text-red-600">{pizza.price} ₽</span>
                  </div>
                  <p className="text-gray-600 mb-4">{pizza.description}</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50">
              <Link to="/menu">Смотреть все меню</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Отзывы клиентов */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16}
                        className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-gray-700">{review.rating}/5</span>
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                <p className="font-medium text-gray-800">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Подписка на новости */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Подпишитесь на наши новости</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Получайте первыми информацию о новых блюдах, акциях и специальных предложениях!</p>
          <div className="flex flex-col md:flex-row max-w-md mx-auto gap-4">
            <Input 
              type="email" 
              placeholder="Ваш email" 
              className="bg-white text-gray-800"
            />
            <Button className="bg-white text-red-600 hover:bg-gray-100">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Index;