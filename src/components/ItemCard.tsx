import React from "react";
import { IonItem, IonAvatar, IonLabel } from "@ionic/react";
import { Item } from "../models/item.model";


const ItemCard: React.FC<{ item: Item }> = ({ item }) => {
    return (
        <IonItem>
            <IonAvatar slot="start">
                <img src={item.image} alt={item.name} />
            </IonAvatar>
            <IonLabel>
                <h2>{item.name}</h2>
            </IonLabel>
        </IonItem>
    );
}

export { ItemCard }