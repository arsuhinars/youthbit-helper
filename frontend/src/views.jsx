import Puppy from './assets/puppy.jpg';
import TextInputHelper from './components/TextInputHelper';
import CheckboxInputHelper from './components/CheckboxInputHelper';

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
    <>
        <h1>Вторая страничка</h1>
        <p>
            А теперь посмотрим на тестовую форму.
        </p>

        <TextInputHelper
            name='test-field'
            label='Тестовое поле'
            placeholder='Введите текст'
            className='w-2/3 mx-auto'
        />

        <CheckboxInputHelper
            name='checkbox-test'
            label='Поле с флажком'
            className='w-2/3 mx-auto mt-4'
        />
    </>
))

views.push((
    <h1>lk</h1>
))

export default views;
