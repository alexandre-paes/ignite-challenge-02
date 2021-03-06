

// V2 - Minha solução

import '../styles/sidebar.scss';

import { useEffect, useState } from 'react';

import { Button } from '../components/Button';


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


export function SideBar() {

  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    </div>
  )
}