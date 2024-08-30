import { useState, useEffect } from 'react'


type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type Theme = 'dark' | 'light'


export const Switch = () => {

    const [theme, setTheme] = useState<Theme>('light')
    const handleChange = (e: ChangeEvent) => setTheme(e.target.checked ? 'dark' : 'light')

    useEffect(() => {

        document.body.setAttribute('data-theme', theme);

    }, [theme]);
    return (
        <div className="container-switch">
            < span className="form-check form-switch ">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleChange} checked={theme === 'dark'} />
            </span>
        </div>
    )
}