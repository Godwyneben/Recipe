import { useTheme } from '../Hooks/useTheme'

// styles 
import './ThemeSelector.css'

const themeColors = ['crimson', 'green', 'blue']

export default function ThemeSelector() {
    const {changeColor} = useTheme()

  return (
    <div className='theme-selector'>
        <div className="theme-buttons">
          {themeColors.map(color => (
            <div key={color} onClick={() => changeColor(color)} style={{ background: color}}/>
          ))}
        </div>
    </div>
  )
}
