'use client'
import { useEffect, useRef, useState } from 'react';
import '../styles/index.css';
import { currencies } from '../Currencies';
import { ICurrency } from '@/app/types';

export default function ConvertSection() {
    const [isFrom, setIsFrom] = useState(false);
    const [isTo, setIsTo] = useState(false);
    const [amount, setAmount] = useState<any>(1);

    const [selectedFromCurrency, setSelectedFromCurrency] = useState<ICurrency | null>(null);
    const [selectedToCurrency, setSelectedToCurrency] = useState<ICurrency | null>(null);

    const handleFromCurrencySelect = (currency: ICurrency) => {
        setSelectedFromCurrency(currency);
        setIsFrom(false); // Hide the dropdown after selection
    };

    const handleToCurrencySelect = (currency: ICurrency) => {
        setSelectedToCurrency(currency);
        setIsTo(false); // Hide the dropdown after selection
    };

    const handleReverse = () => {
        setSelectedFromCurrency(selectedToCurrency);
        setSelectedToCurrency(selectedFromCurrency);
    }

    const totalValueFormatted =
    selectedFromCurrency && selectedToCurrency
    ? (amount * selectedFromCurrency.value) / selectedToCurrency.value
    : 0;

    const formattedTotalValue = totalValueFormatted.toLocaleString('en-US', { maximumFractionDigits: 6 });

    return (
        <div className='input_section'>
            <section>
                <h2>Amount</h2>
                <input 
                placeholder='$1.00'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                />
            </section>

            <section>
                <h2>From</h2>
                <div onClick={() => setIsFrom((prev) => !prev)} className='button_open'>
                    <button
                        
                    >
                        {selectedFromCurrency ? `${selectedFromCurrency.name} (${selectedFromCurrency.value})` : 'Select Currency'}
                    </button>
                    <span style={{cursor: 'pointer'}}>
                        {!isFrom ? <>&#9660;</> : <>&#9650;</>}
                    </span>    
                </div>

                {isFrom && (
                    <div className='dropdown-content'>
                        {currencies.map((currency) => (
                            <div
                                className="dropdown-content_single"
                                key={currency.short_name}
                                onClick={() => handleFromCurrencySelect(currency)}
                            >
                                {currency.short_name} ({currency.value})
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <button onClick={handleReverse} className='reverse'>⟵ ⟶</button>

            <section>
                <h2>To</h2>
                <div onClick={() => setIsTo((prev) => !prev)} className='button_open'>
                    <button>
                        {selectedToCurrency ? `${selectedToCurrency.name} (${selectedToCurrency.value})` : 'Select Currency'}
                    </button>
                    <span style={{cursor: 'pointer'}}>
                        {!isTo ? <>&#9660;</> : <>&#9650;</>}
                    </span>  
                </div>
                {isTo && (
                    <div className='dropdown-content'>
                        {currencies.map((currency) => (
                            <div
                                className="dropdown-content_single"
                                key={currency.short_name}
                                onClick={() => handleToCurrencySelect(currency)}
                            >
                                {currency.short_name} ({currency.value})
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <div className='result'>
                {selectedFromCurrency && selectedToCurrency && (
                    <div className='result_section'>
                    <h3>
                        {amount} : {selectedFromCurrency.name} = 
                    </h3>
                    <h5 style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <p>{formattedTotalValue}</p> {selectedToCurrency.name} ({selectedToCurrency.value})
                    </h5>
                    </div>
                )}
            </div>
        </div>
    )
}