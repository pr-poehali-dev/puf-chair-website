import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [deliveryCost, setDeliveryCost] = useState(0);

  const calculateDelivery = (city: string) => {
    const deliveryPrices = {
      "moscow": 350,
      "spb": 400,
      "ekaterinburg": 500,
      "novosibirsk": 600,
      "kazan": 450,
      "nizhny": 420,
      "other": 650
    };
    setDeliveryCost(deliveryPrices[city as keyof typeof deliveryPrices] || 650);
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    calculateDelivery(city);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Sofa" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-foreground">ComfortSpace</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#catalog" className="text-muted-foreground hover:text-foreground transition-colors">Каталог</a>
            <a href="#delivery" className="text-muted-foreground hover:text-foreground transition-colors">Доставка</a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Отзывы</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </nav>
          <Button>
            <Icon name="Phone" size={18} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">Эксклюзивная бескаркасная мебель</Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Пуф-Кресло-Матрас
                  <span className="text-primary block">3 в 1</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Универсальная бескаркасная мебель для максимального комфорта. 
                  Трансформируется из удобного пуфа в кресло и полноценный матрас.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать сейчас
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть видео
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Года гарантии</div>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24ч</div>
                  <div className="text-sm text-muted-foreground">Доставка</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://cdn.poehali.dev/files/3a934c3f-826c-4f2b-900e-0ac6a00aea44.jpeg" 
                  alt="Пуф-матрас серый" 
                  className="rounded-2xl shadow-2xl aspect-square object-cover"
                />
                <img 
                  src="https://cdn.poehali.dev/files/b7c83d31-ec41-41f4-b146-1e7e528d876f.jpeg" 
                  alt="Кресло-пуф с спинкой" 
                  className="rounded-2xl shadow-2xl aspect-square object-cover mt-8"
                />
                <img 
                  src="https://cdn.poehali.dev/files/e0b23b58-a3b2-41b2-b28d-7a8b75f9048d.jpeg" 
                  alt="Комфортное кресло для чтения" 
                  className="rounded-2xl shadow-2xl aspect-square object-cover -mt-8"
                />
                <img 
                  src="https://cdn.poehali.dev/files/04132e82-df92-4086-8ac1-0fa3e688b855.jpeg" 
                  alt="Кресло-пуф в интерьере" 
                  className="rounded-2xl shadow-2xl aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Почему выбирают нас?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Наша бескаркасная мебель объединяет комфорт, качество и универсальность
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="RefreshCw" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">3 в 1</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Легко трансформируется из пуфа в кресло и матрас. Одна покупка — три варианта использования.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Feather" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Легкость</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Бескаркасная конструкция делает мебель легкой и мобильной. Легко перемещать по дому.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Качество</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Высококачественные материалы и наполнители. Долговечность и комфорт на годы.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наша продукция</h2>
            <p className="text-xl text-muted-foreground">Выберите размер и цвет под ваш интерьер</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Классик", size: "80x80x40", price: "7 990", color: "Серый" },
              { name: "Макси", size: "100x100x45", price: "9 990", color: "Бежевый" },
              { name: "Компакт", size: "70x70x35", price: "6 990", color: "Коричневый" },
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-muted to-accent/20 flex items-center justify-center">
                  <Icon name="Sofa" size={80} className="text-primary/30" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Размер:</span>
                      <span>{product.size} см</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Цвет:</span>
                      <span>{product.color}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">{product.price} ₽</div>
                    <Button size="sm">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Calculator */}
      <section id="delivery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Калькулятор доставки</h2>
              <p className="text-xl text-muted-foreground">Узнайте стоимость доставки в ваш город</p>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="city" className="text-base font-medium">Выберите город</Label>
                    <Select value={selectedCity} onValueChange={handleCityChange}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Выберите город доставки" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="moscow">Москва</SelectItem>
                        <SelectItem value="spb">Санкт-Петербург</SelectItem>
                        <SelectItem value="ekaterinburg">Екатеринбург</SelectItem>
                        <SelectItem value="novosibirsk">Новосибирск</SelectItem>
                        <SelectItem value="kazan">Казань</SelectItem>
                        <SelectItem value="nizhny">Нижний Новгород</SelectItem>
                        <SelectItem value="other">Другой город</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {deliveryCost > 0 && (
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Стоимость доставки:</span>
                        <span className="text-2xl font-bold text-primary">{deliveryCost} ₽</span>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        Доставка: CDEK, Boxberry, Почта России
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Truck" size={24} className="text-primary" />
                    <span>Быстрая доставка 1-3 дня</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Package" size={24} className="text-primary" />
                    <span>Надежная упаковка</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Shield" size={24} className="text-primary" />
                    <span>Страховка груза</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={24} className="text-primary" />
                    <span>Проверка при получении</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Оформить заказ</h2>
              <p className="text-xl text-muted-foreground">Заполните форму и мы свяжемся с вами в течение 15 минут</p>
            </div>

            <Card className="p-8">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium">Имя</Label>
                  <Input id="name" placeholder="Введите ваше имя" className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-base font-medium">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="delivery-city" className="text-base font-medium">Город доставки</Label>
                  <Input id="delivery-city" placeholder="Укажите город для доставки" className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="product" className="text-base font-medium">Выберите товар</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Выберите модель" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="classic">Классик - 7 990 ₽</SelectItem>
                      <SelectItem value="maxi">Макси - 9 990 ₽</SelectItem>
                      <SelectItem value="compact">Компакт - 6 990 ₽</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="comment" className="text-base font-medium">Комментарий (необязательно)</Label>
                  <Textarea id="comment" placeholder="Дополнительные пожелания к заказу" className="mt-2" />
                </div>
                
                <Button size="lg" className="w-full text-lg py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заказ
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Отзывы наших клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят покупатели о нашей продукции</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна К.",
                city: "Москва",
                text: "Отличный пуф! Трансформируется легко, очень удобный. Дети в восторге, используют как кресло для игр.",
                rating: 5
              },
              {
                name: "Михаил С.",
                city: "СПб",
                text: "Купил для дачи. Качество материалов супер, швы крепкие. Как матрас тоже очень комфортный.",
                rating: 5
              },
              {
                name: "Елена Р.",
                city: "Казань",
                text: "Быстрая доставка, хорошая упаковка. Размер точно как заявлен. Рекомендую!",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                  <div className="pt-4 border-t">
                    <div className="font-medium">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.city}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">Контакты</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-2">
                <Icon name="Phone" size={32} className="text-primary mx-auto" />
                <h3 className="font-medium">Телефон</h3>
                <p className="text-muted-foreground">+7 (800) 123-45-67</p>
              </div>
              <div className="space-y-2">
                <Icon name="Mail" size={32} className="text-primary mx-auto" />
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">info@comfortspace.ru</p>
              </div>
              <div className="space-y-2">
                <Icon name="Clock" size={32} className="text-primary mx-auto" />
                <h3 className="font-medium">Режим работы</h3>
                <p className="text-muted-foreground">Пн-Вс: 9:00-21:00</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
              <p className="text-muted-foreground mb-6">Звоните прямо сейчас и получите бесплатную консультацию!</p>
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Sofa" size={32} className="text-primary" />
                <h3 className="text-xl font-bold">ComfortSpace</h3>
              </div>
              <p className="text-background/70">
                Производитель качественной бескаркасной мебели с доставкой по всей России.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Продукция</h4>
              <ul className="space-y-2 text-background/70">
                <li>Пуфы-кресла</li>
                <li>Матрасы</li>
                <li>Аксессуары</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Информация</h4>
              <ul className="space-y-2 text-background/70">
                <li>О компании</li>
                <li>Доставка и оплата</li>
                <li>Гарантия</li>
                <li>Возврат</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <div className="space-y-2 text-background/70">
                <div>+7 (800) 123-45-67</div>
                <div>info@comfortspace.ru</div>
                <div>Пн-Вс: 9:00-21:00</div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-background/20" />
          
          <div className="text-center text-background/70">
            <p>&copy; 2024 ComfortSpace. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;