import style from './Header.module.css';
import white_logo from '../../../assets/white_logo.svg';

export function Header() {
	return (
		<div className={ style.header }>
			<div className={ style.logo }>
				<img src={ white_logo } alt="Finadict white logo"/>
			</div>
			
			<div className={ style.loginInfo }>
				<a href='/login'>Entrar</a>
				<button>Cadastrar-se</button>
			</div>
		</div>
	);
}