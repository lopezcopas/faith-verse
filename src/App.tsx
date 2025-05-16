import { useMemo, useState } from 'react';
import './App.css'
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { fetchResponse } from './response';
import { Card, CardContent, CardTitle } from './components/ui/card';
import cross from './assets/cross.png';
import { SpinningLoader } from './components/loader';

interface Response {
  id: number;
  book: string;
  chapter: number;
  verse: number;
  body: string;
}

function App() {
  const [prompt, setPrompt] = useState<string>('');
  const [responses, setResponses] = useState<null|Response[]>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const placeholder: string = useMemo(() => {
    const placeholders = [
      "Happy",
      "Sad",
      "Angry",
      "Fearful",
      "Surprised",
      "Disgusted",
      "Loving",
      "Guilty",
      "Ashamed",
      "Excited"
    ];
    return placeholders[Math.floor(Math.random() * 10)];
  }, []);

  const handleSubmit = async () => {
    if (!prompt) return;

    if (isLoading) return;

    // Set loading state
    setIsLoading(true);
    
    // Clear previous responses
    setResponses(null);
    
    try {
      const result = await fetchResponse(prompt);
      setResponses(result);
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 justify-center items-center'>
      <img src={cross} className='w-48 animate-fade-in-scale'/>
      <h1 className='text-white'>Welcome to Faith Verse. How are you feeling today?</h1>
      <p className='text-zinc-400'>I am feeling...</p>
      <Input type="text" placeholder={placeholder} onChange={(e) => setPrompt(e.target.value)} className='text-white' autoFocus/>
      <div className='flex flex-row gap-4'>
        <Button onClick={handleSubmit} disabled={isLoading}>Submit</Button>
        {isLoading && <SpinningLoader />}
      </div>
      <div className='w-full flex flex-wrap gap-6 justify-center'>
        { responses && responses.map(response => (
          <Card 
            onClick={() => navigator.clipboard.writeText(`"${response.body}" ${response.book} ${response.chapter}:${response.verse} NRSV-CE`)} 
            className='bg-zinc-900 border-none shadow-md p-4 pt-6 basis-[calc(33.333%-1rem)] animate-fade-in-scale hover:cursor-pointer hover:bg-zinc-800 transition-transform duration-100 hover:scale-105 active:bg-zinc-700'
          >
            <CardTitle className='flex flex-row justify-between text-white'>
              <h3>{response.book} {response.chapter}:{response.verse}</h3>
              <h3 className='text-zinc-400'>NRSV-CE</h3>
            </CardTitle>
            <CardContent className='text-left text-zinc-400 flex justify-center items-center h-full'>
              <p className='text-sm leading-relaxed text-gray-300'>"{response.body}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </form>
  )
}

export default App
