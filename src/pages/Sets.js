import React, { useEffect, useState } from 'react';
import Home from './Home';

const CardBundles = () => {
  const [bundles, setBundles] = useState([]);

  useEffect(() => {
    // Fetch card bundles from the API
    const fetchCardBundles = async () => {
      try {
        const response = await fetch('https://api.pokemontcg.io/v2/sets?q=series:sword&series:shield');
        const data = await response.json();

        // Set the fetched bundles in the state
        setBundles(data.data);

        // Fetch prices for card sets
        const bundlePrices = await Promise.all(
          data.data.map(async (bundle) => {
            const priceResponse = await fetch(`https://api.pokemontcg.io/v2/prices?q=set.id:${bundle.id}`);
            const priceData = await priceResponse.json();
            const bundlePriceData = priceData.data[0];
            return {
              ...bundle,
              price: bundlePriceData && bundlePriceData.tcgplayer && bundlePriceData.tcgplayer.prices && bundlePriceData.tcgplayer.prices.normal && bundlePriceData.tcgplayer.prices.normal.mid
                ? bundlePriceData.tcgplayer.prices.normal.mid
                : 'N/A',
            };
          })
        );

        // Update the bundles with the fetched prices
        setBundles(bundlePrices);
      } catch (error) {
        console.error('Error fetching card bundles:', error);
      }
    };

    fetchCardBundles();
  }, []);

  return (
    <div class>
      <Home /> {/* Render the Home component for the navigation bar */}
      <h1>Card Bundles</h1>
      <ul>
        {bundles.map((bundle) => (
          <li key={bundle.id}>
            <h2>{bundle.name}</h2>
            <img src={bundle.images.logo} alt={bundle.name} />
            <p>Series: {bundle.series}</p>
            <p>Total Cards: {bundle.total}</p>
            <p>Price: {bundle.price || '¥20,206.89'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardBundles;
