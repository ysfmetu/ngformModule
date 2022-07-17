# Form Module uygulaması

Uygulamamızda 3 tane component(table ,form,message) aynı ekranda çalışmaktadır.Uygulamamız Crud işlemi yapmaktadır.FormModule kullanılmış olup ,Bootstrapdan 
faydalanılmıştır.

# Detaylar
mesagge component:Üst tarafta mesaj paneli vardır ve dinamik olarak yaptığımız işlemleri okuyup bilgi mesajı vermektedir
table component : liste çekmekte ve edit-delete tuşları ile idleri alıp arka tarafta işlem yapmaktadır.
Form component  : edit ve create işlemi yapmaktadır. aynı platform üzerinde table component'tan gelen emire göre updata/create olayını belirlemektedir.
RXJS subject ile son kayıt hafızada tutulup ona göre ekrana mesaj verilir veya create or update olduğu belli olur

## ekran görüntüleri

![image](https://user-images.githubusercontent.com/45200802/179395888-7d260c66-8235-4c8d-a743-d688309c334d.png)

# Edit işlemi yapılırken

![image](https://user-images.githubusercontent.com/45200802/179395911-7f7635d2-59c5-48f2-b967-eb5758ee04a2.png)



