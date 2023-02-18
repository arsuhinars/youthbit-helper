import { Telegram } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

export default function StartPage() {
    return (
        <div class="text-center">
            <h1>Добро пожаловать</h1>

            <p>
                Какое то описание, Какое то описание,
                Какое то описание, Какое то описание,
                Какое то описание, Какое то описание,
                Какое то описание, Какое то описание,
                Какое то описание, Какое то описание,
                Какое то описание, Какое то описание,
                Какое то описание, Какое то описание,
            </p>
            
            <Button className="mt-6">
                Войти через <Telegram className='inline' size={16} />
                <span class="font-semibold">Telegram</span>
            </Button>
            <br />
            <Link to={'/main'}>
                <Button background="bg-secondary" className="mt-2">
                    Продолжить
                </Button>
            </Link>
        </div>
    );
}
