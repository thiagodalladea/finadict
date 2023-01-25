import style from './SecondSection.module.css';
import interest_rate_up from './../../../assets/blenders/interest_rate_up.png';
import increase_profit from './../../../assets/blenders/increase_profit.png';
import subscription_time from './../../../assets/blenders/subscription_time.png';
import financial_presentation from './../../../assets/blenders/financial_presentation.png';

export function SecondSection() {
    return (
        <div className={ style.secondSection }>
            <div className={ style.firstContainer }>
                <div className={ style.imgContainer }>
                    <img src={ interest_rate_up } alt='Calculator'/>
                </div>
                
                <div className={ style.txtContainer }>
                    <h1>Planeje hoje. Realize amanhã.</h1>
                    <br></br>
                    <p>Planejar e controlar suas finanças é a melhor maneira para realizar seus sonhos.<br></br>Comece hoje. Agradeça amanhã!</p>
                </div>
            </div>
            
            <div className={ style.secondContainer }>
                <div className={ style.smallContainer }>
                    <img src={ increase_profit } alt='Increase profit'/>
                    <p>Alavanque seus rendimentos de um jeito simples e prático.</p>
                </div>

                <div className={ style.smallContainer }>
                    <img src={ subscription_time } alt='Subscription time'/>
                    <p>Relatórios financeiros semanais, mensais e anuais em um clique.</p>
                </div>

                <div className={ style.smallContainer }>
                    <img src={ financial_presentation } alt='Finantial presentation'/>
                    <p>Interface simples e intuitiva. Resultado é o nosso objetivo.</p>
                </div>
            </div>
        </div>
    )
}