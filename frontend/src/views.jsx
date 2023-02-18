import Puppy from './assets/puppy.jpg';

const views = [];

views.push((
    <>
        <h1>Первая страница</h1>
        <p>
            Здесь может идти чисто текст, могут быть какие-то 
            полезные <a href="http://example.com">ссылки</a>. Также мы можем
            расположить какие-нибудь картинки ниже:
        </p>

        <img src={Puppy} style={{width: '400px'}} />
    </>
));

views.push((
    <h1>HElol</h1>
))

views.push((
    <h1>lk</h1>
))

export default views;
