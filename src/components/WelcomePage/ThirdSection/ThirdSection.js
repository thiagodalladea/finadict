import style from './ThirdSection.module.css';
import white_logo from '../../../assets/white_logo.svg';
import github_icon from '../../../assets/icons/github.png';
import linkedin_icon from '../../../assets/icons/linkedin.png';

export function ThirdSection() {
    return (
        <div className={ style.footer }>
            <div className={ style.globalContainer }>
                <div className={ style.firstContainer }>
                    <img src={ white_logo } alt='Finadict white logo'/>
                </div>

                <div className={ style.line }></div>

                <div className={ style.secondContainer }>
                    <img src={ linkedin_icon } alt='LinkedIn icon'/>
                    <img src={ github_icon } alt='GitHub icon'/>
                </div>
            </div>
            <div className={ style.txtFooter }>
                <p>Projeto criado e desenvolvido por Thiago Dalla Dea</p>            
            </div>    
        </div>
    )
}