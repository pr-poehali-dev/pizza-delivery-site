
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-red-600">ПиццаМания</Link>
        </div>
        
        {/* Мобильное меню */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Меню">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[250px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Главная
                </Link>
                <Link 
                  to="/menu" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Меню
                </Link>
                <Link 
                  to="/cart" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Корзина
                </Link>
                <Link 
                  to="/contacts" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Контакты
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  О нас
                </Link>
                <Button 
                  className="w-full mt-4 bg-red-600 hover:bg-red-700"
                  onClick={() => setIsOpen(false)}
                >
                  Заказать сейчас
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Десктопное меню */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-red-600 font-medium">Главная</Link>
          <Link to="/menu" className="text-gray-700 hover:text-red-600 font-medium">Меню</Link>
          <Link to="/cart" className="text-gray-700 hover:text-red-600 font-medium">Корзина</Link>
          <Link to="/contacts" className="text-gray-700 hover:text-red-600 font-medium">Контакты</Link>
          <Link to="/about" className="text-gray-700 hover:text-red-600 font-medium">О нас</Link>
        </nav>
        
        <Button className="hidden md:inline-flex bg-red-600 hover:bg-red-700">
          Заказать сейчас
        </Button>
      </div>
    </header>
  );
};
