import Header from './header/header';
import './styles/index.css';
import { ICurrency } from '../types';
import { currencies } from './Currencies';
import ConvertSection from './ConvertSection/ConvertSection';

export default function Mainbody() {
    return (
        <div className='mainbody'>
            <Header />
            <div className='mainbody_container'>
                <h2>Welcome here</h2>
                <h2>Money Exchange</h2>
                <div className='all_currecies'>
                    {currencies.map((currecny: ICurrency) => (
                        <div className='single_currec' key={currecny.short_name}>
                            <h4>{currecny.name}</h4>
                            <h3>{currecny.value}</h3>
                        </div>
                    ))}
                </div>

                <ConvertSection />
            </div>
        </div>
    )
}