import * as React from "react";
export interface Props {
    avatarStyle: string;
    size: number;
    topType?: string;
    accessoriesType?: string;
    hairColor?: string;
    facialHairType?: string;
    facialHairColor?: string;
    clotheType?: string;
    clotheColor?: string;
    graphicType?: string;
    eyeType?: string;
    eyebrowType?: string;
    mouthType?: string;
    skinColor?: string;
    pieceType?: string;
    pieceSize?: string;
}
export declare class Avatar extends React.Component<Props> {
    render(): JSX.Element;
}
export declare class Piece extends React.Component<Props> {
    render(): JSX.Element;
}
