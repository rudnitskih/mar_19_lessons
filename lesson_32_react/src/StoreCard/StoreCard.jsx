import React from "react";
import styles from "./StoreCard.module.css";
import classNames from "classnames";

function onCardClick(storeName) {
  console.log(`Store ${storeName} was clicked`);
}

export function StoreCard(props) {
  const { notAvaialble, title, categories, imageUrl } = props.restaurent;

  let className = classNames(styles.storeCard, {
    [styles.notAvailable]: notAvaialble
  });
  let loading = false;

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <button className={className} onClick={() => onCardClick(title)}>
      <span className={styles.title}>{title}</span>
      {imageUrl !== undefined && (
        <img src={imageUrl} alt="" width="50px" className="store-card__image" />
      )}

      <ul className="store-card__categories">
        {categories.map((category, i) => {
          return (
            <li className="store-card__category" key={i}>
              {category.keyName}
            </li>
          );
        })}
      </ul>
    </button>
  );
}
