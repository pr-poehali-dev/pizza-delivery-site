
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Типы данных
interface PizzaItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isSpicy?: boolean;
  isVegan?: boolean;
  isNew?: boolean;
}

const Menu = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState("meat");

  // Данные о пиццах
  const pizzaItems: PizzaItem[] = [
    // Мясные пиццы
    {
      id: 1,
      name: "Пепперони",
      description: "Классическая пицца с колбасой пепперони, моцареллой и томатным соусом",
      price: 599,
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=580&auto=format&fit=crop",
      category: "meat",
      isSpicy: true
    },
    {
      id: 2,
      name: "Мясная",
      description: "Сытная пицца с фаршем, беконом, ветчиной и колбасой",
      price: 649,
      image: "https://images.unsplash.com/photo-1594221708779-94832f4320d1?q=80&w=580&auto=format&fit=crop",
      category: "meat"
    },
    {
      id: 3,
      name: "Барбекю",
      description: "Пицца с куриным филе, беконом, соусом барбекю и красным луком",
      price: 629,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=580&auto=format&fit=crop",
      category: "meat"
    },
    
    // Вегетарианские пиццы
    {
      id: 4,
      name: "Маргарита",
      description: "Традиционная итальянская пицца с моцареллой, томатами и базиликом",
      price: 499,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=580&auto=format&fit=crop",
      category: "vegetarian",
      isVegan: true
    },
    {
      id: 5,
      name: "Грибная",
      description: "Ароматная пицца с шампиньонами, луком и сыром",
      price: 529,
      image: "https://images.unsplash.com/photo-1604917877934-07d8d248d396?q=80&w=580&auto=format&fit=crop",
      category: "vegetarian"
    },
    {
      id: 6,
      name: "Овощная",
      description: "Яркая пицца с перцем, томатами, луком, оливками и зеленью",
      price: 549,
      image: "https://images.unsplash.com/photo-1528490060256-c345efae4442?q=80&w=580&auto=format&fit=crop",
      category: "vegetarian",
      isVegan: true
    },
    
    // Пикантные пиццы
    {
      id: 7,
      name: "Диабло",
      description: "Острая пицца с перцем халапеньо, колбасой чоризо и перцем чили",
      price: 649,
      image: "https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=580&auto=format&fit=crop",
      category: "spicy",
      isSpicy: true,
      isNew: true
    },
    {
      id: 8,
      name: "Мексиканская",
      description: "Пицца с говяжьим фаршем, фасолью, кукурузой и острым соусом",
      price: 629,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=580&auto=format&fit=crop",
      category: "spicy",
      isSpicy: true
    },
    {
      id: 9,
      name: "Острая по-итальянски",
      description: "С пикантными колбасками, перцем, оливками и соусом аррабиата",
      price: 639,
      image: "https://images.unsplash.com/photo-1570464197880-7463e44d103f?q=80&w=580&auto=format&fit=crop",
      category: "spicy",
      isSpicy: true
    },
    
    // Десерты
    {
      id: 10,
      name: "Шоколадная пицца",
      description: "Сладкая пицца с шоколадной начинкой, фруктами и ореховой крошкой",
      price: 449,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=580&auto=format&fit=crop",
      category: "dessert",
      isNew: true
    },
    {
      id: 11,
      name: "Яблочный пирог",
      description: "Ароматный пирог с яблоками и корицей",
      price: 329,
      image: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?q=80&w=580&auto=format&fit=crop",
      category: "dessert"
    },
    {
      id: 12,
      name: "Чизкейк",
      description: "Нежный чизкейк с ягодным соусом и свежими ягодами",
      price: 399,
      image: "https://images.unsplash.com/photo-1611293388250-580b08c4a145?q=80&w=580&auto=format&fit=crop",
      category: "dessert"
    }
  ];

  // Функция добавления в корзину
  const addToCart = (pizza: PizzaItem) => {
    toast({
      title: "Товар добавлен в корзину",
      description: `${pizza.name} (${pizza.price} ₽) добавлен в вашу корзину`
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Баннер меню */}
        <div className="bg-red-50 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800">Наше меню</h1>
            <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
              Мы используем только свежие ингредиенты и готовим каждую пиццу с любовью и вниманием к деталям
            </p>
          </div>
        </div>
        
        {/* Меню с категориями */}
        <div className="container mx-auto px-4 py-12">
          <Tabs 
            defaultValue="meat" 
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="meat" className="text-sm md:text-base">Мясные</TabsTrigger>
                <TabsTrigger value="vegetarian" className="text-sm md:text-base">Вегетарианские</TabsTrigger>
                <TabsTrigger value="spicy" className="text-sm md:text-base">Пикантные</TabsTrigger>
                <TabsTrigger value="dessert" className="text-sm md:text-base">Десерты</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Содержимое категорий */}
            <TabsContent value="meat" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pizzaItems.filter(item => item.category === "meat").map(pizza => (
                  <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={addToCart} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="vegetarian" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pizzaItems.filter(item => item.category === "vegetarian").map(pizza => (
                  <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={addToCart} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="spicy" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pizzaItems.filter(item => item.category === "spicy").map(pizza => (
                  <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={addToCart} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="dessert" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pizzaItems.filter(item => item.category === "dessert").map(pizza => (
                  <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={addToCart} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Информационный блок */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Информация о доставке</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Условия доставки</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Бесплатная доставка при заказе от 1500 ₽</li>
                    <li>Стоимость доставки при заказе до 1500 ₽ — 200 ₽</li>
                    <li>Время доставки: 30-60 минут в зависимости от адреса</li>
                    <li>Доставляем с 10:00 до 23:00</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Способы оплаты</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Наличными курьеру</li>
                    <li>Картой курьеру</li>
                    <li>Онлайн-оплата</li>
                    <li>СБП</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600">Если у вас есть вопросы о нашем меню или доставке, пожалуйста, свяжитесь с нами по телефону <a href="tel:+78001234567" className="text-red-600 font-semibold">8 (800) 123-45-67</a></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Компонент карточки пиццы
interface PizzaCardProps {
  pizza: PizzaItem;
  onAddToCart: (pizza: PizzaItem) => void;
}

const PizzaCard = ({ pizza, onAddToCart }: PizzaCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={pizza.image} 
          alt={pizza.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          {pizza.isNew && (
            <Badge className="bg-blue-500">Новинка</Badge>
          )}
          {pizza.isSpicy && (
            <Badge className="bg-red-500">Острая</Badge>
          )}
          {pizza.isVegan && (
            <Badge className="bg-green-500">Веган</Badge>
          )}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{pizza.name}</h3>
          <span className="text-lg font-bold text-red-600">{pizza.price} ₽</span>
        </div>
        <p className="text-gray-600 mb-4">{pizza.description}</p>
        <Button 
          className="w-full bg-red-600 hover:bg-red-700"
          onClick={() => onAddToCart(pizza)}
        >
          Добавить в корзину
        </Button>
      </CardContent>
    </Card>
  );
};

export default Menu;
