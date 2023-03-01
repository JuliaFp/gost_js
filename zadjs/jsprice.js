let a=[{name:'Престиж', star:2, 'city':'Пионеровка',price:6200, time:'14:00'}, 
{name:'Элита+', star:3, 'city':'Литяжевка', price:8500, time:'16:00'}, 
{name:'Козырь', star:2, 'city':'Балашов', price:7000, time:'13:00'}, 
{name:'Премимум', star:4, 'city':'Тростянка', price:11200, time:'12:00'}];


a=a.filter((d)=>{if (d.price===7000 || d.price<7000) return d;});


a.map((c)=>document.write(
`<hr><p>Название гостиницы: ${c.name}</p> 
<p>Город: ${c.city}</p>
<p>Количество звёзд: ${c.star}</p>
<p>Цена номера в сутки, руб: ${c.price}</p>
<p>Время заезда: ${c.time}</p><hr>`));