import { Link } from 'react-router-dom';
import style from './FirstSection.module.css';
import calculator from '../../assets/blenders/calculator.png';
import { Header } from './Header.js';

export function FirstSection() {
    return(
        <div className={ style.firstSection }>
            <Header />
            <div className={ style.container }>
                <div className={ style.txtContainer }>
                    <h1>Controle das Finanças na palma da sua mão.</h1>
                    <br></br>
                    <p>Tudo o que você precisa em um só lugar.<br></br>Completo, online e gratuito!</p>
                </div>

                <div className={ style.imgContainer }>
                    <img src={ calculator } alt='Calculator'/>
                </div>
            </div>
            <Link to='/register' className={ style.registerButton }> <button>Crie sua conta grátis</button></Link>
        </div>
    )
}