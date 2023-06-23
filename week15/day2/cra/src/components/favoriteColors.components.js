import React from "react";
export const UserFavoriteColors =({favorites}) => {
    return favorites.map((favorite, i) => <li key={i}>{favorite}</li>);
}



