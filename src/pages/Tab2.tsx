import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonButton, IonCardSubtitle } from '@ionic/react';
import './Tab2.css';
import { Pokemon } from '../models/pokemon.model';

const Tab2: React.FC = () => {

  const [pokemon, setPokemon] = useState<Pokemon>({
    name: '',
    image: '',
    types: []
  })

  const getPokemon = async (url: string) => {
    const response = await fetch(url)
    const data = await response.json()
    const pokemon: Pokemon = {
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map((type: any) => type.type.name)
    }
    return pokemon
  }

  const getRandomPokemon = async () => {
    const id = Math.floor(Math.random() * 1291) + 1
    const pokemon = await getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return pokemon
  }

  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Select random pokemon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className='container'>
        {
          pokemon.image !== '' ? (
            <IonCard className='icon-card'>
              <img src={pokemon.image} alt="Pokemon image" />
              <IonCardHeader>
                <IonCardTitle>{pokemon.name}</IonCardTitle>
                <IonCardSubtitle>Pokemon type(s): {pokemon.types.join(', ')}</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          ) : (
            <IonCard className='icon-card'>
              <IonCardHeader>
                <IonCardTitle>Select one pokemon</IonCardTitle>
              </IonCardHeader>
            </IonCard>
          )
        }
        <IonButton onClick={() => getRandomPokemon().then((pokemon) => setPokemon(pokemon))}>Pick one</IonButton>
      </div>
    </IonPage>
  );
};

export default Tab2;
