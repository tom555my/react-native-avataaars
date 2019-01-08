var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { PixelRatio } from "react-native";
import ReactDOMServer from "react-dom/server";
import Image from "react-native-remote-svg";
import { default as AvatarReact, Piece as PieceReact } from "avataaars";
var Avatar = (function (_super) {
    __extends(Avatar, _super);
    function Avatar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Avatar.prototype.render = function () {
        var size = this.props.size;
        return (React.createElement(Image, { source: {
                uri: "data:image/svg+xml;utf8," + ReactDOMServer.renderToString(React.createElement(AvatarReact, __assign({ style: {
                        width: PixelRatio.getPixelSizeForLayoutSize(size),
                        height: PixelRatio.getPixelSizeForLayoutSize(size)
                    } }, this.props)))
            }, style: {
                width: size,
                height: size
            } }));
    };
    return Avatar;
}(React.Component));
export { Avatar };
var Piece = (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Piece.prototype.render = function () {
        var pieceSize = this.props.pieceSize;
        return (React.createElement(Image, { source: {
                uri: "data:image/svg+xml;utf8," + ReactDOMServer.renderToString(React.createElement(PieceReact, __assign({}, this.props)))
            }, style: {
                width: Number(pieceSize),
                height: Number(pieceSize)
            } }));
    };
    return Piece;
}(React.Component));
export { Piece };
