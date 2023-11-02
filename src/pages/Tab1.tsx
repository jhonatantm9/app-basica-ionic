import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, IonList } from '@ionic/react';
import './Tab1.css';
import { ItemCard } from '../components/ItemCard';
import { Item } from '../models/item.model';

const Tab1: React.FC = () => {

  const [items, setItems] = useState<Item[]>([])

  const getItem = async (url: string) => {
    const response = await fetch(url)
    const data = await response.json()
    const item: Item = {
      name: data.name,
      image: data.sprites.default
    }
    return item
  }

  useIonViewDidEnter(() => {
    getItems().then((items) => {
      setItems(items)
    })
  })

  const getItems = async () => {
    let items: Item[] = []
    for (let i = 1; i <= 16; i++) {
      const item = await getItem(`https://pokeapi.co/api/v2/item/${i}`)
      items.push(item)
    }
    return items
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Poké-balls list</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {items.map((item, index) => <ItemCard key={index} item={item} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
