import React, {useState} from 'react';
import { Container } from './components/containers/container';
import { Button } from './components/ui/button'
import { ThemeProvider } from './context/theme-context';
import { Card } from './components/ui/card';
import { CardGrid } from './components/containers/card-grid';
import { LanguageProvider } from './context/lang-context';


const App: React.FC = () => {

  const[theme, setTheme] = useState<string>("light");
  const[lang, setLang] = useState<string>('uz')

  const toggleTheme = ():void=> {
    setTheme(theme==="light"?"dark":"light");
  } 

  const changeLanguage= (lang: string): void => {
    setLang(lang);

  }

  return (
    <LanguageProvider lang={lang} setLang={changeLanguage}>
      <ThemeProvider theme={theme} toggleTheme={toggleTheme}>
      <Container>
        <Button text="submit" type='submit' onClick={() => { toggleTheme() }} />
        <h1>Hello TypeScript</h1>
      </Container>

      <Container>
        <CardGrid>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardGrid>
      </Container>


    </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;