# React Native component for Avataaars

A thin wrapper on top of [React component for Avataaars](https://github.com/fangpenlin/avataaars), developed by [Fang-Pen Lin](https://twitter.com/fangpenlin), which is the React component for [Avataaars](https://avataaars.com/). This package allow you to use [React component for Avataaars](https://github.com/fangpenlin/avataaars) in React Native!

<p align="center">
    <img src="./avataaars.png" alt="avataars" width="250"/>
</p>

## Features

1. Just like [React component for Avataaars](https://github.com/fangpenlin/avataaars) but can be used in React Native Project

## Usage

```bash
yarn add react-native-avataaars
```

or

```bash
npm install react-native-avataaars --save
```

```jsx
...
import { Avatar } from "react-native-avataaars";
...

const YourComponent = props => (
    <Avatar
        size={300}
        avatarStyle="Circle"
        topType="ShortHairShortRound"
        accessoriesType="Prescription02"
        hairColor="Black"
        facialHairType="Blank"
        clotheType="BlazerShirt"
        eyeType="Happy"
        eyebrowType="Default"
        mouthType="Default"
        skinColor="Light"
    />
)
```

You may also use the Piece Element.

```jsx
...
import { Piece } from "react-native-avataaars";
...

const YourComponent = props => (
    <ScrollView>
        <Piece pieceType="mouth" pieceSize="100" mouthType="Eating" />
        <Piece pieceType="eyes" pieceSize="100" eyeType="Dizzy" />
        <Piece
            pieceType="eyebrows"
            pieceSize="100"
            eyebrowType="RaisedExcited"
        />
        <Piece
            pieceType="accessories"
            pieceSize="100"
            accessoriesType="Round"
        />
        <Piece
            pieceType="top"
            pieceSize="100"
            topType="LongHairFro"
            hairColor="Red"
        />
        <Piece
            pieceType="facialHair"
            pieceSize="100"
            facialHairType="BeardMajestic"
        />
        <Piece
            pieceType="clothe"
            pieceSize="100"
            clotheType="Hoodie"
            clotheColor="Red"
        />
        <Piece pieceType="graphics" pieceSize="100" graphicType="Skull" />
        <Piece pieceType="skin" pieceSize="100" skinColor="Brown" />
    </ScrollView>
)
```

## Credit

Credit to [Fang-Pen Lin](https://twitter.com/fangpenlin) making such amazing package and shout out to [Shiva Nandan](https://github.com/seekshiva), creator of [react-native-remote-svg](https://github.com/seekshiva/react-native-remote-svg). You two make this package possible!
