
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Trash, Plus, Minus } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState("");
  
  // Константы для расчетов
  const DELIVERY_COST = items.length > 0 && getTotalPrice() > 1500 ? 0 : 200;
  const TAX_RATE = 0.2; // 20% НДС
  const taxAmount = getTotalPrice() * TAX_RATE;
  const totalWithTaxAndDelivery = getTotalPrice() + taxAmount + DELIVERY_COST;

  const handlePromoCodeApply = () => {
    toast({
      title: "Промокод применен",
      description: "Промокод успешно применен к заказу",
    });
    setPromoCode("");
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Корзина пуста",
        description: "Добавьте товары в корзину перед оформлением заказа",
        variant: "destructive",
      });
      return;
    }
    
    // В реальном приложении здесь был бы переход на страницу оформления заказа
    toast({
      title: "Заказ оформлен",
      description: `Ваш заказ на сумму ${totalWithTaxAndDelivery.toFixed(2)} ₽ успешно оформлен`,
    });
    clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-red-50 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800">Корзина</h1>
            <p className="text-center text-gray-600 mt-4">
              {items.length > 0 
                ? `У вас ${items.length} ${items.length === 1 ? 'товар' : items.length < 5 ? 'товара' : 'товаров'} в корзине` 
                : 'Ваша корзина пуста'}
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Товары в корзине</h2>
                    <div className="space-y-6">
                      {items.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row gap-4 pb-6 border-b">
                          <div className="w-full sm:w-24 h-24">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                            <div className="mt-2 flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Button 
                                  variant="outline" 
                                  size="icon" 
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button 
                                  variant="outline" 
                                  size="icon" 
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                              <div className="flex items-center space-x-4">
                                <span className="font-semibold">{(item.price * item.quantity).toFixed(2)} ₽</span>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                  onClick={() => removeItem(item.id)}
                                >
                                  <Trash className="h-5 w-5" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex justify-between">
                      <Button 
                        variant="outline" 
                        className="text-red-600 border-red-600 hover:bg-red-50"
                        onClick={clearCart}
                      >
                        Очистить корзину
                      </Button>
                      <Button asChild variant="outline">
                        <Link to="/menu">Продолжить покупки</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Сумма заказа</h2>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Товары ({items.length}):</span>
                        <span>{getTotalPrice().toFixed(2)} ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">НДС (20%):</span>
                        <span>{taxAmount.toFixed(2)} ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Доставка:</span>
                        <span>{DELIVERY_COST === 0 ? 'Бесплатно' : `${DELIVERY_COST.toFixed(2)} ₽`}</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-bold">
                        <span>Итого:</span>
                        <span>{totalWithTaxAndDelivery.toFixed(2)} ₽</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-2">Промокод</h3>
                      <div className="flex gap-2">
                        <Input 
                          placeholder="Введите промокод" 
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <Button 
                          variant="outline" 
                          onClick={handlePromoCodeApply}
                          disabled={!promoCode}
                        >
                          Применить
                        </Button>
                      </div>
                    </div>

                    <Button 
                      className="w-full mt-6 bg-red-600 hover:bg-red-700"
                      onClick={handleCheckout}
                    >
                      Оформить заказ
                    </Button>

                    <div className="mt-4 text-xs text-gray-500">
                      <p>Оформляя заказ, вы соглашаетесь с условиями <Link to="/terms" className="text-red-600 hover:underline">пользовательского соглашения</Link>.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-2">Информация о доставке</h2>
                    <p className="text-sm text-gray-600">
                      Бесплатная доставка при заказе от 1500 ₽. Среднее время доставки 30-60 минут.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-8xl mb-4">🍕</div>
              <h2 className="text-2xl font-bold mb-4">Ваша корзина пуста</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Похоже, вы еще не добавили ни одной пиццы в корзину. Перейдите в меню, чтобы выбрать вкусные пиццы и другие блюда.
              </p>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link to="/menu">Перейти в меню</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
